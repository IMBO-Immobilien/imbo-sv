// import type { GetSession, Handle } from "@sveltejs/kit"
// import {parse} from "cookie"

// export const handle: Handle = async({event, resolve})=>{
//     console.log("Handle")
//     const cookie = await parse(event.request.headers.get("cookies") || "")
//     event.locals.user.lang = cookie.lang || "sl"
//     const response = await resolve(event)

//     return response;
// }

// export const getSession: GetSession = async(request) => {
//     return {
//         user: {
//             lang: request.locals.user.lang
//         }
//     }
// }
export {}