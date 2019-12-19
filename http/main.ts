import store from 'store'

class Main {
  key: string = process.env.storageKey || ''

  checkCode({ code }: { code: number }): boolean {
    return code === 0 ? true : false
  }

  formatArr({}) {
    return []
  }

  saveLocal({ val }: { val: any }): void {
    store.set(this.key, val)
  }

  removeLocal(): void {
    store.remove(this.key)
  }
}

export default Main
