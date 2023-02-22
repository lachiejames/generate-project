FROM node:lts/hydrogen

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install:ci

COPY . .
RUN yarn build

CMD ["yarn", "start"]
