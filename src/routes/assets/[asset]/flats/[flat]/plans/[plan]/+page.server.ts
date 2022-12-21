import client from "$lib/sanityClient"
import { flatPlanQuery } from '$lib/queries'
import type { Asset, Collection } from '$lib/types'
import type { RouteParams } from './$types'

// export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: { params: RouteParams }) =>{
    // console.log("params", ctx.params)
    const asset = await client.fetch(flatPlanQuery, { asset: ctx.params.asset, flat: ctx.params.flat }) as Asset
    let collection = <Collection>{}
    collection.images = asset.flat.images
    collection.currentImageID = "image-0"
    collection.images.forEach((i, idx:number) => {
        if (i.slug.current === ctx.params.plan) {
            collection.currentImageID = 'image-' + idx
        }
    })

    // console.log("plans", collection.images)

    return {
        collection
    }
}