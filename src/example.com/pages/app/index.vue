<template lang="pug">
  .welcome {{ $t('welcome') }} 改变窗口大小查看文字rem缩放
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  layout: 'mobile'
})
export default class PagesAppIndex extends Vue {}
</script>
