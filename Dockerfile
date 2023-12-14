FROM node:20.10.0-alpine

WORKDIR /usr/src/app

COPY ./backend/*.json .

RUN npm ci

COPY ./backend .

RUN npm run build

ENV NODE_ENV production
ENV PORT 8080

EXPOSE 8080

CMD [ "node", "dist/main.js" ]