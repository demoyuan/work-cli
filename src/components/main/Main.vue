<template>
    <!-- prettier-ignore -->
    <div id="app-main">
        <keep-alive>
            <transition
                :enter-active-class="enterTransition"
                :leave-active-class="leaveTransition"
            >
                <router-view
                    v-if="$route.meta.keepAlive"
                    class="app-height"
                />
            </transition>
        </keep-alive>

        <transition
            :enter-active-class="enterTransition"
            :leave-active-class="leaveTransition"
        >
            <router-view
                v-if="!$route.meta.keepAlive"
                class="app-height"
            />
        </transition>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
    data() {
        return {
            enterTransition: 'animated fadeIn',
            leaveTransition: 'animated fadeOut faster'
        }
    },
    watch: {
        $route(to, from) {
            let toIndex = to.meta.index
            let fromIndex = from.meta.index
            switch (true) {
                case fromIndex > toIndex:
                    this.enterTransition = 'animated zoomInLeft'
                    this.leaveTransition = 'animated zoomOutRight faster'
                    break
                case fromIndex < toIndex:
                    this.enterTransition = 'animated zoomInRight'
                    this.leaveTransition = 'animated zoomOutLeft faster'
                    break
                default:
                    this.enterTransition = 'animated fadeIn faster'
                    this.leaveTransition = 'animated fadeOut faster'
                    break
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.app-height {
    /* 适配刘海屏 env() 跟 constant() 需要同时存在，而且顺序不能换 */
    padding-top: constant(safe-area-inset-top); /* 兼容 iOS < 11.2 */
    padding-top: env(safe-area-inset-top); /* 兼容 iOS >= 11.2 */
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    min-height: 100vh;
    overflow: hidden;
}
</style>
