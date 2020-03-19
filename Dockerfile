FROM node:alpine AS builder
WORKDIR /home/app
COPY package.json yarn.lock ./
RUN sed -i "s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g" /etc/apk/repositories \
    && yarn config set registry https://registry.npm.taobao.org/ \
    && yarn config set ignore-engines true \
    && yarn
COPY . .
RUN yarn cross-env MODE=dev nuxt build --config-file src/test.com/nuxt.config.js \
    && rm -rf ./node_modules \
    && yarn install --production \
    && yarn cache clean --force

FROM node:alpine
WORKDIR /home/app
ENV NODE_ENV=production
ENV HOST 0.0.0.0
EXPOSE 3000
COPY --from=builder /home/app .
CMD ["yarn", "cross-env", "MODE=dev", "nuxt", "start", "--config-file", "src/test.com/nuxt.config.js"]