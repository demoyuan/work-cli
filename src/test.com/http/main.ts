import axios from 'axios'
import qs from 'qs'
const store = require('store')

interface CodeConfig {
  statusCode: number
  code: number
}

class Main {
  key: string = process.env.storageKey || ''

  getLocal(): any {
    return store.get(this.key)
  }

  saveLocal(val: any): void {
    store.set(this.key, val)
  }

  removeLocal(): void {
    store.remove(this.key)
  }

  delay(time: number = 300) {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  checkCode({ statusCode, code }: CodeConfig): boolean {
    if (statusCode === 200) {
      return code === 0 ? true : false
    } else {
      return false
    }
  }

  errMessage(data: any) {
    console.log(`${data?.message}, 错误码：${data?.code}`)
  }

  public async post(url: string, params?: any, options: any = { hasToken: true }): Promise<any> {
    let config = {
      method: 'post',
      url,
      data: qs.stringify(params),
      headers: {},
      ...options
    }
    options.hasToken && (config.headers['project_token'] = this.getLocal()?.userToken)
    try {
      let { data, status } = await axios(config)
      let resCode = this.checkCode({ statusCode: status, code: data.code })
      !resCode && this.errMessage(data)
      return { code: resCode, data: data.data }
    } catch (error) {
      this.errMessage({ message: '连接超时', code: 'CONNECTION_TIMED_OUT' })
      return { code: false, data: null }
    }
  }
}

export default Main
