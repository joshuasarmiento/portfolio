<template>
<PageLoader v-if="!employment"/>
<section v-else class="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto ">
    <div class="flex sm:flex-col xs:flex-col items-end justify-start sm:justify-center xs:justify-center sm:items-center xs:items-center sm:space-y-4 xs:space-y-4">
        <div class="flex-col justify-between items-center max-full px-8 sm:px-0 space-y-4">
            <span class="text-2xl font-semibold">About Joshua</span>
            <img :src="p1" alt="Section One Image" class="h-48 sm:h-64 xs:h-56 shadow-sm rounded-lg border" @mouseover="hover = true" @mouseleave="hover = false" />
        </div>
        <section class="w-2/3">
            <article>
                {{article}}
            </article>
            <div class="divider w-10"></div>
            <p class="text-sm">
                {{text}}
            </p>
        </section>
    </div>
    <section class="flex-col justify-start items-center px-8 py-8">
        <div class="text-lg font-semibold text-primary-color pb-4">
            Employment
        </div>
        <div v-for="em in employment" :key="em.title" class="text-primary-color rounded-lg border shadow-sm p-6 w-fit space-y-2">
            <span class="font-semibold">{{em.title}}</span>
            <article>{{em.add}} <span class="text-sm"> {{em.status}}</span></article>
            <p aria-label="Date of employment">{{em.date}}</p>
        </div>
    </section>
</section>
</template>

<script>
import PageLoader from '@/reusable/PageLoader'

export default {
    data() {
        return {
            p1: require("../assets/img/joshua.jpg"),
            article: 'A fresh graduate in Information Technology seeking to broaden my experiences and expertise. A well-rounded person with an interest in front-end web or mobile development, as well as the UI/UX field.',
            text: "I love design, user interfaces, web or mobile development and that's what I'm passionate about",
            employment: [{
                title: 'Web Developer',
                add: "CHED, Legazpi City",
                status: 'Intern | Remote',
                date: 'Jan 2022 - Jun 2022 '
            }, ],
        }
    },
    components: {PageLoader}
}
</script>
