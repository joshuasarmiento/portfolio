<template>
<nav class="container mx-auto ">
    <div class="sm:flex-col xs:flex-col items-center justify-between px-8 py-4 z-10 max-w-full block sm:flex sm:justify-between sm:items-center my-6">
        <div class="flex justify-between items-center sm:px-0">
            <button @click="$router.push('/')" class="flex items-center justify-center">
                <img src="@/assets/img/svg/logo.svg" alt="Logo" class="h-10">
                <span class="font-semibold text-2xl sm:invisible xs:invisible text-primary-color pl-2"> JOSHUA </span>
            </button>
            <div class="flex  items-end justify-end space-x-4">
                <router-link class="text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" to="/">Work</router-link>
                <router-link class="text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" to="/about">About</router-link>
                <router-link class="text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" to="/project">Project</router-link>
                <!-- <router-link to="/about">About</router-link> -->
            </div>
        </div>

    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
