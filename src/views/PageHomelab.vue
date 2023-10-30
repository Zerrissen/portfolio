<template>
    <div>
        <h1>My Homelab</h1>
        <p>Welcome to my homelab page!</p>
        <p>Here are some of the projects I'm currently working on:</p>
        <ul>
            <li v-for="project in projects" :key="project.id">
                {{ project.name }} - {{ project.description }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PageHomelab',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'Project 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    id: 2,
                    name: 'Project 2',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    id: 3,
                    name: 'Project 3',
                    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
            ]
        }
    }
}
</script>
