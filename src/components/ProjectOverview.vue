<template>
<span class="text-medium flex pl-44 py-2">Work</span>
<div class="pin_container pb-4">
    <div v-for="pic in pict" :key="pic.id" class="card_small flex justify-center items-center">
        <!-- <router-link :to="{name: 'ItemView', params: {id: pic.id,}}">
        </router-link> -->
        <div class="card">
            <img :src="pic.url" :alt="pic.details">
            <button class="btn btn-outline border-y-0" @click="$router.push('/item/ ' + pic.id)">View</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            pict: [{
                    id: 1,
                    details: 'Project One',
                    url: require(`../assets/img/Blook.png`),
                },
                {
                    id: 2,
                    details: 'Project Two',
                    url: require(`../assets/img/chedDash.png`),
                },
            ],
        }
    },
    computed: {}
}
</script>

<style>
/* https://github.com/an-object-is-a/html-css-js-pinterest-layout/blob/main/index.html */
.pin_container {
    margin: 0;
    padding: 0;
    width: 80vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    justify-content: center;
    /* 
    background-color: black; */
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

</style>
