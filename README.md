<div align="center">
  <img src="https://raw.githubusercontent.com/hey-dudegg/OnCore-Project/5bd5e22f175f356d9802a76fb1d18b7bc0a91c4d/frontend/src/assets/NewBanner.svg">

  <h2>동료들과 함께 알고리즘을 학습하고 소통할 수 있는 플랫폼</h2>
  <h4>🗝️ KeyWords <h4/>
  <p> #Algorithm #CodeMirror #CRDT #TLdraw #WebRTC #Socket #ClovaAI</p>
  <br>
  <div align="center">
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white"/>
    <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=white"/>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"/>
    <br>
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>
    <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=Redis&logoColor=white"/>
    <img src="https://img.shields.io/badge/WebRTC-333333?style=flat-square&logo=WebRTC&logoColor=white"/>
    <img src="https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=Socket.io&logoColor=white"/>
    <img src="https://img.shields.io/badge/Clova%20AI-00C73C?style=flat-square&logo=naver&logoColor=white"/>
    <img src="https://img.shields.io/badge/CodeMirror-FFFFFF?style=flat-square&logo=codemirror&logoColor=000000"/>
    <img src="https://img.shields.io/badge/tldraw-333333?style=flat-square&logo=tldraw&logoColor=white"/>
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/>
    
  </div>
  <br>
  <a href="https://youtu.be/dqOzQJm5DQMk">🎤 발표영상 보기 </a>
</div>

---

# 기획의도
크래프톤 정글에서 가장 많이 성장을 체감했던 알고리즘 코어타임을 정글 이후에도 온라인으로 계속 이어나가기 위해 제작했습니다.


# 서비스 소개
알고리즘 문제를 실시간으로 협업하여 풀 수 있는 웹 서비스


# 기능 소개

### ⚙️ 코드 에디터
- Yjs와 CodeMirror를 사용하여 실시간 동시 편집이 가능합니다.

