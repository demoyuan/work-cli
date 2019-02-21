import Vue from 'vue'
import Vuex from 'vuex'
import * as mod from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 防止浏览器启用无痕浏览模式Local Storage报错
        localstore: ''
    },
    getters: {},
    actions: {},
    mutations: {
        // 设置Local Storage
        localStore(state, data) {
            state.localstore = data
        }
    },
    modules: {
        user: mod.user
    }
})
