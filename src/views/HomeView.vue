<template>
<section class="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto sm:px-0 sm:max-w-full xs:px-0">
    <PageLoader v-if="!pictureHover"/>
    <div v-else class="flex sm:flex-col xs:flex-col justify-between items-center">
        <div class="flex flex-col text-left w-1/2 md:w-3/4 sm:w-full xs:w-full px-8">
            <span class="text-4xl font-semibold pb-4 primary-color sm:text-2xl xs:text-2xl">Hi, I'm Joshua</span>
            <article>
                Web Developer & Designer
            </article>
            <div class="divider w-8"></div>
            <p class="text-md w-full md:w-2/3">
                {{text}}
            </p>
        </div>
        <div class="pr-12 m-8 md:mx-1/2 md:m-4 sm:pr-0 xs:pr-0">
            <img :src="pictureHover" alt="Section One Image" class="h-48 md:h-32 sm:h-48 xs:h-56" @mouseover="hover = true" @mouseleave="hover = false" />
        </div>
    </div>
</section>
</template>

<script>
import PageLoader from '@/reusable/PageLoader'

export default {
    name: 'HomeView',
    data() {
        return {
            p1: require("../assets/img/myPic.png"),
            p1hover: require("../assets/img/myPichover.png"),
            hover: false,
            text: ''
        }
    },
    components: {
        // Projectoverview,
        PageLoader,
    },
    computed: {
        pictureHover() {
            if (this.hover == true) {
                return this.p1hover
            } else {
                return this.p1
            }
        },
    },
}
</script>

<style>
</style>
