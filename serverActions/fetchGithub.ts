"use server"
export async function fetchGithub(url: string) {
    try {
        const response = await fetch(url)
        const html = await response.text()
        return html
    } catch (error) {
        console.log(error)
        return "error"
    }
}
