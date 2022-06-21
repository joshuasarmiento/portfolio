<template>
<div class="flex justify-center items-center text-2xl text-primary-color font-semibold" v-if="!isloaded">
    Loading...
</div>
</template>

<script>
export default {
    data() {
        return {
            isloaded: false,
        }
    },
    mounted() {
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                setTimeout(() => {
                    this.isloaded = true;
                }, 3000)
            }
        }
        // this.showToggle()
    },
    methods: {
        showToggle() {
            setTimeout(() => {
                this.isloaded = false;
            }, 1000)
        }
    }
}
</script>

<style>

</style>
