import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import db from '@astrojs/db';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db()],
  prefetch: {
    prefetchAll: true
  },
  output: "server",
  adapter: cloudflare()
});