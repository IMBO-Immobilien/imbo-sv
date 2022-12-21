import client from "$lib/sanityClient"
import { assetImageQuery } from '$lib/queries'
import type { Asset, Collection } from '$lib/types'
import type { RouteParams } from './$types'

// export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    try {
        const asset = await client.fetch(assetImageQuery, { asset: ctx.params.asset }) as Asset
        let collection = <Collection>{}
        collection.images = asset.images
        collection.currentImageID = "image-0"
        collection.images.forEach((i, idx: number) => {
            if (i.slug.current === ctx.params.image) {
                collection.currentImageID = 'image-' + idx
            }
        })
    
        return {
            data: collection
        }
    } catch (error) {
        console.error(error)
    }
}