<template>
<div class="flex justify-end">
    <div class="divider w-20 fixed"></div>
    <button class="btn btn-outline bottom-10 right-0 fixed xs:btn-md sm:btn-md  md:btn-md lg:btn-lg xl:btn-lg 2xl:btn-lg" @click="$router.go(-1)">Back</button>
</div>
<section v-if="id == 1">
    <!-- <BlookItem :id="id"/> -->
    <div class="hero">
        <div class="hero-content flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row lg:p-8 md:p-4 sm:p-4 xs:p-8">
            <img :src="pic1" class="max-w-xs rounded-lg shadow-2xl" />
            <div class="pl-8">
                <h1 class="text-2xl font-bold">BLook: Mobile Booking Application for Salons,
                    Barber Shops, and Beauty Parlors</h1>
                <p class="py-6">
                    Booking systems are being used in an increasing number of venues.
                    The majority of the booking system's features are not accessible to
                    the user or administrator. Even when purchasing anything online, the
                    item is reserved for the potential buyer. The more resources and other
                    dynamic elements a system possesses, the more processing must be performed. </p>
                <span class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 sm:space-y-2 xs:space-y-2">
                    <div class="md:pb-4">
                        <p class="font-semibold">Client</p>
                        <p>Anyone</p>
                    </div>
                   <div>
                        <p class="font-semibold">Location</p>
                        <p>Naga City</p>
                    </div>
                    <div>
                        <p class="font-semibold">What I did</p>
                        <p>Interaction Design Lead & Frond-end Developer</p>
                    </div>
                </span>
            </div>
        </div>
    </div>
    <!-- Wireframes -->
    <!-- grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 md:space-y-4 sm:space-y-4 xs:space-y-4 place-items-center self-center place-content-center justify-self-center justify-center justify-items-center content-center	items-center py-8 -->
    <div class="flex md:flex-col sm:flex-col xs:flex-col justify-center items-center gap-4 p-4">
        <div class="space-y-2">
            <span class="text-2xl font-bold"> Client Application </span>
            <div class="carousel rounded-box w-96">
                <div v-for="clientimg in clienImages" :key="clientimg.clientApp" class="carousel-item w-1/2 p-4 border-gray-500 border">
                    <img :src="clientimg.clientApp" class="w-full" />
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <span class="text-2xl font-bold"> Shop Owner Application </span>
            <div class="carousel rounded-box w-96">
                <div v-for="ownerImg in ownerImages" :key="ownerImg.clientApp" class="carousel-item w-1/2 p-4 border-gray-500 border">
                    <img :src="ownerImg.clientApp" class="w-full" />
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <span class="text-2xl font-bold"> Admin Application </span>
            <div class="carousel rounded-box w-96">
                <div v-for="adminImg in adminImages" :key="adminImg.clientApp" class="carousel-item w-1/2 p-4 border-gray-500 border">
                    <img :src="adminImg.clientApp" class="w-full" />
                </div>
            </div>
        </div>
    </div>
    <div class="hero ">
        <div class="hero-content flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:p-8 md:p-4 sm:p-4 xs:p-8">
            <div class="pr-8 ">
                <h1 class="text-2xl font-bold">RESULTS</h1>
                <p class="py-6">
                    According to the findings of the usability test that was done in the areas of shop owners and clients, the users
                    were able to appreciate the application. The client
                    was able to book their desired services without having to walk to the shop. The shop owner was
                    able to evaluate the appointments set by the user and accept or reject them in a timely manner.
                </p>
                <div class="flex md:flex-col sm:flex-col xs:flex-col justify-center space-x-8 md:space-y-4 sm:space-y-4 xs:space-y-4 md:items-center sm:items-center xs:items-center">
                    <div class="flex">
                        <img :src="result1" class=" h-32" />
                        <img :src="result2" class=" h-32" />
                    </div>
                    <div class="w-1/2 md:w-full sm:w-full xs:w-full">
                        <span class="text-lg font-semibold">Testing Results</span>
                        <p>
                            The sub-system for the customer and shop owner application was among the test results.
                            The business owner has 4 shop owner respondents, while the client has 7 respondents with
                            various outcomes on their personal experience when utilizing the app.
                        </p>
                    </div>
                </div>
                <p class="py-8">
                    The test resulted in an overall positive response, with client users successfully completing the
                    appointment schedule via the mobile application. Using the formula in calculating the SUS score, Client application
                    got a average score of 75% while the shop owner application with the average score of 68%.
                </p>
            </div>
            <img :src="pic2" class="max-w-xs rounded-lg shadow-2xl" />
        </div>
    </div>
    <footer class="footer footer-center p-10 bg-primary text-primary-content">
        <div>
            <p class="font-bold">
                Academic Poster
            </p>
            <p>Available here..</p>
        </div>
        <div>
            <a class="btn  btn-outline text-white" target="_blank" :href="url"> Academic Poster </a>
        </div>
    </footer>
