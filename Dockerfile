FROM node:22.19.0-alpine
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn setup
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
