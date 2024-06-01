FROM node:20.14.0-alpine3.20
WORKDIR /app
COPY package.json .
RUN npm i -g serve
RUN yarn --production
COPY . .
RUN yarn build
EXPOSE 3000
CMD serve dist
