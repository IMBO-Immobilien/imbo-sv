import type { Site } from '$lib/types'
// import type { PageData } from './$types'
/** @type {import('./$types').PageLoad} */
export const load = async () =>{
    const data = {
        site:<Site> {
            siteName: "IMBO"
        }
    }

    return {
        site: data
    }
}