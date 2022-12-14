export const siteData = `*[_type == "site"]{
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

export const assetData = `*[_type == "assets"]{
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