import { saveLocal } from '../../../common/assets/js/store'
import Request from '../request'
import * as api from '../index'

// 接口示例
class User extends Request {
  constructor() {
    super()
  }

  public async login(params: any) {
    let { code, data } = await super.post({
      url: api.login,
      params: {
        account: params.account,
        password: params.password
      },
      hasToken: false
    })
    if (code) {
      saveLocal({
        userToken: data.loginToken,
        username: data.username
      })
    }
    return { code }
  }

  public async logout() {
    let { code } = await super.post({
      url: api.logout
    })
    return { code }
  }
}

export default new User()
