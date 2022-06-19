<template>
<Nav />
<!-- Scroll to top -->
<back-to-top visibleoffset="500" right="30px" bottom="20px" class="shadow-lg">
    <i data-feather="chevron-up"></i>

</back-to-top>
<router-view />
</template>

<script>
import feather from 'feather-icons';
import Nav from '@/components/Nav.vue'
export default {
    data() {
        return {}
    },
    components: {
        Nav,
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
}
</script>

<style>
#app {
    font-family: 'Montserrat', sans-serif;
}

.vue-back-to-top {
    @apply p-2 bg-grey-500 hover: bg-grey-600 text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
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
