<template>
<div class="bg-[url('../assets/img/Vector.png')] bg-no-repeat bg-auto bg-right-bottom">
    <div class="mb-12">
        <section class="hero">
            <div class="hero-content md:flex-col sm:flex-col xs:flex-col justify-center items-center">
                <div class="bg-[url('../assets/img/Vector.png')] bg-no-repeat bg-auto bg-right-top pr-8">
                    <img :src="pictureHover" alt="Section One Image" class="h-72" @mouseover="hover = true" @mouseleave="hover = false" />
                </div>
                <div class="flex flex-col text-left w-1/2 space-y-4 bg-[url('../assets/img/Vector2.png')] bg-no-repeat bg-auto bg-right-bottom md:w-3/4 sm:w-2/3 xs:w-2/3">
                    <span class="text-2xl font-semibold">Hi,</span>
                    <p class="w-full">
                        A fresh graduate in Information Technology seeking to broaden my 
                        experiences and expertise. A well-rounded person with an interest 
                        in front-end web or mobile development, as well as the UI/UX field. </p>
                    <div class="divider w-8 "></div>
                    <p class="text-sm w-full">
                        This is my online porfolio. As of the moment I am interested in 
                        creating minimal web design & typography. I can also make deffirent 
                        themes of design depending on the projects.
                    </p>
                </div>
            </div>
        </section>
        <div class="flex justify-between">
            <div class="divider w-20"></div>
            <div class="divider w-20"></div>
        </div>
        <Projectoverview />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Projectoverview from '@/components/ProjectOverview.vue'

export default {
    name: 'HomeView',
    data() {
        return {
            p1: require("../assets/img/myPic.png"),
            p1hover: require("../assets/img/myPichover.png"),
            hover: false,
        }
    },
    components: {
        Projectoverview,
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
