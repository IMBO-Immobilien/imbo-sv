// import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-static'
// import cloudflare from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/kit/vite'
// import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors

	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: "index.html",
			strict: false
		}),
		// prerender: { entries: [
		// 	"/assets/grenzsteig-kilchberg",
		// 	"/assets",
		// 	"/"
		// ] }	
	},
}

export default config