</section>
<section v-else-if="id == 2">
    <div>
        <span> Application Program </span>
    </div>
</section>
<section v-else-if="id == 3">
    <div>
        <span> Portfolio Design </span>
    </div>
</section>
<section v-else-if="id == 4">
    <div>
        <span> Agri Web </span>
    </div>
</section>
</template>

<script>
// import BlookItem from '@/views/Blook/BlookItem.vue'
export default {
    props: ['id'],
    data() {
        return {
            url: 'https://www.figma.com/file/oZFjFtnfRH4oJ8fgQzg2xF/Poster?node-id=2%3A7',
            pic1: require('../assets/img/Blook/mobile2.png'),
            pic2: require('../assets/img/Blook/Mobile1.png'),
            result1: require('../assets/img/Blook/result1.png'),
            result2: require('../assets/img/Blook/result2.png'),
            clienImages: [
                {clientApp: require(`../assets/img/Blook/Client/addStaff.png`)},
                {clientApp: require(`../assets/img/Blook/Client/homePage.png`)},
                {clientApp: require(`../assets/img/Blook/Client/login.png`)},
                {clientApp: require(`../assets/img/Blook/Client/maps.png`)},
                {clientApp: require(`../assets/img/Blook/Client/Pending.png`)},
                {clientApp: require(`../assets/img/Blook/Client/phoneNumber.png`)},
                {clientApp: require(`../assets/img/Blook/Client/review.png`)},
                {clientApp: require(`../assets/img/Blook/Client/SetSched.png`)},
                {clientApp: require(`../assets/img/Blook/Client/shopDestination.png`)},
                {clientApp: require(`../assets/img/Blook/Client/shopInfo.png`)},
            ],
            ownerImages: [
                {clientApp: require(`../assets/img/Blook/ShopOwner/addDeals.png`)},
                {clientApp: require(`../assets/img/Blook/ShopOwner/addService.png`)},
                {clientApp: require(`../assets/img/Blook/ShopOwner/charts.png`)},
                {clientApp: require(`../assets/img/Blook/ShopOwner/detailsAppointments.png`)},
                {clientApp: require(`../assets/img/Blook/ShopOwner/Homepage.png`)},
                {clientApp: require(`../assets/img/Blook/ShopOwner/pending.png`)},
                {clientApp: require(`../assets/img/Blook/ShopOwner/phone.png`)},
                {clientApp: require(`../assets/img/Blook/ShopOwner/registration.png`)},
                {clientApp: require(`../assets/img/Blook/ShopOwner/shopInfor.png`)},
                {clientApp: require(`../assets/img/Blook/ShopOwner/staffList.png`)},
            ],
            adminImages: [
                {clientApp: require(`../assets/img/Blook/Admin/approvedShop.png`)},
                {clientApp: require(`../assets/img/Blook/Admin/data.png`)},
                {clientApp: require(`../assets/img/Blook/Admin/Homepage.png`)},
                {clientApp: require(`../assets/img/Blook/Admin/login.png`)},
                {clientApp: require(`../assets/img/Blook/Admin/PendingShop.png`)},
                {clientApp: require(`../assets/img/Blook/Admin/ShopApprovedDetails.png`)},
                {clientApp: require(`../assets/img/Blook/Admin/shopPendingDetails.png`)},
            ]
        }
    },
    // component: {BlookItem}
}
</script>

<style>

</style>
