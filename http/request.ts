import axios from 'axios'

const service = axios.create({
  headers: {
    'Cache-Control': 'no-cache'
  }
})

service.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

interface ReqConfig {
  url: string
  params?: any
}

export const get = ({ url, params }: ReqConfig) => {
  return service
    .get(url, { params })
    .then(res => res.data)
    .catch(err => err)
}

export const post = ({ url, params }: ReqConfig) => {
  return service
    .post(url, params)
    .then(res => res.data)
    .catch(err => err)
}
