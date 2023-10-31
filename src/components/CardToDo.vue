<template>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <div class="flex items-center">
            <!-- Title and Description -->
            <div class="ml-4">
                <h3 class="text-lg font-semibold">{{ title }}</h3>
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