FROM node:16-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g pnpm@next-7

COPY package.json  .
COPY pnpm-lock.yaml .

RUN pnpm install

COPY . .

EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
