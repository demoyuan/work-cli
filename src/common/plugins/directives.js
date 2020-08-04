import Vue from 'vue'

Vue.directive('focus', {
  inserted: el => {
    el.focus()
  }
})

// 限制最大正整数
Vue.directive('maxInt', {
  bind(el, binding) {
    let maxLength = binding.value
    let ruleFnc = e => {
      let val = e.target.value
      if (val.length === 1) {
        e.target.value = val.replace(/[^1-9]/g, '')
      } else {
        e.target.value = val.replace(/[^\d]/g, '')
      }
      if (val.length > maxLength) {
        e.target.value = val.substr(0, maxLength)
      }
      el.dispatchEvent(new Event('input', { bubbles: true }))
    }
    el.onkeyup = e => ruleFnc(e)
    el.onblur = e => ruleFnc(e)
  }
})

// 限制字符串
Vue.directive('maxChars', {
  bind(el, binding) {
    let maxLength = binding.value
    let ruleFnc = e => {
      let val = e.target.value
      e.target.value = val.replace(/[^\u4E00-\u9FA5_a-zA-Z0-9\s]/g, '').trim()
      if (val.length > maxLength) {
        e.target.value = val.substr(0, maxLength)
      }
      el.dispatchEvent(new Event('input', { bubbles: true }))
    }
    el.onblur = e => ruleFnc(e)
  }
})
