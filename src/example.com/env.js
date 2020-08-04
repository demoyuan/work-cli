/**
 * 部署服务器环境对应的配置变量
 */

const mode = process.env.MODE
const domain = require('./package.json').name

const option = {
  local: {
    PORT: 3000,
    HOST: '0.0.0.0',
    BASE_URL: '/', // 应用根URL
    STORAGE_KEY: 'example_dev', // localStorage key
    API_ROOT: 'http://127.0.0.1:3000/api' // api地址
  },
  dev: {
    GENERATE_DIR: `dist/${domain}/dev`,
    PORT: 8080,
    HOST: '0.0.0.0',
    BASE_URL: '/',
    STORAGE_KEY: 'example_dev',
    API_ROOT: 'https://dev.example.com/api'
  },
  release: {
    GENERATE_DIR: `dist/${domain}/release`,
    PORT: 8080,
    HOST: '0.0.0.0',
    BASE_URL: '/',
    STORAGE_KEY: 'example_release',
    API_ROOT: 'https://release.example.com/api'
  }
}

option[mode].domain = domain
module.exports = option[mode]
