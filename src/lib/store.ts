import { writable, readable, derived } from 'svelte/store'
import type { Asset, Site, LocaleObject } from './types'
import { en, de } from '$lib/translations'

interface trans {
    [key: string]: string
}

interface Translations {
    [key: string]: trans
    en: trans
    de: trans
}

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

export const locales = [{iso:"en", code: "en-US"}, {iso: "de", code: "de-DE"}] as LocaleObject[]