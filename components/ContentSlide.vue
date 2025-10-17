<template>
  <div class="content-slide-container h-full flex flex-col p-12 bg-white">
    <div class="header mb-6 pb-4 border-b-2 border-blue-600">
      <h2 class="text-3xl font-bold text-gray-800">{{ title }}</h2>
    </div>
    <div class="content flex-1 overflow-auto">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.content-slide-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.content :deep(ul) {
  @apply space-y-3 text-xl;
}

.content :deep(li) {
  @apply text-gray-700 leading-relaxed;
}

.content :deep(p) {
  @apply text-xl text-gray-700 leading-relaxed mb-4;
}

.content :deep(strong) {
  @apply text-blue-600 font-semibold;
}
</style>
