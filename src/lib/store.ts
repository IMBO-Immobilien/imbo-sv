import { writable, readable, derived } from 'svelte/store'
import type { Asset, Site, LocaleObject, Translations } from './types'
import { en, de } from '$lib/translations'
import client from "$lib/sanityClient"
import { assetOverviewQuery, siteDataQuery } from '$lib/queries'

export const assetData = writable(<Asset[]>{})
export const siteData = writable(<Site>{})
export const translations = readable({en, de} as Translations)
export const t = (word: string) => derived([translations, browserLang], ([$tr, $browserLang]) => {
    console.log("$tr", $tr)
    console.log("word", word)
    return $tr[$browserLang][word]
})

export const browserLang = writable("")
export const lang = writable("")
export const sideBarState = writable(false)

const getSiteData = async() => {
    let s = await client.fetch(siteDataQuery) as Site
    siteData.set(s)
}

const getAssetData = async() => {
    let a = await client.fetch(assetOverviewQuery) as Asset[]
    assetData.set(a)
}


getSiteData()
getAssetData()

export const locales = [{iso:"en", code: "en-US"}, {iso: "de", code: "de-DE"}] as LocaleObject[]