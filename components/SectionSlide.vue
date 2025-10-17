<template>
  <div class="section-slide-container h-full flex flex-col justify-center items-center p-12 bg-secondary-gradient text-white" role="region" :aria-label="`Section ${sectionNumber}: ${title}`">
    <div class="section-number text-8xl font-bold opacity-20 mb-4" aria-hidden="true">{{ sectionNumber }}</div>
    <h2 class="text-5xl font-bold text-center">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	sectionNumber?: number;
}>();
</script>

<style scoped>
.section-slide-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>
