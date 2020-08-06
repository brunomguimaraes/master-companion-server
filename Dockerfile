FROM node:10.15.3-alpine as builder
WORKDIR /master_companion
COPY . ./
RUN yarn install
RUN yarn build

FROM node:10.15.3-alpine
WORKDIR /todo_api
COPY --from=builder /master_companion ./
RUN yarn install --production=true
EXPOSE 8080
ENTRYPOINT ["yarn", "serve"]
