import { Main } from '@c/main'

/**
 * meta: {
 *  index: 导航路由层级
 *  keepAlive: 页面缓存
 *  role: (Array) auth: 登录身份验证
 * }
 */

export default [
    {
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        children: [
            {
                path: '/login',
                name: 'login',
                meta: {
                    index: 1,
                    keepAlive: false
                },
                component: () => import('@vIndexPage/Login.vue')
            },
            {
                path: '/home',
                name: 'home',
                meta: {
                    index: 1,
                    keepAlive: false,
                    role: ['auth']
                },
                component: () => import('@vIndexPage/Home.vue')
            },
            {
                path: '/about',
                name: 'about',
                meta: {
                    index: 2,
                    keepAlive: false,
                    role: ['auth']
                },
                component: () => import('@vIndexPage/About.vue')
            }
        ]
    }
]
