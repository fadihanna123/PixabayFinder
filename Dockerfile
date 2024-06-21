FROM node:20.14.0-alpine3.20
WORKDIR /app
COPY package.json .
RUN yarn --production --ignore-scripts
COPY . .
EXPOSE 3000
CMD yarn dev
