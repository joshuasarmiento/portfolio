<template>
<Nav />
<transition name="fade" mode="out-in">
    <router-view />
</transition>
<AppFooter />
</template>

<script>
import Nav from '@/components/Nav.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    data() {
        return {}
    },
    components: {
        Nav,
        AppFooter,
    },
}
</script>

<style>
#app {
    font-family: 'Montserrat', sans-serif;
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
