# node 기반 docker 이미지 생성
FROM node

# 경로 설정하기
WORKDIR /app

# package.json을 working 디렉토리에 복사한다.  ./은 현재 디렉토리를 의미
COPY package.json .

# 의존성 설치 명령어를 실행한다.
RUN npm install

# 현재 디렉토리의 파일을 도커 컨테이너의 working 디렉토리에 복사
COPY . .

# 환경변수 적용
# hot reloading : 소스 코드를 변경했을 때 페이지를 새로고침하지 않고 바뀐 소스 코드만 빠르게 교체해 준다.
# 윈도우 환경에서 hot reloading적용이 되지않을떄 CHOKIDAR_USEPOLLING=true
ENV CHOKIDAR_USEPOLLING=true

# 해당 포트 외부에 노출
EXPOSE 5173

# npm run dev 스크립트 실행
CMD ["npm", "run", "dev"]
