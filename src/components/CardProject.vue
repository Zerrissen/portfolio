<script setup>
const languageIcons = {
  "JavaScript": 'fab fa-js',
  "Python": 'fab fa-python',
  "Dockerfile": 'fab fa-docker',
  "HTML": 'fab fa-html5',
  "Java": 'fab fa-java',
  "Vue": 'fab fa-vuejs',

  // Add more languages and their corresponding icons here
};

</script>

<template>
  <div class="bg-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg shadow-lg p-4">
    <div class="flex items-center">
      <!-- Title and Description -->
      <div class="ml-4">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <p class="dark:text-gray-400">{{ description }}</p>
        <p v-if="language" class="text-gray-400">
          <font-awesome-icon v-if="languageIcons[language]" :icon="languageIcons[language]"></font-awesome-icon>
          {{ language }}
        </p>

      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  props: {
    title: String,
    description: String,
    language: String,
    // languageIcons: Object,
  }
};
</script>