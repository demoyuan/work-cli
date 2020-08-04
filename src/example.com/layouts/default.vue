<template lang="pug">
  .layout-default(v-show="loginStatus")
    nuxt
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import UserAuth from '../../common/assets/js/userAuth'

// pages页面默认主体， 配置了userToken登录检测
@Component
export default class LayoutsDefault extends Vue {
  loginStatus: boolean = false

  @Watch('$route.name')
  routeChange(routeName: string) {
    let status = new UserAuth({ ignoreRoute: ['login'] }).checkAuth({
      routeName
    })
    if (!status) {
      this.$router.push(this.localePath({ name: 'login' })) // 引入nuxt-i18n后 路由跳转用法
      // this.$router.push({ name: 'login' }) // 常规路由跳转用法用法
    } else {
      this.loginStatus = status
    }
  }

  private created() {
    if (process.client) {
      this.routeChange(this.$route.name || '')
    }
  }
}
</script>
