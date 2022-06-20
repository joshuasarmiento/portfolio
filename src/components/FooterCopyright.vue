<script>
export default {
    data: () => {
        return {
            copyrightDate: new Date().getFullYear(),
            projectName: 'Portfolio',
            author: 'Joshua',
        };
    },
};
</script>

<template>
<div class="flex justify-center items-center text-center">
    <div class="text-normal">
        &copy; {{ copyrightDate }}.
        <a href="/" class="hover:underline hover:text-gray-600 dark:hover:text-gray-300 duration-500">
            {{ projectName }}
        </a>
        . Developed by
        <a href="https://www.linkedin.com/in/joshuasarmiento/" target="__blank" class="uppercase hover:underline hover:text-gray-600 dark:hover:text-gray-300 duration-500">{{ author }}</a>
    </div>
</div>
</template>

<style lang="scss" scoped></style>
