# oracle-cloud-server

Oracle Cloud 서버 배포하기

## 진행사항

> 참고자료: https://sonhc.tistory.com/category/Guide_Tip_Tech/Oracle_Cloud_Free_Tire

### 1. Oracle Cloud 인스턴스 구성

```
구성: VM.Standard.A1.Flex
OCPU 개수: 4
네트워크 대역폭(Gbps): 4
메모리(GB): 24
```

### 2. 인스턴스 설정

- 기본포트 변경 (22 -> 221)
- User 계정 생성, ubuntu 계정 접근 불가 설정

### 3. Docker 설정

- [ARM용 최신 Docker-Compose 설치하기](https://blog.dalso.org/article/arm%EC%9A%A9-%EC%B5%9C%EC%8B%A0-docker-compose-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)

```
$ wget https://github.com/linuxserver/docker-docker-compose/releases/download/1.29.2-ls51/docker-compose-arm64
$ mv docker-compose-arm64 docker-compose
$ sudo apt-get install -y docker-compose
```

- Nginx Proxy Manager 설치
  - SSL 인증서를 간단하게 받을 수 있다.
  - `https://nginx.{DNS주소}`로 접근
- Portainer 설치
  - Docker Web GUI
  - `https://portainer.{DNS주소}`로 접근

### 4. Jenkins 설치

#### 1) Docker in Docker

> 참고자료: [[Docker] 도커 안에 젠킨스 설치 (도커 인 도커, Docker In Docker, D in D)](https://narup.tistory.com/228)

- `~/docker/` 디렉토리에 `/jenkins` 디렉토리 생성

- Dockerfile, docker-compose.yml 생성

  - Dockerfile

    ```
    FROM jenkins/jenkins:lts
    
    USER root
    
    # docker 설치
    RUN apt-get update && \
     apt-get -y install apt-transport-https \
     ca-certificates \
     curl \
     gnupg2 \
     zip \
     unzip \
     software-properties-common && \
    curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
     add-apt-repository \
     "deb [arch=arm64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
     $(lsb_release -cs) \
     stable" && \
     apt-get update && \
     apt-get -y install docker-ce
     
     # docker-compose 설치
     RUN curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
        chmod +x /usr/local/bin/docker-compose && \
        ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
    ```

    -> `"deb [arch=arm64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")` 여기에서 AMD 인스턴스의 경우 `[arch=amd64]`로 변경해야함.

  - docker-compose.yml

    ```
    version: '3.7'
    
    services:
      jenkins:
        build:
          context: .
          dockerfile: Dockerfile
        container_name: 'jenkins_docker'
        restart: always
        user: root
        ports:
          - '8282:8080'
        volumes:
          - './jenkins_home:/var/jenkins_home'
          - '/var/run/docker.sock:/var/run/docker.sock'
    
    networks:
      default:
        external:
          name: nginx-proxy-manager
    ```

    -> 도커 컨테이너에 설치된 젠킨스가 컨테이너들을 관리하기 위해 도커 볼륨을 연결해줌. `'/var/run/docker.sock:/var/run/docker.sock'`

- `docker-compose up -d` 젠킨스 컨테이너 생성
- `http://{DNS주소}:8282` 접속 후 젠킨스 초기 설정. 8282는 내가 설정해준 포트번호
  - `docker logs jenkins_docker` 젠킨스 컨테이너의 로그를 출력해보면 초기 설정에 필요한 password 볼 수 있음.

#### 2) Jenkins와 Github 연동

- Github 프로젝트의 deploy/backend 브랜치와 Jenkins 연동, Webhook 사용

> 참고자료: 
> [젠킨스와 깃허브 연동하기](https://yermi.tistory.com/entry/Jenkins-%EC%A0%A0%ED%82%A8%EC%8A%A4Jenkins%EC%99%80-%EA%B9%83%ED%97%88%EB%B8%8CGithub-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0-Github%EC%97%90-%EC%98%AC%EB%A6%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Jenkins%EB%A1%9C-build%ED%95%98%EA%B8%B0) | 
> [[Docker] Jenkins 구축](https://dev-play.tistory.com/entry/Docker-Jenkins-%EA%B5%AC%EC%B6%95) | 
> [SpringBoot Jenkins 배포 자동화](https://heekng.tistory.com/139) | 
> [Jenkins를 사용한 클라우드 배포에 대한 CI/CD 파이프라인 설정](https://docs.oracle.com/ko/solutions/cicd-pipeline/index.html#GUID-D5231DA5-98CB-4690-B15F-656181B0080C)

- 젠킨스 아이템 생성, Freestyle project

  - 깃허브 연동을 위한 설정들을 해줌..
  - GitHub project 체크 후 Project url에 깃허브 레포 주소 입력, 소스코드 관리 - Git 선택 후 Credentials 추가, 빌드할 브랜치 설정, 빌드 유발 - GitHub hook trigger for GITScm polling 체크

- Build Steps에 **Execute shell** 추가

  - ```
    docker build -t testimg ./backend/app
    if (docker ps | grep "testimg"); then docker stop testimg; fi
    
    for retry_count in {1..10}
    do
      if ! (docker ps -a | grep "testimg")
      then
        echo "기존 컨테이너 stop 완료✅"
        break
      fi
    done
    
    docker run -d --rm -p 8010:8010 --network nginx-proxy-manager --name testimg testimg
    echo "Run test server"
    ```

  - 젠킨스 안에 있는 docker를 실행시켜 프로젝트 `./backend/app` 디렉토리에 위치한 Dockerfile을 이용해 testimg라는 이름의 컨테이너를 빌드. 

  - 서버마다 젠킨스 아이템을 생성하고, 배포 브랜치에 빌드할 이미지에 해당하는 Dockerfile을 배치시키면 서버 별로 컨테이너 생성 가능.

### 5. Nginx 설치

- (진행중..)
