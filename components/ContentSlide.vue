<template>
  <div class="content-slide-container h-full flex flex-col p-12 bg-white" role="article">
    <div class="header mb-6 pb-4" style="border-bottom: 2px solid var(--color-border-primary);">
      <h2 class="text-3xl font-bold" style="color: var(--color-text-primary);">{{ title }}</h2>
    </div>
    <div class="content flex-1 overflow-auto" role="main">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
}>();
</script>

<style scoped>
.content-slide-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.content :deep(ul) {
  @apply space-y-3 text-xl;
}

.content :deep(li) {
  color: var(--color-text-secondary);
  @apply leading-relaxed;
}

.content :deep(p) {
  @apply text-xl leading-relaxed mb-4;
  color: var(--color-text-secondary);
}

.content :deep(strong) {
  color: var(--color-primary-600);
  @apply font-semibold;
}
</style>
