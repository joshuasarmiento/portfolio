<template>
<div>
    <div class="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto sm:px-0 sm:max-w-full xs:px-0 text-primary-dark">
        <div class="px-8">
            <!-- title -->
            <span class="font-semibold text-4xl sm:text-2xl xs:text-2xl">
                {{title}}
                <p class="text-2xl font-normal pt-2">{{titleDesc}}</p>
            </span>
            <div class="flex pt-4">
                <div class="flex items-center mr-10">
                    <i data-feather="clock" class="w-4 h-4 "></i>
                    <span class="ml-2 leading-none "> {{date}} </span>
                </div>
                <div class="flex items-center">
                    <i data-feather="tag" class="w-4 h-4 "></i>
                    <span class="ml-2 leading-none "> {{role}} </span>
                </div>
            </div>
            <!-- Images Section -->
            <div class="py-8 flex sm:flex-col xs:flex-col ">
                <div class="pr-8 md:pr-4 sm:pb-4 xs:pb-4"><img :src="image1" class="max-w-sm rounded-lg shadow-2xl" /></div>
                <div><img :src="image2" class="max-w-sm rounded-lg shadow-2xl" /></div>
            </div>
            <!-- Acticle Info -->
            <article class="pt-8">
                <div class="w-full items-start">
                    <div class="w-full justify-evenly">
                        <div class="space-y-2 pb-4">
                            <span class="font-semibold text-xl">Client</span>
                            <p>{{client}}</p>
                        </div>
                        <div class="flex sm:flex-col xs:flex-col">
                            <div class="space-y-2 w-1/2 sm:w-full xs:w-full sm:pb-4 xs:pb-4">
                                <span class="font-semibold text-xl pr-4">Tools & Technologies</span>
                                <br>
                                <ul v-for="tool in tools" :key="tool.tools" class="badge space-x-2 inline-flex">
                                    <li>{{tool}}</li>
                                </ul>
                            </div>
                            <div class="space-y-2 w-1/2 pl-8 sm:w-full xs:w-full ">
                                <span class="font-semibold text-xl">Objective</span>
                                <p>{{objective}}</p>
                            </div>
                        </div>
                    </div>
                    <section class="w-full pt-8 space-y-4">
                        <span class="font-semibold text-xl">Challenge</span>
                        <div v-for="chal in challenge" :key="chal" class="pb-2">
                            <p>{{chal}}</p>
                        </div>
                    </section>

                    <div class="space-x-2 pt-8">
                        <a :href="repo" rel="noopener" target="_blank" class="text-gray-100 hover:text-gray-600 cursor-pointer rounded-lg border bg-primary-dark hover:bg-gray-100 shadow-sm py-3 px-8 duration-500" >
                            Repo
                        </a>
                    </div>
                   <!--
                    <section class="w-fit">
                        <div class="divider w-1/2 py-8"></div>
                        <div class="font-semibold text-xl pb-4">
                            Contributors
                            <div class="badge">{{contributor.length}}</div>
                        </div>
                        <div class="avatar-group -space-x-6">
                            <div v-for="contri in contributor" :key="contri.link" class="avatar">
                                <div class="w-12">
                                    <a :href="contri.link" rel="noopener" target="_blank" class="cursor-pointer">
                                        <img :src="contri.image" :alt="contri.name" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section> -->
                </div>
            </article>
        </div>
    </div>
</div>
</template>

<script>
import feather from 'feather-icons';
import projects from '../data/projects.js';

export default {
    components: {},
    props: [
        'id',
        'title',
        'descrip',
        'titleDesc',
        'date',
        'role',
        'image1',
        'image2',
        'client',
        'objective',
        'tools',
        'challenge',
        'repo',
    ],
    data() {
        return {
            projects,
            name: '',
            image: '',
            link: ''
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
