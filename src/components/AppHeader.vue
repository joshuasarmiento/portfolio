<template>
<nav class="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto">
    <div class="items-center justify-between px-8 py-4 z-10 max-w-full block my-6">
        <div class="flex justify-between items-center md:px-0 sm:px-0 xs:px-0">
            <button @click="$router.push('/')" class="flex items-center justify-center">
                <img v-if="darkTheme === 'forest'" src="@/assets/img/svg/logoWhite.svg" alt="Logo Dark" class="h-10 sm:h-8 xs:h-8">
                <img v-else src="@/assets/img/svg/logoDark.svg" alt="Logo Dark" class="h-10 sm:h-8 xs:h-8">
                <span class="font-semibold text-2xl sm:text-lg xs:text-lg pl-2"> JOSHUA </span>
            </button>
            <HeaderLinks :isOpen="isOpen" class="" />
            <div class="2xl:hidden xl:hidden lg:hidden md:hidden">
                <button @click="isOpen = !isOpen" type="button" class="focus:outline-none" aria-label="Hamburger Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7 fill-current text-secondary-dark">
                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clip-rule="evenodd"></path>
                        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import HeaderLinks from "@/components/HeaderLinks.vue"

export default {
    data() {
        return {
            isOpen: false,
            theme: localStorage.getItem('darkTheme')
        }
    },
    components: {
        HeaderLinks
    },
}
</script>

<style scoped>
/* span {
  background: -webkit-linear-gradient(gray, #262D33);
  background-clip: text;
  -webkit-text-fill-color: transparent;
} */
</style>
