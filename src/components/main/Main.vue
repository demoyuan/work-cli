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
                    class="min-height"
                />
            </transition>
        </keep-alive>

        <transition
            :enter-active-class="enterTransition"
            :leave-active-class="leaveTransition"
        >
            <router-view
                v-if="!$route.meta.keepAlive"
                class="min-height"
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
.min-height {
    min-height: 100vh;
    overflow: hidden;
}
</style>
