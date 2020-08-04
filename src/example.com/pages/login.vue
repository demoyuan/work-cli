<template lang="pug">
  .page-login
    el-input.input-item(v-model="form.account" placeholder="用户名：")
    el-input.input-item(v-model="form.password" placeholder="密码：")
    el-button.button-item(type="primary" @click="loginFnc") 登录
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import User from '../http/api/user'

@Component
export default class PagesLogin extends Vue {
  form = {
    account: '',
    password: ''
  }

  async loginFnc() {
    let { code } = await User.login(this.form)
    code && this.$router.push({ name: 'app-index' })
  }
}
</script>

<style lang="scss" scoped>
.page-login {
  max-width: 250px;
  margin: 200px auto;
  text-align: center;

  .input-item {
    margin-bottom: 20px;
  }

  .button-item {
    width: 120px;
  }
}
</style>
