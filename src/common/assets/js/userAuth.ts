const store = require('store')

interface Project {
  userToken?: string
  userAuth?: number
}

class UserAuth {
  key: string = process.env.storageKey || ''
  projectStore: Project | undefined
  ignoreRoute = ['login', 'test']

  constructor(key?: string) {
    this.projectStore = store.get(key ? key : this.key)
  }

  /**
   * @param routeName 路由名
   * @description 是否在白名单
   * @returns true: 是, false: 否
   */
  whitelist(routeName: string | undefined): boolean {
    if (routeName) {
      let name = routeName.split('___')[0]
      return this.ignoreRoute.includes(name)
    } else {
      return false
    }
  }

  /**
   * @param routeName 路由名
   * @description 检查访问权限
   */
  checkAuth({ routeName }: { routeName?: string }): boolean {
    if (!this.whitelist(routeName)) {
      if (!(this.projectStore && this.projectStore.userToken)) {
        return false // 无登录token
      } else {
        return true // 已登录
      }
    } else {
      return true // 白名单路由无需登录
    }
  }
}

export default UserAuth
