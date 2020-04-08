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
```

安装依赖
```
$ yarn install
```

运行
```
$ yarn workspace xxx.com run dev
```

或可以运行 `shell` 脚本
```
# windows
$ sh ./run.sh

# linux
$ sudo chmod +x run.sh
$ ./run.sh
```