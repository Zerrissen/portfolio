<template>
    <div>
        <h1 class='text-3xl'>My Projects</h1>
        <p class='dark:text-gray-400'>Below are a few of my most recently updated GitHub projects! This page will change often, so check back to see what I'm currently working on!</p>
        <br>
        <div class="grid grid-cols-2 gap-4">
            <a v-for="project in projects" :key="project.id" :href="project.html_url" target="_blank">
                <CardProject :title="project.name" :description="project.description" :language="project.language">
                </CardProject>
            </a>
        </div>
    </div>
</template>

<script>
import CardProject from '../components/CardProject.vue';

export default {
    name: "PageProjects",
    components: {
        CardProject
    },
    data() {
        return {
            projects: []
        }
    },
    mounted() {
        this.fetchProjects()
    },
    methods: {
        async fetchProjects() {
            const response = await fetch('https://api.github.com/users/zerrissen/repos?per_page=8&sort=pushed')
            const projects = await response.json()
            this.projects = projects
        }
    }
}
</script>
