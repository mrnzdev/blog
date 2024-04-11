import db from '@astrojs/db';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [tailwind(), db()]
});
