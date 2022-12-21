import type { Block, Slug } from '@sanity/types'
// type Locale = string
export interface LocaleObject  {
    code: string
    iso: string
}

export interface Style {
    [tag: string]: string
}

interface trans {
    [key: string]: string
}

export interface Translations {
    [key: string]: trans
    en: trans
    de: trans
}

export interface ViewBox {
    x: number
    y: number
    w: number
    h: number
}

export interface Point {
    x: number
    y: number
}

export interface Dimension {
    w: number
    h: number
}

export interface Collection {
    images: IMG[]
    titleDE: string
    titleEN: string
    currentImageID: string
    slug: Slug
}

export interface Dimensions {
    _type: string
    aspectRatio: number
    height: number
    width: number
}

export interface IMG {
    alt: string
    caption: string
    title: string
    titleEN: string
    image: HTMLPictureElement
    url: string
    dimensions: Dimensions
    crop: Crop
    hotspot: Hotspot
    slug: Slug
    author: People
    params: Params
}

export interface Download {
    url: string
    filename: string
    descriptionDE: string
    descriptionEN: string
}

export interface People {
    name: string
    email: string
}

export interface Address {
    street: string
    city: string
    zip: string
    phone: string
    country: string
}

export interface Site {
    description?: string
    siteName: string
    companyName: Block[]
    companyAddress: Address
    contactEmail: string

    impressum?: Block[]
    about: {
        management: People[],
        webDesign: People[],
    }
    copyrightDE: Block[]
    extendedCopyrightDE?: Block[]
    copyrightEN: Block[]
    extendedCopyrightEN?: Block[]
    openingHoursDE: string
    openingHoursEN: string
    image?: IMG
    logo: IMG
    opengraph?: Opengraph
    slug?: Slug
}

export interface Opengraph {
    image: IMG
    _type: string
    titleDE: string
    titleEN: string
    description: string
}

export interface TitleHash {
    [key: string]: {
        de: string
        en: string
    }
}

export interface TransMap {
    [key: string]:object
    de: {
        [key: string]:string
    }
    en: {
        [key: string]:string
    }
}

export interface Translation {
    [key: string]:string
    source: string 
    english: string 
    german: string 
}

export interface Crop {
    _type: string
    left: number
    right: number
    top: number
    bottom: number
}

export interface Params {
    asset: string
    flat?: string
    img?: string
    plan?: string
}

export interface Hotspot {
    _type: string
    height: number
    width: number
    x: number
    y: number
}

export interface Asset {
    [key: string]: any
    nameDE: string
    nameEN: string
    descriptionDE: string
    descriptionEN: string
    generalRawDE: string
    generalRawEN: string
    images: IMG[]
    outsideImages: IMG[]
    overviewImage: IMG
    flats: Flat[]
    flat: Flat
    form: Download
    menuName: string
    slug: Slug
    params: Params
}

export interface Plan extends IMG {
    svgData: string
}

export interface Flatlist {
    flatNumber: string
    rooms: number
    slug: string
}

export interface Flat {
    [key: string]: any
    title: string
    titleEN: string
    images: IMG[]
    plans: Plan[]
    currentImageID: string
    rooms: number
    taken: boolean
    flatNumber: string
    position: string
    slug: Slug
    descriptionDE: string
    descriptionEN: string
    flatlist: Flatlist[]
}

export {
    Block, Slug
}
