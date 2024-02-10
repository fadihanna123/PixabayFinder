FROM node:21.6.1-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm serve
ENV REACT_APP_PUBLIC_PIXABAY_BASE_URL https://pixabay.com/api/
ENV REACT_APP_PUBLIC_PIXABAY_KEY 18269871-9984b5717c4bef14378a76910
RUN pnpm install
EXPOSE 3000
CMD pnpm dev
