import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	
	kit: {
		adapter: adapter(),
		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "./lib/style/global.scss" as *;'
                    }
				}
			}
		}
	},
	preprocess: [vitePreprocess()],
}

export default config
