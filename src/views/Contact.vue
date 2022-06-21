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
			contacts: [
				{
					id: 1,
					name: '#57 Katarungan Street, Progress Home Subdivision, Canaman, Del Rosario, Camarines Sur',
					icon: 'map-pin',
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
	<div
		class="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto sm:px-0 sm:max-w-full xs:px-0 flex sm:flex-col xs:flex-col"
	>

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
			<!-- Contact form -->
		<ContactForm />
	</div>
</template>
