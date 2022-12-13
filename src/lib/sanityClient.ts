import sanityClient from "@sanity/client"

const client = sanityClient({
  projectId: "bnn9wbbb",
  dataset: "production",
  apiVersion: "2022-10-21", // choose the API version you want
  useCdn: true,
})

export default client