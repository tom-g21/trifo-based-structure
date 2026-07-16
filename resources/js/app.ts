import { createInertiaApp } from '@inertiajs/vue3';
import { initEnglishOverlay } from '@/lib/i18n/overlay.js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Developer English overlay — ACTIVE ONLY with ?lang=en (see resources/js/lib/i18n).
// A no-op in the default Hebrew product; never affects the end-user build.
initEnglishOverlay();

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
});
