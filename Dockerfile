FROM node:alpine as builder

WORKDIR /usr/src/app
COPY . .

RUN npm i

FROM builder as production
ENV NODE_PATH=./build

RUN npm run build

EXPOSE 3000