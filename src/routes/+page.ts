// import client from "../lib/sanityClient"
// export async function get() {
//     const data = await client.fetch(
//         /* groq */ `*[_type == "site"]{
//         ...,
//         "logo": logo {
//             ...,
//             caption,
//             "url": image.asset->url,
//             "dimensions": asset->metadata.dimensions
//         },
//         "opengraph": opengraph {
//             ...,
//             "image": image{
//                 "url": asset->url,
//                 "dimensions": asset.metadata->dimensions,
//             }
//         },
//         "about": about {
//             management[]->{
//                 name
//             },
//             webDesign[]->{
//                 name
//             }
//         }
//     }`, {})

//     if (data) {
//         return {
//             status: 200,
//             body: data
//         }
//     }
        
//     return {
//         status: 404
//     }
// }
export {}