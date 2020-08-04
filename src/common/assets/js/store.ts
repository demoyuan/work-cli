const store = require('store')
const key: string = process.env.storageKey || ''

export const getLocal: any = () => {
  return store.get(key)
}

export const saveLocal: any = (val: any) => {
  store.set(key, val)
}

export const removeLocal: any = () => {
  store.remove(key)
}
