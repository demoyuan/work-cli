import * as api from './index'
import Main from '../main'

class User extends Main {
  constructor() {
    super()
  }

  public async login(): Promise<any> {
    let { code, data } = await super.post(api.login, {
      username: 'aaa',
      pass: '123'
    }, { hasToken: false })
    super.saveLocal({
      userToken: 'test-token',
      id: 123,
      name: 'aaa'
    })
    return { code, data }
  }

  public async logout(): Promise<boolean> {
    super.removeLocal()
    return true
  }
}

export default new User()
