<template>
    <CardHome title='Nathan Hines' description="Hi! I'm a networking engineering student, self-taught developer, and CTF competitor. I have a keen interest in cybersecurity and digital forensics."></CardHome>
    <br>
    <CardAbout></CardAbout>
</template>

<script>
import CardHome from '../components/CardHome.vue';
import CardAbout from '../components/CardAbout.vue';

export default {
    name: 'PageHome',
    components: {
        CardHome,
        CardAbout,
    }
}
</script>