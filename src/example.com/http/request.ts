/**
 * 请求二次封装，根据实际项目后端接口返回格式修改
 */
import { MessageBox, Loading } from 'element-ui'
import Main from '../../common/http/main'
import { getLocal, removeLocal } from '../../common/assets/js/store'

interface CodeConfig {
  statusCode: number
  code: number
}

interface ReqConfig {
  url: string
  params?: any
  hasToken?: boolean
  options?: any
}

interface ErrMessage {
  message?: string
  code: number | string
}

export default class Request extends Main {
  constructor() {
    super()
  }

  delay(time: number = 300) {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  loadingFnc() {
    let loading = Loading.service({ lock: true, background: 'rgba(0, 0, 0, 0.7)' })
    let delayCloseFnc = async(time: number) => {
      await this.delay(time)
      loading.close()
    }
    return delayCloseFnc
  }

  errMessage({ message, code }: ErrMessage) {
    switch (code) {
      case 1001:
        message = '请登录'
        break
      case 1002:
        message = '登录已过期'
        break
      case undefined:
        message = message ?? '网络错误'
        code = 'CONNECTION_TIMED_OUT'
        break
      default:
        break
    }
    MessageBox.alert(`${message}`, '', {
      confirmButtonText: '确定',
      type: 'warning',
      callback: async() => {
        // 清除用户登录信息
        if (code === 1001 || code === 1002) {
          removeLocal()
          await this.delay(100)
          window.location.reload()
          await this.delay(100)
        }
      }
    })
  }

  checkCode({ statusCode, code }: CodeConfig) {
    if (statusCode === 200) {
      return code === 0
    } else {
      return false
    }
  }

  async responseFnc({ res, status }: any) {
    let loadingClose = this.loadingFnc()
    let resCode = await this.checkCode({ statusCode: status, code: res?.code })
    !resCode && this.errMessage({ message: res?.message ?? res?.data, code: res?.code })
    return { ...res, code: resCode, loadingClose: loadingClose(300) }
  }

  public async post({ url, params, hasToken = true, options }: ReqConfig): Promise<any> {
    let { res, status } = await super.axiosPost({
      url,
      params,
      toQs: true,
      headers: hasToken ? { oa_token: getLocal()?.userToken } : {},
      ...options
    })
    return this.responseFnc({ res, status })
  }

  public async get({ url, params, hasToken = true, options }: ReqConfig): Promise<any> {
    let { res, status } = await super.axiosGet({
      url,
      params,
      headers: hasToken ? { oa_token: getLocal()?.userToken } : {},
      ...options
    })
    return this.responseFnc({ res, status })
  }
}
