<template>
<PageLoader v-if="!projects" />
<section v-else class="px-8">
    <div class="space-y-2 flex flex-col items-start justify-center pb-8">
        <span class="text-4xl font-semibold text-primary-color sm:text-2xl xs:text-2xl">{{title}}</span>
        <p>{{description}}</p>
    </div>
    <div class="flex gap-2 py-4">
        <!-- <span class="rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500 cursor-pointer">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="text-black">
                <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
        </span> -->
        <input v-model="searchProject" class="px-4 pr-1 sm:px-4 py-2 rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" id="name" name="name" type="search" required="" placeholder="Search Projects" aria-label="Name" />
    </div>
    <section class="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-8 md:gap-4 sm:gap-2 place-items-center">
        <div v-for="pic in filteredProjects" :key="pic.id" class="card rounded-md bg-base-100 shadow-xl">
            <!-- @click="$router.push('/item/ ' + pic.id)"  -->
              <!-- v-if="pic.nodata == false"  -->
            <router-link 
            v-if="!pic.nodata || pic.data" 
            class="cursor-pointer shadow-md"
            :to="{
                name: 'itemview',
                params: {
                    id: pic.id,
                    title: pic.title,
                    descrip: pic.descrip,
                    titleDesc: pic.titleDesc,
                    date: pic.date,
                    role: pic.role,
                    image1: pic.image1,
                    image2: pic.image2,
                    client: pic.client,
                    objective: pic.objective,
                    tools: pic.tools,
                    challenge: pic.challenge,
                    repo: pic.repo,
                },
            }"
            >
                <figure><img class="" :src="pic.url" :alt="pic.details" /></figure>
                <div class="card-body">
                    <div class="">
                        <h2 class="card-title text-primary-color">{{pic.title}}</h2>
                    </div>
                    <p class="rounded-md">{{pic.descrip}}</p>
                </div>
            </router-link >
            <label v-else class="">
                <figure><img :src="pic.url" :alt="pic.details"/></figure>
                <div class="card-body">
                    <div class="flex justify-start items-center">
                        <h2 class="card-title text-primary-color pr-2">{{pic.title}}</h2>
                        <span>
                            <p v-if="pic.nodata == true" class="badge badge-error font-normal text-sm">Working on</p>
                        </span>
                    </div>
                    <p class="rounded-md">
                        {{pic.descrip}}
                    </p>
                </div>
            </label>
        </div>
    </section>
</section>
</template>

<script>
import PageLoader from '@/reusable/PageLoader'
import projects from '../data/projects.js'

export default {
    data() {
        return {
            searchProject: '',
            projects,
            title: 'Projects',
            description: "This page contains some of the projects I've worked on. Other projects are currently working on."
        }
    },
    components: {
        PageLoader
    },
    computed: {
        filteredProjects() {
            if (this.searchProject) {
                return this.filterProjectsBySearch();
            }
            return this.projects;
        },
    },
    methods: {
        filterProjectsBySearch() {
            let project = new RegExp(this.searchProject, 'i');
            return this.projects.filter((el) => el.descrip.match(project));
        },
    },
}
</script>

<style>
</style>
