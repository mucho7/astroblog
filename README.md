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
