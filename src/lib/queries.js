export const siteDataQuery = `*[_type == "site"]{
    ...,
    "logo": logo {
        caption,
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
    // "image": image {
    //     "url": asset->url,
    //     "dimensions": asset.metadata->dimensions,
    // },
    "about": about {
        management[]->{
            name
        },
        webDesign[]->{
            name
        }
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
        "url": asset->url,
        "dimensions": asset->metadata.dimensions
    },
}`

export const assetsQuery = `*[_type == "assets" && slug.current == $slug]{
    ...,
    "flats": flats[] {
        ...,
        "plans": floorPlans[] {
            title,
            titleEN,
            slug,
            "url": image.asset->url,
            "dimensions": image.asset->metadata.dimensions
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
        "dimensions": image.asset->metadata.dimensions
    },
}`