import request from './request'
import qs from 'qs'

class Http {
    constructor() {
        this.apiServer = process.env.VUE_APP_API_ROOT
    }

    getUrl(url, type = 'api') {
        switch (type) {
            case 'api':
                return this.apiServer + url
            default:
                return url
        }
    }

    req({ url, data = {}, method = 'post', type = 'api', transQs = true }) {
        let serverUrl = this.getUrl(url, type)
        if (method === 'post' && transQs) {
            data = qs.stringify(data)
        }
        return request(serverUrl, data, method)
    }
}
const http = new Http()

/* login */
export const login = data => http.req({ url: '/login', data })
