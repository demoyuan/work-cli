/* eslint-disable no-console */

import axios from 'axios'
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions'
import LRUCache from 'lru-cache'

const debug = process.env.NODE_ENV === 'production' ? false : true
const resLog = res => {
    if (debug) {
        console.log(`%c ${res.config.method}: ${res.config.url}`, 'background: #d4d4d4; color: #1a8e24')
        if (res.config.method === 'get') {
            console.log('%c Form-Data: %o', 'color: #1a8e24', res.config.params)
        } else {
            console.log('%c Form-Data: %o', 'color: #1a8e24', res.config.data)
        }
        console.log('%c Response-Data: %o', 'color: #1a8e24', res.data)
    }
}

/**
 * axios set defaut config
 */

const ajax = axios.create({
    // timeout: 15000,
    headers: {
        'Cache-Control': 'no-cache'
    },
    // 请求节流
    adapter: throttleAdapterEnhancer(
        // get请求缓存
        cacheAdapterEnhancer(axios.defaults.adapter, {
            enabledByDefault: true,
            cacheFlag: 'useCache',
            defaultCache: new LRUCache({ maxAge: 3000, max: 200 })
        }),
        { threshold: 2000 }
    )
})

ajax.interceptors.response.use(
    res => {
        resLog(res)
        return res
    },
    error => {
        console.error(error)
        return Promise.reject(error)
    }
)

class Request {
    constructor() {}

    ajaxGet(url, data) {
        return ajax
            .get(url, { params: data })
            .then(res => res.data)
            .catch(err => err)
    }

    ajaxPost(url, data) {
        return ajax
            .post(url, data)
            .then(res => res.data)
            .catch(err => err)
    }

    ajaxHead(url) {
        return ajax
            .head(url)
            .then(res => res)
            .catch(err => err)
    }

    ajaxFile(url, data) {
        return ajax
            .post(url, data, {
                responseType: 'json',
                headers: { 'Content-Type': 'multipart/form-data' },
                transformRequest: [data => data]
            })
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
