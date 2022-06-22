<script>
export default {
    props: ['contacts'],
};
</script>

<template>
<div class="w-full md:w-1/2">
    <div class="text-left max-w-xl px-8">
        <h2 class="text-4xl font-semibold text-primary-dark mb-8 sm:text-2xl xs:text-2xl">
            Contact details
        </h2>
        <ul class="">
            <li class="flex" v-for="contact in contacts" :key="contact.id">
                <i :data-feather="contact.icon" class="w-5 text-gray-500 dark:text-gray-400 mr-4"></i>
                <a target="_blank" :href="contact.link" class="text-lg mb-4 text-primary-dark dark:text-primary-light" :class="
					contact.icon === 'mail' || contact.icon === 'phone' ? '' : '' " aria-label="Website and Phone">
                    {{ contact.name }}	
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<style lang="scss" scoped></style>
