import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './lang/en-US'
import hkLocale from './lang/zh-HK'
import store from '@u/localCache'

Vue.use(VueI18n)

/* 获取本地语言 */
const navLang = navigator.language
const localLang = navLang === 'en-US' || navLang === 'zh-HK' ? navLang : false
let lang = localLang || 'zh-HK'

let defaultLang = store.getStore().language || lang
store.updateStore({ language: defaultLang })

const messages = {
    'en-US': Object.assign(enLocale),
    'zh-HK': Object.assign(hkLocale)
}

const i18n = new VueI18n({
    locale: defaultLang,
    messages
})

export default i18n
