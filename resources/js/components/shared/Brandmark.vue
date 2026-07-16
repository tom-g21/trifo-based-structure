<script setup>
// Brand mark — official Trifolium logo. tone: 'light' (white, for the
// accent panel) | 'dark' (native black art, for light surfaces).
// The logo lives in public/img (served by Laravel at the web root).
defineProps({
    tone: { type: String, default: 'dark' },
    height: { type: Number, default: 120 },
});
</script>

<template>
    <img
        src="/img/trifolium-logo.png"
        alt="Trifolium"
        class="block w-auto max-w-full object-contain"
        :class="{ 'brightness-0 invert': tone === 'light' }"
        :style="{ height: `${height}px` }"
    />
</template>
