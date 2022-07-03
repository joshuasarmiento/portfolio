<template>
<div>
    <!-- Header -->
    <AppHeader class="mb-12 sm:mb-8 xs:mb-0 " />

    <!-- Not Working -->
    <!-- <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view> -->

    <!-- Router View With Transition -->
    <transition name="fade" mode="out-in">
        <!-- :key="this.$route.path" -->
        <router-view />
    </transition>
    
    <!-- Fotter -->
    <AppFooter />
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    data() {
        return {}
    },
    components: {
        AppHeader,
        AppFooter,
    },
}
</script>

<style>
#app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
}

.fade-enter-active {
    animation: coming 0.4s;
    animation-delay: 0.2s;
    opacity: 0;
}

.fade-leave-active {
    animation: going 0.4s;
}

@keyframes going {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-10px);
        opacity: 0;
    }
}

@keyframes coming {
    from {
        transform: translateX(-10px);
        opacity: 0;
    }

    to {
        transform: translateX(0px);
        opacity: 1;
    }
}

body {
    background-image: require("../assets/img/Vector.png"),
}
</style>
