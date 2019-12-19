import * as api from '~/http/index'
import Main from '../main'

class User extends Main {
  constructor() {
    super()
  }

  public async login(): Promise<any> {
    let { code, data } = await api.login({})
    let resCode = super.checkCode(code)
    return { code: resCode }
  }

  public async logout(): Promise<boolean> {
    await api.logout({})
    super.removeLocal()
    return true
  }
}

export default new User()
