<template>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <div class="flex items-center">
            <div class="ml-4">
                <h3 class="text-3xl">Contact Me</h3>
                <p class="dark:text-gray-400">Want to get in touch about a project or job opportunity? Fill out the form
                    below and I'll get in touch ASAP!</p>
            </div>
        </div>
        <form class="mt-4" ref="form" id="form" @submit.prevent="submitForm()">
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-400 font-bold mb-2" for="name">
                    Name <span class='text-red-500'>*</span>
                </label>
                <input v-model="name"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-none dark:bg-gray-900 dark:text-gray-400"
                    name="name" type="text" placeholder="John Doe" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-400 font-bold mb-2" for="email">
                    Email  <span class='text-red-500'>*</span>
                </label>
                <input v-model="email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-none dark:bg-gray-900 dark:text-gray-400"
                    name="email" type="email" placeholder="johndoe@example.com" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-400 font-bold mb-2" for="organization">
                    Organization 
                </label>
                <input v-model="organization"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-none dark:bg-gray-900 dark:text-gray-400"
                    name="organization" type="text" placeholder="Acme Inc.">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-400 font-bold mb-2" for="message">
                    Message  <span class='text-red-500'>*</span>
                </label>
                <textarea v-model="message"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-none dark:bg-gray-900 dark:text-gray-400"
                    name="message" placeholder="Enter your message here" rows='5' required></textarea>
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700  text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>


<script>
import emailjs from '@emailjs/browser';

export default {
    data() {
        return {
            name: '',
            organization: '',
            email: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            try {
                emailjs.sendForm('service_ests5ee', 'template_iqwr63s', "#form", '_wYlXYFRV8A-TAYTW',
                    )
                    .then((result) => {
                        console.log(result.text);
                        console.log(`Name: ${this.name} Email: ${this.email} Org: ${this.organization} Message: ${this.message}`);
                        // Reset form field
                        this.name = '';
                        this.email = '';
                        this.organization = '';
                        this.message = '';
                    }, (error) => {
                        console.log(error.text);
                    });

            } catch (error) {
                console.log({ error })
            }           
        },
    }
}
</script>
