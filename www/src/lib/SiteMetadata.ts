export type SiteMetadata = {
    title: string,
    description?: string,
    author?: string,
    siteUrl?: string,
    repository?: string,

    languages: {
        langs: string[],
        defaultLangKey: string
    }
}