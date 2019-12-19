const mode = process.env.MODE

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
    GENERATE_DIR: 'dist/dev',
    MODE: 'production',
    PORT: 3000,
    HOST: '0.0.0.0',
    BASE_URL: '/',
    STORAGE_KEY: 'project_dev',
    API_ROOT: 'http://192.168.1.2/api'
  }
}

module.exports = option[mode]
