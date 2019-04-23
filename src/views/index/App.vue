<template>
    <!-- prettier-ignore -->
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
@import '@/assets/css/base.scss';

// 100vw / 375px = 0.2666667 vw/px
// 为便于换算，设定1rem = 100px, 即 1rem = 26.66667vw
html {
    font-size: 26.66667vw !important;
}

/*768以上作为PC端处理*/
@media (min-width: 768px) {
    html {
        font-size: 625% !important;
    }
}

/*默认字体14px*/
body {
    font-size: 14px;
}
</style>
