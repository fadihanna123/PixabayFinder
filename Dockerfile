FROM node:20.15.1-alpine3.20
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn setup
COPY . .
EXPOSE 3000
CMD yarn dev
