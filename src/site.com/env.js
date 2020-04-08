const mode = process.env.MODE
const domain = 'site.com'

const option = {
  local: {
    MODE: 'development',
    PORT: 3000,
    HOST: '0.0.0.0',
    BASE_URL: '/',
    STORAGE_KEY: 'project_dev',
    API_ROOT: 'http://localhost:3001/api'
  },
  dev: {
    GENERATE_DIR: `dist/${domain}/dev`,
    MODE: 'production',
    PORT: 3000,
    HOST: '0.0.0.0',
    BASE_URL: '/',
    STORAGE_KEY: 'project_dev',
    API_ROOT: 'http://192.168.1.2/api'
  }
}

option[mode].domain = domain
module.exports = option[mode]
