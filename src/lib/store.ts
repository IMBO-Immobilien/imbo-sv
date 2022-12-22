import { writable, readable, derived } from 'svelte/store'
import type { Asset, Site, LocaleObject, Translations } from './types'
import { en, de } from '$lib/translations'
import client from "$lib/sanityClient"
import { assetOverviewQuery, siteDataQuery } from '$lib/queries'

export const assetData = writable(<Asset[]>{})
export const siteData = writable(<Site>{})
export const translations = readable({en, de} as Translations)
export const browserLang = writable("en-US")
export const browserLangISO = derived([browserLang], ([bl])=>codeToISO(bl).iso)
export const lang = writable("")
export const sideBarState = writable(false)

export const locales = [{iso:"en", code: "en-US"}, {iso: "de", code: "de-DE"}] as LocaleObject[]

const codeToISO=(code: LocaleObject["code"])=>{
    return locales.find(l=>l.code == code) as LocaleObject
}

export const t = (word: string) => derived([translations, browserLangISO], ([$tr, $blISO]) => {
    // console.log("$tr", $tr)
    // console.log("iso", $blISO)
    // console.log("word", word)
    if ($tr[$blISO]) {
        if ($tr[$blISO][word]) {
            return $tr[$blISO][word]
        }
    }
    return ""
})

// t('rooms').subscribe(s=>console.log("tr",s))
// t('management').subscribe(s=>console.log("tr",s))



const getSiteData = async() => {
    let s = await client.fetch(siteDataQuery) as Site
    siteData.set(s)
}

const getAssetData = async() => {
    let a = await client.fetch(assetOverviewQuery) as Asset[]
    if (!Array.isArray(a)) {
        console.warn("assetData not an array", a)
    }
    assetData.set(a)
}


getSiteData()
getAssetData()

