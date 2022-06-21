<script>
export default {
	
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-5 p-7 bg-primary-light dark:bg-primary-light rounded-xl shadow-xl text-left"
		>
			<p
				class="text-primary-dark dark:text-primary-light text-2xl mb-8 font-semibold sm:text-lg xs:text-lg"
			>
				Contact Form
			</p>
			<form action="https://formsubmit.co/c9fc0807ddc7a5ea6584052b247958e2" method="POST" class="space-y-7">
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="name"
						>Full Name</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="name"
						name="name"
						type="text"
						required=""
						placeholder="Your Name"
						aria-label="Name"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="email"
						>Email</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="email"
						name="email"
						type="text"
						required=""
						placeholder="Your Email"
						aria-label="Email"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="subject"
						>Subject</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="subject"
						name="subject"
						type="text"
						required=""
						placeholder="Subject"
						aria-label="Subject"
					/>
				</div>

				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="message"
						>Message</label
					>
					<textarea
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="message"
						name="message"
						cols="14"
						rows="6"
						aria-label="Message"
					></textarea>
				</div>

				<div>
					 <button type="submit" class="text-gray-600 hover:text-indigo-400 dark:hover:text-gray-400 cursor-pointer rounded-lg border hover:bg-primary-color shadow-sm p-3 duration-500">
                    	<span> Send Message </span>
                	</button>
					<!-- <button type="submit" class="btn btn-outline rounded-lg block text-left text-lg font-medium text-primary-color hover:text-gray-600 dark:hover:text-gray-300  sm:mx-4 mb-2 sm:py-2">
						Send Message
					</button> -->
					<!-- <button
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
					/>Send Message<button/> -->
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
