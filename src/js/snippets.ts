export const markDefs:string = `markDefs[]{
    ...,
    _type == "internalLink" => {
        "type": @.reference->_type,
        "slug": @.reference->{...}
    },

    _type == "externalLink" => {
        ...,
        "url": file.url -> url
    }
},`

