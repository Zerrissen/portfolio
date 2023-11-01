<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <nav>
        <div class='mb-10'>
            <div class='flex items-center justify-between h-16'>
                <router-link to="/" class="nav">Home</router-link>
                <router-link to="/projects" class="nav">Projects</router-link>
                <router-link to="/homelab" class="nav">Homelab</router-link>
                <router-link to="/contact" class="nav">Contact Me</router-link>
                <button @click="toggleDark()" class="dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white font-bold py-2 px-4 rounded">
                <span class='dark:text-white text-black'>
                    {{ isDark ? "Dark" : "Light" }} Mode
                </span>
            </button>
            </div>
        </div>
    </nav>
</template>