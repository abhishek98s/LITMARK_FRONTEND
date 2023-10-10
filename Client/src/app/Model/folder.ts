export interface folder {
    img: string
    title: string,
}

export interface Chip {
    chipName: string,
    active: boolean
}

export interface Recentbookmark {
    category: string,
    title: string,
    date: string,
    img: string,
    link: string
}

export interface insideFolder {
    folder: boolean,
    category?: string,
    title?: string,
    date?: string,
    img?: string,
    link?: string
}