|![2](https://github.com/hey-dudegg/OnCore-Project/assets/154962837/21937151-3e82-4b11-990d-6d5da2de2569)|
| ----------------------------------------------------------------------------- |
| 코드 에디터에서 실시간으로 코드 편집하기                                      |

### 📝 화이트 보드
- TLdraw와 소켓 연결을 사용하여 여러 구성원이 실시간으로 브레인스토밍 보드로 사용하도록 고안했습니다.
- 이를 통해 팀원들과 아이디어를 실시간으로 공유하고 협력할 수 있습니다.

| ![3](https://github.com/hey-dudegg/OnCore-Project/assets/154962837/11c4939c-3b3e-4705-b3a3-118c0ca28eec)|
| ----------------------------------------------------------------------------- |
| 화이트 보드에서 실시간으로 아이디어 공유하기                                  |

### 🧑‍🧑‍🧒‍🧒 화상 채팅
- WebRTC와 PeerJS를 사용하여 P2P 스트리밍을 구현하였습니다.
- Socket.IO를 통해 신호 교환을 처리하고, 사용자가 특정 방에 접속할 때 소켓은 방 참가자를 관리하고 신호 메시지 처리를 통해 P2P 연결을 설정합니다.
- 직접 연결된 메쉬 네트워크를 통해 오디오와 비디오를 스트리밍합니다.

| ![4](https://github.com/hey-dudegg/OnCore-Project/assets/154962837/35ea9b16-1dfe-4511-8526-8cb121b29984)|
| ----------------------------------------------------------------------------- |
| 화상 채팅을 통해 동료와 소통하기                                              |

### 💬 채팅 + AI 찬스
- Redis Pub/Sub과 소켓을 사용하여 사용자 간 실시간 채팅이 가능합니다.
- Clova AI LLM을 통합하여 사용자와 AI 간 상호작용을 통해 효율적으로 협업할 수 있습니다.

| ![5](https://github.com/hey-dudegg/OnCore-Project/assets/154962837/32327c19-3e77-4131-9011-a4e6b494043c)|
| ----------------------------------------------------------------------- |
| 사용자와 AI와의 실시간 채팅                                              |

### 📝 문제 보기 (백준 알고리즘)
- Puppetter와 Chromium 브라우저를 사용하여 필요한 정보를 수집합니다.
- Cheerio를 통해 태그를 파싱하고 제거하며, Redis 캐시를 활용하여 요청 시간을 단축시킬 수 있었습니다.

|![6](https://github.com/hey-dudegg/OnCore-Project/assets/154962837/083c3abc-27af-4cf6-a3c3-1fc047da859b)|
| ------------------------------------------------------------------------------ |
| 백준 문제를 실시간으로 불러오기                                                |

# ❗기술적 챌린지

### 문제 인식
서비스의 특성상 '실시간성'이 강조되며, 이에 따른 서버의 부하가 심해져 이를 줄이기 위한 방법의 필요성을 느끼게 되었습니다.

### 해결 방법

1. **실시간성 낮은 모듈의 최적화**
   - 실시간성이 낮은 모듈의 경우 소켓의 활용도가 낮다고 판단하여 다수 API 호출로 변경하여 서버의 부하를 줄이고 Redis 캐싱을 통해 속도를 향상시켰습니다.

2. **소켓 서버의 Vertical Scaling 문제 해결**
   - 기존 소켓 서버의 구성으로 발생하는 Vertical Scaling 문제를 해결하기 위해 Redis Pub/Sub을 활용하여 Horizontal Scaling이 가능하도록 서버 환경을 구축했습니다.
   - 문제 크롤러 호출 시 같은 방 유저들이 같은 문제를 호출할 가능성을 고려하여 Redis 캐싱으로 Request 속도를 향상시켰습니다.

3. **채팅 서버 부하 분산**
   - 여러 개의 소켓을 사용하기 때문에 부하 발생 시 Scaling 방법으로 Vertical Scaling 옵션만이 존재했으나, Redis Pub/Sub과 Load Balancer를 함께 사용하여 Horizontal Scaling 옵션도 가능하도록 서버 환경을 개선했습니다.
   - 기존 서비스에 영향을 크게 주지 않는 채팅 서버를 통해 부하를 줄이는 방법을 시도하였습니다.

### 문제 인식
기존의 웹 페이지 CSS와 새로 적용한 패키지의 CSS의 우선순위가 다르게 적용되면서 사용자에게 색상 표현이 안 나오는 문제가 발생했습니다.

### 해결 방법
 - 웹 개발 도구의 요소를 활용해 문제 지점을 찾아내고, 계층 구조를 파악해 동일한 문제가 발생하지 않도록 조치했습니다.
 - 나아가 기존의 CSS를 tailwind를 활용한 방식으로 개선하여 개발자가 더 직관적으로 파악할 수 있게끔 했습니다.

# 🔎 개발환경

개발 환경 설정은 다음과 같습니다.

# [.env]
```
<web_fe/backend>
MYSQL_DATABASE=userdb
MYSQL_HOST=localhost
MYSQL_PASSWORD=yours
MYSQL_PORT=3308
MYSQL_USERNAME=hello
SERVERLESS_GRADE_JAVASCRIPT=
SERVERLESS_GRADE_PYTHON=
JWT_SECRETKEY=secret
```

```
<web_fe/frontend>
VITE_CLIENT_URL="http://127.0.0.1:5173/"
VITE_SERVER_URL="http://127.0.0.1:3000/api"

VITE_SOCKET_SERVER_URL="ws://127.0.0.1:3333"
VITE_SOCKET_URL="ws://127.0.0.1:4444/"

VITE_CHAT_SOCKET_SERVER_URL="ws://127.0.0.1:8888/"
VITE_SOCKET_CANVAS_URL="ws://127.0.0.1:5555/"
```

```
<web_fe/chat>
?# common (? 빼세요)
NODE_ENV=dev
PORT=8888

?# cors
ALLOWED_ORIGIN=*
EXPOSE_HEADER=

?# redis
REDIS_PORT=6379
REDIS_HOST=localhost
REDIS_PASSWORD=
CACHE_TTL=300

?# mongo
MONGO_DEV=mongodb://localhost:27017/admin
MONGO_PROD=mongodb://localhost:27017/admin

?# clova
LLM_URL=yours
```

# [setting]
```
<터미널로 5개의 소켓을 열으신 후>

cd backend; yarn install; yarn start:dev

cd frontend; yarn install; yarn dev

cd frontend; yarn install; npx y-webrtc

cd socket; yarn install; yarn dev

cd chat; yarn install; yarn start
```

# 🔗 서버 아키텍처

![7](https://github.com/hey-dudegg/OnCore-Project/assets/154962837/6d6448ce-af8a-4b27-b481-8b5c692287ab)


# 👻 팀 소개 (Krafton Jungle 4th)
![8](https://github.com/hey-dudegg/OnCore-Project/assets/154962837/5d22de9d-d87b-4d6a-a28c-7ddd064f4940)


# 📃 프로젝트 포스터
![9](https://github.com/hey-dudegg/OnCore-Project/assets/154962837/867b9c77-fa4f-41d0-a444-c25ff00c93e9)

