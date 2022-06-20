<template>
<section class="container mx-auto">
    <div class="flex md:flex-col sm:flex-col xs:flex-col justify-between items-center max-full">
        <div class="flex flex-col text-left w-1/2 md:w-3/4 sm:w-2/3 xs:w-2/3 px-8">
            <span class="text-2xl font-semibold pb-2 primary-color">Hi, I'm Joshua</span>
            <article>
                Front End Dev, Design, <span class="text-gray-600 hover:text-gray-500 dark:hover:text-gray-400  rounded-lg border hover:bg-gray-100 shadow-sm p-2 duration-500">Single :)</span>
            </article>
            <div class="divider w-8 "></div>
            <p class="text-md w-full">
                {{text}}
            </p>
        </div>
        <div class="pr-12 m-8">
            <img :src="pictureHover" alt="Section One Image" class="h-48 sm:h-64 xs:h-56" @mouseover="hover = true" @mouseleave="hover = false" />
        </div>
    </div>
</section>
<!-- <div class="flex justify-between">
            <div class="divider w-20"></div>
            <div class="divider w-20"></div>
        </div>
        <Projectoverview /> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Projectoverview from '@/components/ProjectOverview.vue'

export default {
    name: 'HomeView',
    data() {
        return {
            p1: require("../assets/img/myPic.png"),
            p1hover: require("../assets/img/myPichover.png"),
            hover: false,
            text: 'As of the moment I am interested increating minimal web design & typography. I can also make deffirent themes of design depending on the projects.'
        }
    },
    components: {
        // Projectoverview,
    },
    computed: {
        pictureHover() {
            if (this.hover == true) {
                return this.p1hover
            } else {
                return this.p1
            }
        },
    }
}
</script>

<style>
</style>
