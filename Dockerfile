  
FROM node:10.15.3-alpine as builder
WORKDIR /master-companion
COPY . ./
RUN yarn install
RUN yarn build

FROM node:10.15.3-alpine
WORKDIR /master-companion
COPY --from=builder /master-companion ./
RUN yarn install --production=true
EXPOSE 8080
ENTRYPOINT ["yarn", "serve"]