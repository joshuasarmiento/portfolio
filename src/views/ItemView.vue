<template>
<div class="" v-for="data in datas" :key="data.title">
    <section v-if="id == 1">
        <div class="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto sm:px-0 sm:max-w-full xs:px-0 text-primary-dark">
            <div class="px-8">
                <!-- title -->
                <span class="font-semibold text-4xl sm:text-2xl xs:text-2xl">
                    {{data.title}}
                    <p class="text-2xl">{{data.titleDesc}}</p>
                </span>
                <div class="flex pt-4">
                    <div class="flex items-center mr-10">
                        <i data-feather="clock" class="w-4 h-4 "></i>
                        <span class="ml-2 leading-none "> {{data.date}} </span>
                    </div>
                    <div class="flex items-center">
                        <i data-feather="tag" class="w-4 h-4 "></i>
                        <span class="ml-2 leading-none "> {{data.role}}} </span>
                    </div>
                </div>
                <!-- Images Section -->
                <div class="py-8 flex sm:flex-col xs:flex-col ">
                    <div class="pr-8 md:pr-4 sm:pb-4 xs:pb-4"><img :src="data.image1" class="max-w-sm rounded-lg shadow-2xl" /></div>
                    <div><img :src="data.image2" class="max-w-sm rounded-lg shadow-2xl" /></div>
                </div>
                <!-- Acticle Info -->
                <article class="pt-8">
                    <div class="w-full items-start">
                        <div class="w-full justify-evenly">
                            <div class="space-y-2 pb-4">
                                <span class="font-semibold text-xl">Client</span>
                                <p>{{data.client}}</p>
                            </div>
                            <div class="flex sm:flex-col xs:flex-col">
                                <div class="space-y-2 w-1/2 sm:w-full xs:w-full sm:pb-4 xs:pb-4">
                                    <span class="font-semibold text-xl pr-4">Tools & Technologies</span>
                                    <p v-for="tool in data.tools" :key="tool.tools" class="badge space-x-2 block">
                                        {{tool}}
                                    </p>
                                </div>
                                <div class="space-y-2 w-1/2 pr-4 sm:w-full xs:w-full ">
                                    <span class="font-semibold text-xl">Objective</span>
                                    <p>{{data.objective}}</p>
                                </div>
                            </div>
                        </div>
                        <div v-for="chal in data.challenge" :key="chal.challenge" class="w-full pt-8 space-y-4">
                            <span class="font-semibold text-xl">Challenge</span>
                            <p>{{chal.ctitle1}}</p>
                            <div class="flex justify-start py-4">
                                <img :src="chal.cimage1" class=" h-32" />
                                <img :src="chal.cimage1" class=" h-32" />
                            </div>
                            <p>{{chal.ctitle2}}</p>
                            <p>{{chal.ctitle3}}</p>
                        </div>
                        <div class="divider w-1/2 py-8"></div>
                        <div class="w-fit">
                            <div class="font-semibold text-xl pb-4">
                                Contributors 
                                <div class="badge">{{data.contributor.length}}</div></div>
                            <div class="">
                            <div class="avatar-group -space-x-6">
                                <div v-for="contri in data.contributor" :key="contri.contributor"  class="avatar">
                                    <div class="w-12">
                                        <a :href="contri.link" target="__blank" class="cursor-pointer">
                                            <img :src="contri.image" :alt="contri.name"/>
                                        </a> 
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section v-else-if="id == 2">
        <div class="container mx-auto">
            <div class="px-8">
                <ProjectHeader :projectHeader="projectHeader" />
            </div>
        </div>
    </section>
    <section v-else-if="id == 3">
        <div>
            <span> Portfolio Design </span>
        </div>
    </section>
    <section v-else-if="id == 4">
        <div>
            <span> Agri Web </span>
        </div>
    </section>
</div>
</template>

<script>
import ProjectHeader from '@/components/projects/ProjectHeader'
import feather from 'feather-icons';

export default {
    components: {
        ProjectHeader
    },
    props: ['id'],
    data() {
        return {
            datas: [{
                title: 'Blook',
                titleDesc: 'Mobile Booking Application for Salons, Barber Shops, and Beauty Salons',
                date: 'Dec 2022',
                role: 'UI/UX - Frontend',
                image1: require('../assets/img/Blook.png'),
                image2: require('../assets/img/Blook/blookApps.png'),
                client: 'Ateneo De Naga University',
                objective: 'An application that can serve as a portal for salons, parlors, and barber shops on booking their appointments.',
                tools: ["Flutter", "Firebase", "Visual Studio Code", "Android Studio", "Figma", "Google Map API"],
                challenge: [{
                    ctitle1: "Booking systems are being used in an increasing number of venues. The majority of the booking system's features are not accessible tothe user or administrator. Even when purchasing anything online, the item is reserved for the potential buyer. The more resources and other dynamic elements a system possesses, the more processing must be performed.",
                    ctitle2: "According to the findings of the usability test that was done in the areas of shop owners and clients, the users were able to appreciate the application. The client was able to book their desired services without having to walk to the shop. The shop owner was able to evaluate the appointments set by the user and accept or reject them in a timely manner.",
                    ctitle3: "The test resulted in an overall positive response, with client users successfully completing the appointment schedule via the mobile application. Using the formula in calculating the SUS score, Client application got a average score of 75% while the shop owner application with the average score of 68%.",
                    cimage1: require('../assets/img/Blook/result1.png'),
                    ciamge2: require('../assets/img/Blook/result2.png'),
                }],
                contributor: [{
                        image: require('../assets/img/Blook/Contributors/JeffPic.jpg'),
                        link: 'https://jeffbanday.github.io/',
                        name: 'Jeff C. Banday',
                    },
                    {
                        image: require('../assets/img/Blook/Contributors/SaqPic.jpg'),
                        link: 'https://www.facebook.com/xxttian',
                        name: 'Christian A. Saquillo'
                    },
                    {
                        image: require('../assets/img/joshua.jpg'),
                        link: 'https://www.linkedin.com/in/joshuasarmiento/',
                        name: 'Joshua A. Sarmiento'
                    }
                ],
            }],
        }
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

</style>
