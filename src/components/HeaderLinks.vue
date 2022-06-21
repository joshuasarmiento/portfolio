<template>
<div :class="!isOpen ? 'hidden' : 'block'" class="2xl:block xl:block lg:block md:block">
    <div v-if="!isOpen" class="flex justify-end items-center space-x-4" id="nav">
        <router-link class=" text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" to="/">Home</router-link>
        <router-link class=" text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" to="/about">About</router-link>
        <router-link class=" text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" to="/project">Project</router-link>
    </div>
    <div v-else class="" id="nav">
        <router-link class=" block text-left text-lg font-medium text-primary-color  hover:text-gray-600 dark:hover:text-gray-300  sm:mx-4 mb-2 sm:py-2 " to="/">Home</router-link>
        <router-link class=" block text-left text-lg font-medium text-primary-color  hover:text-gray-600 dark:hover:text-gray-300  sm:mx-4 mb-2 sm:py-2 " to="/about">About</router-link>
        <router-link class=" block text-left text-lg font-medium text-primary-color hover:text-gray-600 dark:hover:text-gray-300  sm:mx-4 mb-2 sm:py-2 " to="/project">Project</router-link>
    </div>
</div>
</template>

<script>
export default {
    props: ['isOpen'],
}
</script>

<style>
#nav router-link:active {
    background-color: blue;
}
</style>
