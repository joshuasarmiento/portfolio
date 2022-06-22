<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
    components: {
        ContactForm,
        ContactDetails,
    },
    data: () => {
        return {
            contacts: [{
                    id: 1,
                    name: 'Naga City, Philippines',
                    icon: 'map-pin',
                    link: 'https://www.google.com/maps/place/Del+Rosario,+Canaman,+Camarines+Sur/@13.6383028,123.1717444,183m/data=!3m2!1e3!4b1!4m13!1m7!3m6!1s0x33a1f3540bb00985:0xaf9dcc7cdda76e61!2sProgress+Homes+Subdivision,+Fourth+St,+Camaligan,+Camarines+Sur!3b1!8m2!3d13.6361252!4d123.1738071!3m4!1s0x33a1f356f281b84b:0xf4d83b071de71d92!8m2!3d13.6383828!4d123.1724048'
                },
                {
                    id: 2,
                    name: 'sarmientojoshuaalvarez@gmail.com',
                    icon: 'mail',
                },
                {
                    id: 3,
                    name: '09454887795',
                    icon: 'phone',
                },
            ],
        };
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
    methods: {},
};
</script>

<template>
<div class="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto sm:px-0 sm:max-w-full xs:px-0 flex sm:flex-col xs:flex-col justify-center items-start px-0">
    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
    <!-- Contact form -->
    <ContactForm />

</div>
</template>
