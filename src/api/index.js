import request from './request'

class Path {
    constructor() {
        this.apiServer = process.env.VUE_APP_API_ROOT
    }

    getUrl(url, type = 'api') {
        switch (type) {
            case 'api':
                url = this.apiServer + url
                break
            default:
                return url
        }
        return url
    }
}
const path = new Path()

/* login */
export const login = data => request(path.getUrl('/login', 'api'), data)
