FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install
ENV NEXT_PUBLIC_PIXABAY_BASE_URL https://pixabay.com/api/
ENV NEXT_PUBLIC_PIXABAY_KEY 18269871-9984b5717c4bef14378a76910
ENV NODE_ENV production
RUN pnpm build
EXPOSE 3000
CMD [ "npx", "serve", "build" ]
