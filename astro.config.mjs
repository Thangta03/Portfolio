import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import { remarkReadingTime } from './markdown-eta.mjs';

export default defineConfig({
    site: 'http://thang.ta-portfolio/',
    integrations: [tailwind({ configFile: './tailwind.config.cjs' })],
    markdown: {
        remarkPlugins: [remarkReadingTime],
        shikiConfig: {
            syntaxHighlight: 'shiki',
            theme: 'nord',
            wrap: true,
        },
    },
});
