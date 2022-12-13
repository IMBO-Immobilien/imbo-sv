import { writable } from 'svelte/store'
import type { Asset, Site } from './types'

export const assets = writable(Object as ()=> Asset[])
export const site = writable(Object as ()=> Site)