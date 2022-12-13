import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server:{
		port:2000,
		host: true,
		strictPort:false,
	}
}

export default config
