<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>

<template>
    <div>
        <CardPageTitle title="My Homelab" description="Welcome to my homelab! Below are a few things I'm currently working on.">
    </CardPageTitle>
    <br>
        <ul class='grid grid-cols-2 gap-4'>
            <li v-for="project in projects" :key="project.id">
                <CardToDo :title="project.name" :description="project.description">
                </CardToDo>
            </li>
        </ul>
        <br><br><br>
        <CardPageTitle title="Curious about the setup? Here it is!" description="For best viewing, you may have to right click the image and click 'Open image in new tab' to view it full-screen."></CardPageTitle>
        <p v-if="isDark" class="text-center pt-5">Sorry, I'm still working on a diagram suitable for dark mode! Click the button in the top-right to see the diagram!</p>
        <img v-if="!isDark" src='../assets/Hines-Homelab-light.svg'/>
    </div>
</template>

<script>
import CardToDo from '../components/CardToDo.vue';
import CardPageTitle from '../components/CardPageTitle.vue';


export default {
    name: 'PageHomelab',
    components: {
        CardToDo,
        CardPageTitle
    },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'Re-allocate IP addresses',
                    description: 'At the moment, IP addressing in this network is a bit over the place. I intend to revamp this and give relevant devices static, meaningful IP addresses.'
                },
                {
                    id: 2,
                    name: 'Create site-to-site IPSec tunnel',
                    description: "I need a place to store backups off-site. For this, I'll be creating a site-to-site IPSec tunnel to a friends own homelab, via which we will exchange encrypted backups of our data."
                },
                {
                    id: 3,
                    name: 'Move public-facing services to a DMZ',
                    description: 'A De-militiarized zone (DMZ) is a network segment that is separated from the rest of the network by a firewall. This is where I will put my public-facing services, such as my web servers to protect my local network.'
                }
            ]
        }
    }
}
</script>
