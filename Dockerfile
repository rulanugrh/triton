FROM node:alpine as builder

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i
COPY . .

FROM builder as production
ENV NODE_PATH=./build

RUN npm run build

EXPOSE 3000