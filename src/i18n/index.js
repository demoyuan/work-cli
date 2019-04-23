import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@u/localCache'

/* 语言包 */
import enLocale from './lang/en-US'
import hkLocale from './lang/zh-HK'

Vue.use(VueI18n)

/* 获取本地语言 */
const navLang = navigator.language
const localLang = navLang === 'en-US' || navLang === 'zh-HK' ? navLang : false
let lang = localLang || 'zh-HK'

let defaultLang = store.getStore().language || lang
store.updateStore({ language: defaultLang })

const messages = {
    'en-US': { ...enLocale },
    'zh-HK': { ...hkLocale }
}

const i18n = new VueI18n({
    locale: defaultLang,
    messages
})

export default i18n
