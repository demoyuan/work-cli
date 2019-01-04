<template>
    <div id="nav">
        <span @click="linkTo('home')">Home</span>
        |
        <span @click="linkTo('about')">About</span>

        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
import { router } from '@m'

export default {
    name: 'HeaderNav',
    mixins: [router]
}
</script>

<style lang="scss" scoped>
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
