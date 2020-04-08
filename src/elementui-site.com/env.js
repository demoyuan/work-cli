const mode = process.env.MODE
const domain = 'elementui-site.com'

const option = {
  local: {
    MODE: 'development',
    PORT: 3001,
    HOST: '0.0.0.0',
    BASH_URL: '/', // 应用根URL
    STORAGE_KEY: 'project_dev', // localStorage key
    API_ROOT: 'http://localhost:3001/api' // api地址
  },
  dev: {
    GENERATE_DIR: `dist/${domain}/dev`,
    MODE: 'production',
    PORT: 3001,
    HOST: '0.0.0.0',
    BASE_URL: '/',
    STORAGE_KEY: 'project_dev',
    API_ROOT: 'http://192.168.1.2/api'
  }
}

option[mode].domain = domain
module.exports = option[mode]
