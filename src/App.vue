<script setup>
import TheNavbar from './components/TheNavbar.vue';
</script>


<template>
    <header>
        <TheNavbar />
    </header>

    <main>
        <router-view v-slot="{ Component, route }">
            <transition :name="transitionName" mode='out-in'>
                <div :key="route.name">
                    <component :is="Component"></component>
                </div>
            </transition>
        </router-view>
    </main>
</template>

<script>
import { ref, computed } from 'vue';

const direction = ref('left');

const transitionName = computed(() => {
    return `slide-fade-${direction.value}`;
});

export default {
    name: 'App',
    data () {
        return {transitionName: null}
    },
    watch: {
        '$route' (to, from) {
            direction.value = from.meta.index > to.meta.index ? 'right' : 'left';
        }
    }
}
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all .3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
}

/* Transition effect for sliding right (to the right) */
.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
    transition: all .3s ease;
}

.slide-fade-right-enter,
.slide-fade-right-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

/* Transition effect for sliding left (to the left) */
.slide-fade-left-enter-active,
.slide-fade-left-leave-active {
    transition: all .3s ease;
}

.slide-fade-left-enter,
.slide-fade-left-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
</style>
