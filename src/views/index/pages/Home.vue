<template>
    <!-- prettier-ignore -->
    <div class="home">
        <HeaderNav />

        <img
            alt="Vue logo"
            :src="logoUrl"
        >
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    components: {
        HeaderNav: () => import('@/components/header'),
        HelloWorld
    },
    data() {
        return {
            logoUrl: require('@/assets/images/logo.png')
        }
    }
}
</script>
