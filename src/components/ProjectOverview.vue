<template>
<section class="">
    <!-- <span class="text-medium flex py-2">Work</span> -->
    <div class="pin_container hero-contentt gap-0.5">
        <div v-for="pic in pict" :key="pic.id" class="card_small">
            <div class="card">
                <img :src="pic.url" :alt="pic.details">
                <button v-if="pic.nodata == false" class="btn btn-outline border-y-0" @click="$router.push('/item/ ' + pic.id)">View</button>
                <button v-else disabled="disabled"  class="btn btn-outline border-y-0" @click="$router.push('/item/ ' + pic.id)">View</button>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            pict: [{
                    nodata: false,
                    id: 1,
                    details: 'Project One',
                    url: require(`../assets/img/Blook.png`),
                },
                {
                    nodata: false,
                    id: 2,
                    details: 'Project Two',
                    url: require(`../assets/img/chedDash.png`),
                },
                {
                    nodata: true,
                    id: 3,
                    details: 'Design One',
                    url: require(`../assets/img/Design1.png`),
                },
                {
                    nodata: false,
                    id: 4,
                    details: 'Design Two',
                    url: require(`../assets/img/Design2.png`),
                },
            ],
        }
    },
    computed: {}
}
</script>

<style>
/* https://github.com/an-object-is-a/html-css-js-pinterest-layout/blob/main/index.html */
:root {
    --card_width: 400px;
    --row_increment: 10px;
    --card_small: 26;
    --card_medium: 33;
    --card_large: 45;
}
.hero-contentt {
    z-index: 0;
    align-items: center;
    justify-content: center;
    max-width: 80rem/* 1280px */;
}

.pin_container {
    margin: 0;
    padding: 0;
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--card_width));
    grid-auto-rows: var(--row_increment);
    justify-content: center;
    place-items: center;
    justify-items: center;
}

.card {
    padding: 0;
    margin: 10px 10px;
    background-color: transparent;
    border-radius: 0;
    border: 0px;
    border-style: solid;
    border-color: rgb(112, 112, 112);
}

.card:hover {
    border-color: rgb(199, 199, 199);
    border: 1px solid;
    padding: 10px;
    box-shadow: 5px 10px;
}

.card_small {
    grid-row-end: span var(--card_small);
}

/* .card_medium {
    grid-row-end: span var(--card_medium);
}
.card_large {
    grid-row-end: span var(--card_large);
} */
</style>
