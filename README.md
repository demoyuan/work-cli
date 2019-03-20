# 简介

work-cli 是基于Vue Cli 3.x为基本开发环境，在官方基础架构上，配置了常用的第三方插件，以及约定目录结构和编码规范

## 目录结构

```
.
├── public  打包所需静态资源
    ├── img
        └──icons  网站icon图标
    └──index.html  项目入口页面
├── src 业务目录
    ├── api  AJAX请求
        ├── index.js  接口url配置
        └── request.js  HTTP, headers等配置
    ├── assets  静态资源
        ├── css
        └── images
    ├── components  共用组件
    ├── i18n  多语言文件
        └── lang  语言包
    ├── mixins  基于vue语法的复用代码块或工具
    ├── utils  基于源生js的代码块或第三方工具
    ├── router  路由配置
    ├── vuex  Vuex配置
    └── view  页面文件
└── tests  测试相关
```

## 快速开始

从 [gitlab - ingcreations](http://172.16.243.230/ingcreations-web/work-cli) 获取最新脚手架

```
git clone http://172.16.243.230/ingcreations-web/work-cli.git
```

进入项目根目录

```
cd work-cli
```

安装依赖

```
npm install 或 yarn
```

运行项目

```
npm run serve-dev 或 yarn serve-dev
```

> 注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！

国内下载node模块慢，设置第三方镜像源
```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

Yarn是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载
```
npm install -g yarn
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```
安装完 yarn 之后就可以用 yarn 代替 npm 了，例如用 `yarn` 代替 `npm install` 命令，用 `yarn add <package...> [--dev/-D]` 代替 `npm install <package...> [--save-dev/-D]`。详见[yarn文档](https://yarnpkg.com/zh-Hans/docs)

## 配置
第三方插件以及自定义配置文件

##### 根目录配置文件

修改根目录下配置文件，需重新运行 `npm run xxx` 等构建命令

```
.
├── .browserslistrc  浏览器兼容说明
├── .eslintrc.js  eslint代码规范检测
├── .prettierrc.js  prettierrc代码规范配置，配合eslint使用
├── babel.config.js  语法解析转换，常用于配置按需加载第三方UI组件
├── jest.config.js  单元测试配置
├── postcss.config.js  css处理
├── .env.*  环境常量配置
└── vue.config.js  vue cli配置
```

###### 环境变量
> env.* 文件

用于构建不同环境的版本，例如测试环境 `.env.qc` 和生产环境 `.env.release`
其后缀名相对应为 package.json 配置的打包命令， 例： 

`.env.qc` 对应打包命令 `npm run build-qc`

`.env.release` 对应打包命令 `npm run release`

```
NODE_ENV=production  //用于识别开发环境还是打包输出
VUE_APP_VERSION=1.0.0
VUE_APP_BASE='/app/'    //静态资源目录访问目录 https://xxx.xxx.com/app/
VUE_APP_DIST='release'  //打包输出目录 ./dist/release
VUE_APP_API_ROOT='https://xxx.xxx.com' // release环境api
VUE_APP_STORAGE_KEY='xxx-release' // 需要设置一个key防止同域名下Local Storage混淆
```

## 编码规范

##### 命名规范
[使用vue 官方推荐规范](https://cn.vuejs.org/v2/style-guide/#%E8%A7%84%E5%88%99%E5%BD%92%E7%B1%BB)

##### vuex调用规范
因使用`vuex`来处理跨组件之间的传参，应用变复杂时多人协作时容易造成混乱和臃肿。
解决以上问题使用[Module](https://vuex.vuejs.org/zh/guide/modules.html) ， 具体约定的配置如下：

```
.
└── vuex
    ├── modules
        ├── a.js  模块a
        ├── b.js  模块b
        └── index.js  模块目录
    └── store.js
```

> `vuex/modules/a.js`
```javascript
import { login } from '@/api'
export default {
    namespaced: true, // 使用命名空间，防止模块命名冲突
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async login() {
            let res = await login()
            return res
        }
    }
}
```

> `vuex/modules/index.js`
```javascript
export { default as a } from './a'
export { default as b } from './b'
```

> `vuex/store.js`
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import * as mod from './modules'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        a: mod.a,
        b: mod.b
    }
})
```
