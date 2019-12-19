<template lang="pug">
  .layout-app
    nuxt
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import InitRem from '~/assets/js/initRem'
import UserAuth from '~/assets/js/userAuth'

@Component
export default class LayoutsApp extends Vue {
  @Watch('$route.name')
  routeChange(val: any) {
    new UserAuth().checkAuth({
      routeName: val,
      jumpFnc: () => this.$router.push(this.localePath({ name: 'app-login' }))
    })
  }

  private mounted() {
    this.routeChange(this.$route.name)
    new InitRem().init()
  }
}
</script>

<style lang="scss">
@import '~/assets/css/app.scss';
</style>
