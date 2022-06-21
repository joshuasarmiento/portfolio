<script>
import feather from 'feather-icons';
import FooterCopyright from './FooterCopyright.vue';
export default {
    components: {
        FooterCopyright
    },
    data() {
        return {
            socials: [{
                    id: 1,
                    name: 'GitHub',
                    icon: 'github',
                    url: 'https://github.com/returnjosh',
                },
                {
                    id: 2,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://web.facebook.com/ajosshi22/',
                },
                {
                    id: 3,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://www.instagram.com/__premsjosh/',
                },
                {
                    id: 3,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'linkedin.com/in/joshuasarmiento/',
                },
            ],
        };
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
};
</script>

<template>
<div class="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto">
    <div class="pt-10 sm:pt-30 pb-8 mt-20 border-t-2">
        <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
            <div class="tooltip mb-10" data-tip="Hire me!">
                <a download="JoshuaSarmiento-Resume.pdf" target="__blank" href="./files/JoshuaSarmientoResume.pdf" class=" flex text-gray-600 hover:text-indigo-400 dark:hover:text-gray-400 cursor-pointer rounded-lg border hover:bg-primary-color shadow-sm p-3 duration-500">
                    <i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i>
                    <span> Download CV </span>
                </a>
            </div>
            <!-- Footer social links -->
            <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
                <ul class="flex gap-4 sm:gap-8">
                    <a v-for="social in socials" :key="social.id" :href="social.url" target="__blank" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-4 duration-500">
                        <i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i>
                    </a>
                </ul>
            </div>
            <!-- Footer copyright -->
            <FooterCopyright />
        </div>
    </div>
</div>
</template>

<style scoped></style>
