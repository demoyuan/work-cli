const defaultKey = process.env.VUE_APP_STORAGE_KEY
import store from '@/vuex/store'

export default {
    /* set localStorage */
    setStore(content, name = defaultKey) {
        content = JSON.stringify(content)
        store.commit('localStore', content)
        window.localStorage.setItem(name, content)
    },

    /* get localStorage */
    getStore(name = defaultKey) {
        // 防止浏览器启用无痕浏览模式Local Storage报错
        if (window.localStorage) {
            let str = window.localStorage.getItem(name)
            return str ? str && JSON.parse(str) : ''
        } else {
            return JSON.parse(store.state.localstore)
        }
    },

    /* update localStorage */
    updateStore(obj, name = defaultKey) {
        let oldObj = this.getStore(name)
        let newObj = Object.assign(oldObj || {}, obj)
        this.setStore(newObj, name)
    },

    /* delete localStorage */
    delStore(name = defaultKey) {
        store.commit('localStore', '')
        window.localStorage.removeItem(name)
    }
}
