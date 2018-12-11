import axios from 'axios'
import qs from 'qs'

/**
 * axios set defaut config
 */

const ajax = axios.create({
    timeout: 15000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [data => qs.stringify(data)],
    paramsSerializer: data => qs.stringify(data)
})

class Request {
    constructor() {}

    _resLog(res) {
        console.log(`%c ${res.config.method}: ${res.config.url}`, 'background: #d4d4d4; color: #1a8e24')
        if (res.config.method === 'get') {
            console.log('%c Form-Data: %o', 'color: #1a8e24', res.config.params)
        } else {
            console.log('%c Form-Data: %o', 'color: #1a8e24', res.config.data)
        }
        console.log('%c Response-Data: %o', 'color: #1a8e24', res.data)
    }

    ajaxGet(url, data) {
        return ajax
            .get(url, { params: data })
            .then(res => {
                this._resLog(res)
                return res.data
            })
            .catch(err => {
                console.log(err)
                return err
            })
    }

    ajaxPost(url, data) {
        return ajax
            .post(url, data)
            .then(res => {
                this._resLog(res)
                return res.data
            })
            .catch(err => {
                console.log(err)
                return err
            })
    }

    ajaxHead(url) {
        return ajax
            .head(url)
            .then(res => res)
            .catch(err => err)
    }

    ajaxFile(url, data) {
        const config = {
            responseType: 'json',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            transformRequest: [data => data]
        }
        return ajax
            .post(url, data, config)
            .then(res => res)
            .catch(err => err)
    }
}

const request = new Request()

export default async (url = '', data = {}, type = 'post') => {
    switch (type) {
        case 'get':
            return request.ajaxGet(url, data)
        case 'post':
            return request.ajaxPost(url, data)
        case 'head':
            return request.ajaxHead(url)
        case 'file':
            return request.ajaxFile(url, data)
        default:
            return false
    }
}
