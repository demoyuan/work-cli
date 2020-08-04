import axios from 'axios'
import qs from 'qs'

interface ReqConfig {
  method?: string
  url: string
  params?: any
  headers?: any
  toQs?: boolean
  options?: any
}

class Main {
  public async axiosPost({ url, params, headers, toQs = false, options }: ReqConfig): Promise<any> {
    try {
      params = toQs ? qs.stringify(params) : params
      let { data, status } = await axios.post(url, params, {
        headers,
        ...options
      })
      return { res: data, status }
    } catch (error) {
      return { res: null, status: 500 }
    }
  }

  public async axiosGet({ url, params, headers, options }: ReqConfig): Promise<any> {
    try {
      let { data, status } = await axios.get(url, {
        params,
        headers,
        ...options
      })
      return { res: data, status }
    } catch (error) {
      return { res: null, status: 500 }
    }
  }

  public async axiosPut({ url, params, headers, toQs = false, options }: ReqConfig): Promise<any> {
    try {
      params = toQs ? qs.stringify(params) : params
      let { data, status } = await axios.put(url, params, {
        headers,
        ...options
      })
      return { res: data, status }
    } catch (error) {
      return { res: null, status: 500 }
    }
  }

  public async axiosDelete({ url, params, headers, options }: ReqConfig): Promise<any> {
    try {
      let { data, status } = await axios.delete(url, {
        params,
        headers,
        ...options
      })
      return { res: data, status }
    } catch (error) {
      return { res: null, status: 500 }
    }
  }
}

export default Main
