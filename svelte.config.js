import adapter from '@sveltejs/adapter-static'
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
	// preprocess: sveltePreprocess({
	// 	scss: {
	// 		prependData: '@use "./src/lib/style/global.scss";'
	// 	}
	// }),

	kit: {
		adapter: adapter({
			// fallback: 'app.html'
			// strict: false,
		}),
		// prerender: { entries: [] }
	},
}

export default config
