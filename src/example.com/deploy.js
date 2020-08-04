/**
 * ftp上传脚本
 */

const { uploadFnc } = require('../common/plugins/deployConfig')
const domain = require('./package.json').name
const config = {
  dev: {
    host: '192.168.1.2',
    port: '22',
    username: 'admin',
    password: 'admin',
    localPath: `../../dist/${domain}/dev`,
    remotePath: '/data/web'
  }
}

uploadFnc(config[process.env.MODE])
