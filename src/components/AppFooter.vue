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
<div class="container mx-auto ">
    <div class="pt-10 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
            <div class="tooltip mb-10" data-tip="Hire me!">
                <a download="JoshuaSarmiento-Resume.pdf" target="__blank" href="./files/JoshuaSarmientoResume.pdf" class="text-gray-600 hover:text-indigo-500 dark:hover:text-gray-400 cursor-pointer rounded-lg border hover:bg-pink-200 shadow-sm p-3 duration-500">
                    Download CV
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
