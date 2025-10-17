<template>
  <div class="title-slide-container h-full flex flex-col justify-center items-center p-12 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
    <h1 class="text-5xl font-bold mb-6 text-center leading-tight">
      {{ title }}
    </h1>
    <div v-if="subtitle" class="text-2xl mb-8 text-center text-blue-100">
      {{ subtitle }}
    </div>
    <div class="text-xl space-y-2 text-center">
      <div v-if="author" class="font-semibold">{{ author }}</div>
      <div v-if="affiliation" class="text-lg text-blue-200">{{ affiliation }}</div>
      <div v-if="date" class="text-lg text-blue-200 mt-4">{{ date }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	subtitle?: string;
	author?: string;
	affiliation?: string;
	date?: string;
}>();
</script>

<style scoped>
.title-slide-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>
