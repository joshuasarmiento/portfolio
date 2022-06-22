<script>
</script>

<template>
<div class="w-full md:w-1/2">
    <div class="leading-loose max-w-xl m-5 p-7 bg-primary-light rounded-xl shadow-xl text-left">
        <p class="text-primary-dark text-2xl mb-8 font-semibold sm:text-lg xs:text-lg">
            Contact Form
        </p>
        <form action="https://formsubmit.co/c9fc0807ddc7a5ea6584052b247958e2" method="POST" class="space-y-7">
            <div>
                <label class="block text-lg text-primary-dark mb-2" for="name">Full Name</label>
                <input class="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-primary-dark   rounded-md shadow-sm text-md" id="name" name="name" type="text" required="" placeholder="Your Name" aria-label="Name" />
            </div>
            <div>
                <label class="block text-lg text-primary-dark  mb-2" for="email">Email</label>
                <input class="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-primary-dark   rounded-md shadow-sm text-md" id="email" name="email" type="text" required="" placeholder="Your Email" aria-label="Email" />
            </div>
            <div>
                <label class="block text-lg text-primary-dark  mb-2" for="subject">Subject</label>
                <input class="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-primary-dark   rounded-md shadow-sm text-md" id="subject" name="subject" type="text" required="" placeholder="Subject" aria-label="Subject" />
            </div>

            <div>
                <label class="block text-lg text-primary-dark  mb-2" for="message">Message</label>
                <textarea class="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-primary-dark  rounded-md shadow-sm text-md" id="message" name="message" cols="14" rows="6" aria-label="Message"></textarea>
            </div>
            <div>
                <button type="submit" target="_blank" class="text-gray-600 hover:text-indigo-400 cursor-pointer rounded-lg border hover:bg-primary-color shadow-sm p-3 duration-500">
                    <span> Send Message </span>
                </button>
            </div>
        </form>
    </div>
</div>
</template>

<style lang="scss" scoped></style>
