<template>
<header class="top-0 z-50">
    <nav class="flex  sm:flex-col xs:flex-col items-center justify-between px-8 py-4 ">
        <button  @click="$router.push('/')"><span class="font-semibold text-2xl sm:invisible xs:invisible "> Joshua ... </span></button>
        <div class="flex  items-end justify-end space-x-4">
            <button class="btn btn-outline xs:btn-md sm:btn-md  md:btn-md lg:btn-lg xl:btn-lg 2xl:btn-lg" @click="$router.push('/')">Work</button>
            <button class="btn btn-outline xs:btn-md sm:btn-md  md:btn-md lg:btn-lg xl:btn-lg 2xl:btn-lg" @click="$router.push('/about')">About</button>
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
