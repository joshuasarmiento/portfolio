<template>
<PageLoader v-if="!employment" />
<section v-else class="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto ">
    <div class="flex flex-col px-8 sm:flex-col xs:flex-col items-start justify-start sm:justify-center xs:justify-center sm:items-center xs:items-center sm:space-y-4 xs:space-y-4">
        <span class="text-4xl font-semibold pb-4">About Me</span>
        <!-- <div class="flex-col justify-between items-center max-full sm:px-0 space-y-4 pr-8">
            <img :src="p1" alt="Section One Image" class=" mask mask-circle h-48 sm:h-64 xs:h-56 sm:mask-circle xs:mask-circle shadow-sm rounded-lg border" @mouseover="hover = true" @mouseleave="hover = false" />
        </div> -->
        <section class=" sm:w-full xs:w-full">
            <p>{{article1}}</p>
            <br>
            <p>{{article2}}</p>
            <br>
            <p>{{article3}}</p>
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
    <section class="px-8 py-2">
        <div class="flex items-center justify-start">
            <div class="divider w-10 pr-4"></div> Technical Skills
        </div>
        <ul>
            <li class="flex gap-2">
                <p v-for="t in text" :key="t" class="text-sm rounded-md p-4 border w-fit">
                    {{t}}
                </p>
            </li>
        </ul>
    </section>
</section>
</template>

<script>
import PageLoader from '@/reusable/PageLoader'

export default {
    data() {
        return {
            p1: require("../assets/img/joshua.jpg"),
            article1: 'A fresh graduate in Information Technology. Have 6 months of internship experience and expertise in Web Development as well as UI and UX design.',
            article2: 'Since high school, computers have piqued my interest. I completed my information technology undergraduate degree at Ateneo de Naga University. I found web development and UI/UX to be fascinating disciplines. I had already focused on conducting user research and coding my design.',
            article3: 'I am passionate about my work. I enjoy what I do and enjoy learning new things. Being in the technology industry, I believe it is in my nature to broaden my knowledge.',
            text: ["HTML", "CSS", "Npm", "Vuejs", "Node.js", "Github", "Git", "Figma", "Flutter", "MongoDB"],
            text2: ["Agile", "UI/UX Design", "Frontend Development", "Interactive Design", "Collaboration", "Project Management", "Network administration", "Operations & maintenance"],
            employment: [{
                title: 'Project Lead, UI/UX Designer, Frontend Developer',
                add: "CHED, Legazpi City",
                status: 'Intern | Remote',
                date: 'Jan 2022 - Jun 2022 '
            }, ],
        }
    },
    components: {
        PageLoader
    }
}
</script>
