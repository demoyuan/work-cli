<template lang="pug">
  .layout-mobile
    nuxt
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import InitRem from '../../common/assets/js/initRem'

// 移动端页面主体，配置了rem
@Component
export default class LayoutsMobile extends Vue {
  private created() {
    if (process.client) {
      new InitRem().init()
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-app {
  max-width: 750px;
  margin: 0 auto;

  .welcome {
    font-size: px2rem(50);
    color: #333;
    font-weight: 600;
    text-align: center;
    margin-bottom: px2rem(50);
  }
}
</style>
