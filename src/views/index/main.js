import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/vuex/store'
import i18n from '@/i18n'
import '@/registerServiceWorker'
import 'lib-flexible/flexible'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
