import client from "$lib/sanityClient"
import { imageQuery } from '$lib/queries'
import type { Asset, Collection } from '$lib/types'
import type { RouteParams } from './$types'

// export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    console.log("params", ctx.params.slug)
    const asset = await client.fetch(imageQuery, {slug: ctx.params.slug}) as Asset[]
    console.log("asset",asset)
    let coll = {} as Collection
    coll.images = asset[0].images
    let currentImageID = "image-0"
    coll.images.forEach((i, idx:number) => {
        if (i.slug.current === ctx.params.image) {
            currentImageID = 'image-' + idx
        }
    })
    console.log("coll",coll)


    return {
        coll, currentImageID
    }
}