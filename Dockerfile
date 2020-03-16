FROM node:alpine

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN sed -i "s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g" /etc/apk/repositories \
    && yarn \
    && yarn cross-env MODE=dev nuxt build --config-file src/test.com/nuxt.config.js \
    && yarn cache clean --force

ENV HOST "0.0.0.0"
EXPOSE 3000

CMD ["yarn", "cross-env", "MODE=dev", "nuxt", "start", "--config-file", "src/test.com/nuxt.config.js"]