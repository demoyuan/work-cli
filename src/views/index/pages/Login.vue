<template>
    <div class="login">
        <HeaderNav />

        <h1>This is an login page</h1>
    </div>
</template>

<script>
export default {
    components: {
        HeaderNav: async () => {
            const { HeaderNav } = await import('@c/header')
            return HeaderNav
        }
    }
}
</script>
