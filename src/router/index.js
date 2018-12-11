import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)
const router = new Router({
    // mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes
})

export default router
