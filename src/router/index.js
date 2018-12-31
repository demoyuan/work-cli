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

const LOGIN_PAGE = 'login'

router.beforeEach((to, from, next) => {
    if (to.meta.role && to.meta.role.length > 0) {
        let localStore = store.getStore()
        if (localStore.token && localStore.token.length > 0) {
            next()
        } else {
            next({
                path: LOGIN_PAGE,
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

export default router
