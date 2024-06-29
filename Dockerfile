FROM node:20.15.0-alpine3.20
WORKDIR /app
COPY yarn.lock package.json .
RUN yarn --silent --production --ignore-scripts
COPY . .
EXPOSE 3000
CMD yarn dev
