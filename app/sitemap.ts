import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.janakakariyawasam.xyz",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
    ]
}
