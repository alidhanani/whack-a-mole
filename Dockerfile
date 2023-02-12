FROM node:14-alpine as builder
ENV ESBUILD_PACKAGE=@esbuild/linux-arm64

WORKDIR /app

COPY yarn.lock ./

RUN yarn install --frozen-lockfile --production=true

RUN yarn add vite

COPY . .

RUN yarn build

FROM abiosoft/caddy:1.0.3
COPY Caddyfile /etc/Caddyfile
COPY --from=builder /app/dist /usr/share/caddy/html
