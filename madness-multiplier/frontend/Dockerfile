FROM node:18 AS build

ENV NODE_ENV=development
#sends that var throughout whole container

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]