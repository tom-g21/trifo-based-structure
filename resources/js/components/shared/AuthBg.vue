<script>
// Soft, blurred natural-pharmacy ambient backdrops for the centered auth
// cards. Several gentle variants — all kept calm and low-contrast so the
// white card stays crisp. The prototype selected the variant via the Tweaks
// panel ("רקע"); that panel was dropped, so the shipped default
// ('מרווה רכה') is baked in as the prop default. The other variants are
// kept verbatim in case the choice ever becomes server-driven.
export const AUTH_BG_OPTIONS = [
    'פרחי מרפא (ירוק)',   // floral, green wash
    'פרחי מרפא (בהיר)',   // floral, airy/light wash
    'מרווה רכה',          // soft sage gradient, no photo — shipped default
    'זוהר ירוק',          // soft green radial glow
    'קרם חמים',           // warm cream gradient
];
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: { type: String, default: 'מרווה רכה' },
});

// Tailwind classes for the blurred photo layer (floral variants only). The
// background image lives in public/img (served by Laravel at the web root), so
// it's referenced by URL and passed through `style` rather than a utility class.
const photoStyle = { backgroundImage: 'url(/img/echinacea.jpg)' };
const photoBase = 'absolute inset-[-60px] scale-[1.12] bg-cover bg-center';

// Each variant is a list of absolutely-positioned layers. `class` carries the
// utilities; `style` is only present for the dynamic photo background.
const layers = computed(() => {
    switch (props.variant) {
        case 'פרחי מרפא (בהיר)':
            return [
                { class: `${photoBase} blur-[20px] saturate-[0.85] brightness-[1.12]`, style: photoStyle },
                { class: 'absolute inset-0 bg-[linear-gradient(150deg,rgba(246,248,245,0.58),rgba(231,238,229,0.74))]' },
                { class: 'absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_35%,rgba(255,255,255,0.30),rgba(61,90,58,0.10)_75%)]' },
            ];
        case 'מרווה רכה':
            return [
                { class: 'absolute inset-0 bg-[linear-gradient(160deg,#eef2ec_0%,#e4ece1_55%,#dae4d6_100%)]' },
                { class: 'absolute inset-0 bg-[radial-gradient(110%_80%_at_28%_22%,rgba(255,255,255,0.55),rgba(255,255,255,0)_60%)]' },
            ];
        case 'זוהר ירוק':
            return [
                { class: 'absolute inset-0 bg-[#eef2ec]' },
                { class: 'absolute inset-0 bg-[radial-gradient(90%_70%_at_25%_18%,rgba(61,90,58,0.18),rgba(61,90,58,0)_60%)]' },
                { class: 'absolute inset-0 bg-[radial-gradient(80%_70%_at_82%_88%,rgba(61,90,58,0.16),rgba(61,90,58,0)_58%)]' },
            ];
        case 'קרם חמים':
            return [
                { class: 'absolute inset-0 bg-[linear-gradient(160deg,#f8f5ed_0%,#f0ebde_60%,#e9e2d2_100%)]' },
                { class: 'absolute inset-0 bg-[radial-gradient(110%_80%_at_30%_20%,rgba(255,255,255,0.5),rgba(125,74,42,0.05)_70%)]' },
            ];
        default: // 'פרחי מרפא (ירוק)'
            return [
                { class: `${photoBase} blur-[18px] saturate-[0.8] brightness-[1.02]`, style: photoStyle },
                { class: 'absolute inset-0 bg-[linear-gradient(150deg,rgba(31,46,29,0.30),rgba(31,46,29,0.52))]' },
                { class: 'absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,rgba(246,248,245,0.22),rgba(31,46,29,0)_60%)]' },
            ];
    }
});
</script>

<template>
    <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
        <div v-for="(layer, i) in layers" :key="i" :class="layer.class" :style="layer.style" />
    </div>
</template>
