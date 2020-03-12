<template lang="pug">
  .layout-app(v-show="loginStatus")
    nuxt
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import InitRem from '../../common/assets/js/initRem'
import UserAuth from '../../common/assets/js/userAuth'

@Component
export default class LayoutsApp extends Vue {
  loginStatus: boolean = false

  @Watch('$route.name')
  routeChange(routeName: string) {
    let status = new UserAuth().checkAuth({ routeName })
    if (!status) {
      this.$router.push(this.localePath({ name: 'login' }))
    } else {
      this.loginStatus = status
    }
  }

  private created() {
    if (process.client) {
      this.routeChange(this.$route.name || '')
      new InitRem().init()
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/app.scss';
</style>
