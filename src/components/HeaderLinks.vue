<template>
<div :class="isOpen ? 'block' : 'hidden'" class="2xl:block xl:block lg:block md:block">
    <div v-if="!isOpen" class="flex justify-end items-center space-x-4" id="nav">
        <router-link class="dark:text-primary-light text-gray-500 hover:text-gray-600 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" to="/">Home</router-link>
        <router-link class=" dark:text-primary-light text-gray-500 hover:text-gray-500 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" to="/about">About</router-link>
        <router-link class=" dark:text-primary-light text-gray-500 hover:text-gray-500 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" to="/project">Projects</router-link>
        <router-link class=" dark:text-primary-light text-gray-500 hover:text-gray-500 cursor-pointer rounded-lg border hover:bg-gray-100 shadow-sm p-3 duration-500" to="/contact">Contact</router-link>
    </div>
    <div v-else id="nav" class="drawer-side 2xl:hidden xl:hidden lg:hidden md:hidden">
        <label for="my-drawer" class=""></label>
        <ul tabindex="0" class="menu absolute left-0 top-20 p-4 w-full bg-base-100 text-base-content">
            <li>
                <router-link class="dark:text-primary-light block text-left text-lg font-medium text-primary-color hover:text-gray-600 sm:mx-4 mb-2 sm:py-2 " to="/">Home</router-link>
            </li>
            <li>
                <router-link class="dark:text-primary-light block text-left text-lg font-medium text-primary-color hover:text-gray-600 sm:mx-4 mb-2 sm:py-2 " to="/about">About</router-link>
            </li>
            <li>
                <router-link class="dark:text-primary-light block text-left text-lg font-medium text-primary-color hover:text-gray-600 sm:mx-4 mb-2 sm:py-2 " to="/project">Projects</router-link>
            </li>
            <li>
                <router-link class="dark:text-primary-light block text-left text-lg font-medium text-primary-color hover:text-gray-600 sm:mx-4 mb-2 sm:py-2 " to="/contact">Contact</router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: ['isOpen'],
    data() {
        return {}
    },
}
</script>

<style>
a.router-link-exact-active {
    @apply text-primary-dark;
    @apply font-semibold;
}

@media (prefers-color-scheme: dark) {
   a.router-link-exact-active {
    @apply text-primary-light;
    @apply font-semibold;
}
}
</style>
