import { writable } from 'svelte/store'
import type { Asset, Site, LocaleObject } from './types'

export const assetData = writable([] as Asset[])
export const siteData = writable({} as Site)

export const browserLang = writable("")
export const lang = writable("")
export const sideBarState = writable(false)

export const locales = [{iso:"en", code: "en-US"}, {iso: "de", code: "de-DE"}] as LocaleObject[]