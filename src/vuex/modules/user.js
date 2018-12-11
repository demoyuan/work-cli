import { login } from '@/api'

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async login() {
            let res = await login()
            return res
        }
    }
}
