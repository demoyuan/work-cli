import { urlEncode } from '@u/tools'

/* router link */
export const router = {
    methods: {
        /**
         * @param {String} name 路由名
         * @param {Object} params 参数
         * @param {Object} query 查询参数
         */
        linkTo({name, params, query}) {
            this.$router.push({
                name,
                params,
                query
            })
        },
        /**
         * @param {String} path
         * @description router带完整参数的path
         */
        linkPath(path) {
            this.$router.push({ path })
        },
        /**
         * @param {String} name
         * @description 判断url是否存在重定向访问
         */
        redirect(name, params, query) {
            let path = this.$route.query.redirect
            if (path) {
                this.linkPath(path)
            } else {
                this.linkTo({name, params, query})
            }
        },
        /**
         * @param {String} name 路由名
         * @param {Object} params 参数
         * @param {Object} query 查询参数
         * @description 创建带重定向地址跳转链接
         */
        jump(name, params, query = {}) {
            let path = this.$route.path.split('/')[1]
            let queObj = JSON.parse(
                JSON.stringify(this.$route.query, (key, value) => {
                    return key === 'redirect' ? undefined : value
                })
            )
            let redirect = `${path}?${urlEncode(queObj)}`
            query.redirect = redirect
            this.linkTo({name, params, query})
        }
    }
}
