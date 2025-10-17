<template>
  <div class="two-column-container h-full flex flex-col p-12 bg-white">
    <div v-if="title" class="header mb-6 pb-4 border-b-2 border-blue-600">
      <h2 class="text-3xl font-bold text-gray-800">{{ title }}</h2>
    </div>
    <div class="columns flex-1 flex gap-8">
      <div class="column-left flex-1">
        <slot name="left" />
      </div>
      <div class="column-right flex-1">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped>
.two-column-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.column-left :deep(ul),
.column-right :deep(ul) {
  @apply space-y-2 text-lg;
}

.column-left :deep(li),
.column-right :deep(li) {
  @apply text-gray-700 leading-relaxed;
}

.column-left :deep(p),
.column-right :deep(p) {
  @apply text-lg text-gray-700 leading-relaxed mb-3;
}
</style>
