# work-cli -- 多项目共用开发环境脚手架

## 目录结构

```
.
├── src 业务目录
    ├── common  共用资源
    ├── xxx1.com 项目1
    └── xxx2.com 项目2
        ├── assets
        ├── components
        ├── lang
        ├── layout
        ├── middleware
        ├── pages
        ├── plugins
        ├── static
        ├── store
        ├── env.js
        ├── nuxt.config.js
        └── package.json
├── .dockerignore
├── .editorconfig
├── .eslintrc.js
├── .gitattributes
├── .gitignore
├── .npmrc
├── .prettierrc
├── .yarnrc
├── Dockerfile
├── jsconfig.json
├── package.json
├── README.md
├── run.sh  运行脚本
├── tsconfig.json
└── yarn.lock
```

## 使用方法

由于使用了 [workspaces](https://classic.yarnpkg.com/zh-Hans/docs/workspaces/) 工作区，需要先安装 `yarn`

```
$ npm install -g yarn --registry=https://registry.npm.taobao.org
$ yarn config set registry https://registry.npm.taobao.org/
```

忽略 node 版本引擎检查

```
yarn config set ignore-engines true
yarn cache clean
```

检查依赖更新

```
yarn upgrade-interactive --latest
```

安装依赖

```
$ yarn install
# 或者
# yarn install --ignore-engines
```

运行

```
$ yarn workspace xxx.com run dev
# 或者进入项目目录下运行
& cd src/projectName && yarn dev
```

插件安装

```
# 单独项目
$ yarn workspace xxx.com add xxx
# 公共部分
$ yarn add xxx -W
```

Docker 镜像打包和运行

```
sudo docker build -f ./src/projectName/Dockerfile -t ing/projectName:version .
sudo docker run -d --rm -p 8080:80 ing/projectName:version
```
