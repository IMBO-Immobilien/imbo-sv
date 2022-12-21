import client from "$lib/sanityClient"
import { flatImageQuery } from '$lib/queries'
import type { Asset, Collection } from '$lib/types'
import type { RouteParams } from './$types'

// export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    if (!ctx.params.asset) {
        console.log("asset undefined [asset]")
    }
    // console.log("params", ctx.params)
    try {
        const asset = await client.fetch(flatImageQuery, { asset: ctx.params.asset, flat: ctx.params.flat }) as Asset
        let collection = <Collection>{}
        collection.images = asset.flat.images
        collection.currentImageID = "image-0"
        collection.images.forEach((i, idx: number) => {
            if (i.slug.current === ctx.params.image) {
                collection.currentImageID = 'image-' + idx
            }
        })
    
        return {
            collection
        }
    } catch (error) {
        console.error(error)
    }
}