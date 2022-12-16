import { writable } from 'svelte/store'
import type { Asset, Site } from './types'

export const assetData = writable([] as Asset[])
export const siteData = writable({} as Site)

export const browserLang = writable("")
export const lang = writable("")