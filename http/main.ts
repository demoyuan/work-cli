import axios from 'axios'
import qs from 'qs'
import store from 'store'

interface CodeConfig {
  statusCode: number
  code: number
}

class Main {
  key: string = process.env.storageKey || ''

  checkCode({ statusCode, code }: CodeConfig): boolean {
    if (statusCode === 200) {
      return code === 0 ? true : false
    } else {
      return false
    }
  }

  public async post(url: string, params: any, options: any = {}): Promise<any> {
    try {
      let { data, status } = await axios({
        method: 'post',
        url,
        data: qs.stringify(params),
        ...options
      })
      let resCode = this.checkCode({ statusCode: status, code: data.code })
      return { code: resCode, data: data.data }
    } catch (error) {
      return { code: false }
    }
  }

  saveLocal({ val }: { val: any }): void {
    store.set(this.key, val)
  }

  removeLocal(): void {
    store.remove(this.key)
  }
}

export default Main
