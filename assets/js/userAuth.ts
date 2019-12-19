import store from 'store'

interface Project {
  whootToken?: string
  userAuth?: number
}

class UserAuth {
  key: string = process.env.storageKey || ''
  projectStore: Project | undefined
  ignoreRoute = ['test', 'app-login', 'app-reset']

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
   * @param jumpFnc 跳转方法
   * @description 检查访问权限
   */
  checkAuth({ routeName, jumpFnc }: { routeName?: string, jumpFnc: Function }) {
    if (!this.whitelist(routeName)) {
      if (this.projectStore && this.projectStore.whootToken) {
      } else {
        jumpFnc()
      }
    }
  }
}

export default UserAuth
