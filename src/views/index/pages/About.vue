<template>
    <div class="about">
        <HeaderNav />

        <h1>This is an about page</h1>
    </div>
</template>

<script>
export default {
    components: {
        HeaderNav: () => import('@c/header')
    }
}
</script>
