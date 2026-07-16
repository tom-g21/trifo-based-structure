<script setup>
// Inline field error — alert glyph + danger-colored message.
import Icon from '@/components/ui/Icon.vue';
</script>

<template>
    <div class="mt-1.5 flex items-center gap-[5px] text-xs font-medium text-[var(--danger)]">
        <Icon name="alert" :size="13" color="var(--danger)" :stroke="1.8" />
        <slot />
    </div>
</template>
