<template>
<Nav />
<router-view />
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
    data() {
        return {}
    },
    components: {
        Nav,
    },
}
</script>

<style>
#app {
    font-family: 'Montserrat', sans-serif;
}
body {
  background-image: require("../assets/img/Vector.png"),
}
</style>
