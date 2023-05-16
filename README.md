# oracle-cloud-server
Oracle Cloud 서버 배포하기

## 진행사항
> 참고자료: https://sonhc.tistory.com/category/Guide_Tip_Tech/Oracle_Cloud_Free_Tire

### 1. Oracle Cloud 인스턴스 구성

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
- Jenkins 도커 이미지 생성
- 진행중... (Github 프로젝트를 도커에 올리고 Jenkins와 Github SSH 통신 설정해야함.)
> 참고자료: 
> [[Docker] Jenkins 구축](https://dev-play.tistory.com/entry/Docker-Jenkins-%EA%B5%AC%EC%B6%95) | 
[SpringBoot Jenkins 배포 자동화](https://heekng.tistory.com/139) | 
[Jenkins를 사용한 클라우드 배포에 대한 CI/CD 파이프라인 설정](https://docs.oracle.com/ko/solutions/cicd-pipeline/index.html#GUID-D5231DA5-98CB-4690-B15F-656181B0080C)
