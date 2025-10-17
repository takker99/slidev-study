<template>
  <div class="two-column-container h-full flex flex-col p-12 bg-white" role="article">
    <div v-if="title" class="header mb-6 pb-4" style="border-bottom: 2px solid var(--color-border-primary);">
      <h2 class="text-3xl font-bold" style="color: var(--color-text-primary);">{{ title }}</h2>
    </div>
    <div class="columns flex-1 flex gap-8" role="main">
      <div class="column-left flex-1" role="region" aria-label="Left column content">
        <slot name="left" />
      </div>
      <div class="column-right flex-1" role="region" aria-label="Right column content">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	title?: string;
}>();
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
  color: var(--color-text-secondary);
  @apply leading-relaxed;
}

.column-left :deep(p),
.column-right :deep(p) {
  @apply text-lg leading-relaxed mb-3;
  color: var(--color-text-secondary);
}
</style>
