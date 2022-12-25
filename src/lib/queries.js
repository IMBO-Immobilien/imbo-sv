export const siteDataQuery = `*[_type == "site"][0]{
    ...,
    "logo": logo {
        alt,
        "url": image.asset->url,
        "dimensions": image.asset->metadata.dimensions
    },
    "opengraph": opengraph {
        ...,
        "image": image{
            "url": asset->url,
            "dimensions": asset.metadata->dimensions,
        }
    },
    "about": about {
        management[]->{ name },
        webDesign[]->{ name }
    }
}`

export const assetOverviewQuery = `*[_type == "assets"]{
    menuName,
    nameDE,
    nameEN,

    generalShortDE,
    generalShortEN,

    "generalRawDE": pt::text(generalShortDE),
    "generalRawEN": pt::text(generalShortEN),

    slug,

    "overviewImage": overviewImage {
        crop,
        hotspot,
        slug,
        alt,
        "url": asset->url,
        "dimensions": asset->metadata.dimensions,
        author->{ name }
    },
}`

export const flatQuery = `*[_type == "assets" && slug.current == $asset][0]{
    slug,
    "flatlist": flats[] {
        flatNumber,
        rooms,
        "slug": slug.current
    },
    "flat": flats[slug.current == $flat][0] {
        ...,
        "images": images[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions,
            author->{ name }
        },
        "plans": floorPlans[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions,
            author->{ name }
        }
    }
}`

export const assetImageQuery = `*[_type == "assets" && slug.current == $asset][0]{
    // ...,
    slug,
    "images": outsideImages[] {
        title,
        titleEN,
        slug,
        "url": image.asset->url,
        "dimensions": image.asset->metadata.dimensions,
        author->{ name }
    }
}`

export const flatImageQuery = `*[_type == "assets" && slug.current == $asset][0]{
    // ...,
    slug,
    "flat": flats[slug.current == $flat][0] {
        slug,
        "images": images[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions,
            author->{ name }
        }
    }
}`
export const flatPlanQuery = `*[_type == "assets" && slug.current == $asset][0]{
    // ...,
    slug,
    "flat": flats[slug.current == $flat][0] {
        slug,
        "images": floorPlans[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions,
            author->{ name }
        }
    }
}`


export const assetQuery = `*[_type == "assets" && slug.current == $asset][0]{
    ...,
    "flats": flats[] {
        ...,
        "plans": floorPlans[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions,
            author->{ name }
        }
    },

    "generalRawDE": pt::text(generalShortDE),
    "generalRawEN": pt::text(generalShortEN),

    "generalDE": generalDE[] {
        ...,
        markDefs[]{
            ...,
            _type == "internalLink" => {
                // ...,
                "type": @.reference->_type,
                "slug": @.reference->slug.current
            },

            _type == "externalLink" => {
                ...,
                "url": file.url -> url
            }
        }
    },
    "generalEN": generalEN[] {
        ...,
        markDefs[]{
            ...,
            _type == "internalLink" => {
                // ...,
                "type": @.reference->_type,
                "slug": @.reference->slug.current
            },

            _type == "externalLink" => {
                ...,
                "url": file.url -> url
            }
        }
    },
    "architectureDE": architectureDE[] {
        ...,
        markDefs[]{
            ...,
            _type == "internalLink" => {
                // ...,
                "type": @.reference->_type,
                "slug": @.reference->slug.current
            },

            _type == "externalLink" => {
                ...,
                "url": file.url -> url
            }
        }
    },
    "architectureEN": architectureEN[] {
        ...,
        markDefs[]{
            ...,
            _type == "internalLink" => {
                // ...,
                "type": @.reference->_type,
                "slug": @.reference->slug.current
            },

            _type == "externalLink" => {
                ...,
                "url": file.url -> url
            }
        }
    },

    "form": formDownload {
        ...,
        "url": file.asset->url
    },

    "images": outsideImages[] {
        title,
        titleEN,
        slug,
        "url": image.asset->url,
        "dimensions": image.asset->metadata.dimensions,
        author->{ name }
    },
}`