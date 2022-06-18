<template>
<header class="sticky top-0 z-50">
    <nav class="flex items-center justify-between px-8 py-4 ">
        <button  @click="$router.push('/')"><span class="font-extrathin text-2xl"> Joshua ... </span></button>
        <div class="flex items-end justify-end space-x-4">
            <button class="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="$router.push('/')">Work</button>
            <button class="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="$router.push('/about')">About</button>
            <!-- <router-link to="/about">About</router-link> -->
        </div>
    </nav>
</header>
</template>

<script>
export default {

}
</script>

<style>

</style>
