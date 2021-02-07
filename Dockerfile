FROM node:lts-alpine as builder
WORKDIR /var/www
COPY . .
RUN npm i --production

FROM node:lts-alpine
WORKDIR /var/www
COPY --from=builder /var/www .
EXPOSE 8000
ENTRYPOINT npm run start
