import adapter from '@sveltejs/adapter-auto'
// import stat from '@sveltejs/adapter-static'
// import cloudflare from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/kit/vite'
// import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */

const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	
	preprocess: vitePreprocess({
		scss: {
			prependData: '@use "./src/lib/style/global.scss";'
		}
	}),

	kit: {
		adapter: adapter({
			// pages: 'public',
            // assets: 'public',
            // fallback: null,
            // precompress: false
		}),
		// prerender: {
		// 	default: true
		// 	entries: [] 
		// }
	},
}

export default config
