import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter({}),
		alias: {
			'~ui/*': 'src/lib/web/shared/design-system/ui/*',
			'~features/*': 'src/lib/web/features/*',
			'~widgets/*': 'src/lib/web/widget/*',
			'~commands/*': 'src/lib/server/commands/*',
			'~queries/*': 'src/lib/server/queries/*',
		},		
	}
};

export default config;
