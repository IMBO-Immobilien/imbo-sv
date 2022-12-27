import client from "$lib/sanityClient"
import { flatPlanQuery } from '$lib/queries'
import type { Asset, Collection } from '$lib/types'
import type { RouteParams, PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load:PageServerLoad = async (ctx: { params: RouteParams }) =>{
    let collection = <Collection>{}
    try {
        const asset = await client.fetch(flatPlanQuery, { 
            asset: ctx.params.asset, 
            flat: ctx.params.flat 
        }) as Asset
        collection.images = asset.flat.images
        collection.currentImageID = "image-0"
        collection.images.forEach((i, idx:number) => {
            if (i.slug.current === ctx.params.plan) {
                collection.currentImageID = 'image-' + idx
            }
        })
    } catch (err) {
        console.error(err)
        throw error(404, '[plan] error '+err)
    }

    return {
        collection
    }
}