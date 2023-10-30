<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
    <div class="flex items-center">
      <!-- Circular Image -->
      <div class="rounded-full w-200 overflow-hidden border-4 dark:border-gray-600 border-gray-300">
        <img src="../assets/nathan.jpg" alt="Profile Image">
      </div>
      
      <!-- Title and Description -->
      <div class="ml-4">
        <h3 class="text-4xl">{{ title }}</h3>
        <p class="dark:text-gray-400">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
};
</script>