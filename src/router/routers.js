import { Main } from '@/components/main'

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
                path: '/home',
                name: 'home',
                meta: {
                    index: 1,
                    keepAlive: false,
                    role: ['auth']
                },
                component: () => import('@/views/index/pages/Home.vue')
            },
            {
                path: '/about',
                name: 'about',
                meta: {
                    index: 2,
                    keepAlive: false,
                    role: ['auth']
                },
                component: () => import('@/views/index/pages/About.vue')
            }
        ]
    }
]
