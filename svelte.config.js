import adapter from '@sveltejs/adapter-cloudflare'
// import { vitePreprocess } from '@sveltejs/kit/vite'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	
	// preprocess: vitePreprocess(),
	preprocess: sveltePreprocess({
		scss: {
			prependData: '@use "./src/lib/style/global.scss";'
		}
	}),

	kit: {
		adapter: adapter(),
	},
}

export default config