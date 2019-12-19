<template lang="pug">
  .welcome {{ $t('welcome') }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import User from '~/http/api/user'

@Component({
  layout: 'app'
})
export default class PagesAppIndex extends Vue {
  private mounted() {
    this.testLogin()
  }

  public async testLogin() {
    let res = await User.login()
    console.log(res)
  }
}
</script>
