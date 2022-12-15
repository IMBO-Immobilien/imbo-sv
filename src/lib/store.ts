import { writable } from 'svelte/store'
import type { Asset, Site } from './types'

export const assets = writable([] as Asset[])
export const site = writable({} as Site)