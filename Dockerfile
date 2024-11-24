FROM node:22.11.0-alpine3.20
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn setup
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
