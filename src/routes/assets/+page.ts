import type { Site } from '$lib/types'
/** @type {import('./$types').PageLoad} */
export const load = async () =>{
    const site:Site = {
        siteName: "IMBO"
    }

    return {
        site: site
    }
}