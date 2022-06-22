<template>
<section>
    <!-- Project Overview -->
    <div class="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto sm:px-0 sm:max-w-full xs:px-0">
        <ProjectOverview />
    </div>
</section>
</template>

<script>
import ProjectOverview from '../components/ProjectOverview.vue'
export default {
    name: 'Project',
    components: {
        ProjectOverview,
    }
}
</script>
<style scoped></style>

