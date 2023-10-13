export interface folder {
    id: string,
    img: string
    title: string,
}

export interface Chip {
    chipName: string,
    active: boolean
}

export interface Recentbookmark {
    id: number,
    category: string,
    title: string,
    date: string,
    img: string,
    link: string
}

export interface folderData {
    folder: boolean,
    category?: string,
    title: string,
    date?: string,
    img?: string,
    link?: string
}