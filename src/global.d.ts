type Theme = 'system' | 'light' | 'dark'

interface entry {
    title?: string,
    body: string,
    date: Date,
    dateString: string,
    imageID?: string
}
