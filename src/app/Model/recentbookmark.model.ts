export interface Recentbookmark {
    id: number,
    category: string,
    title: string,
    date: string,
    img: string,
    link: string
}

export interface RecentbookmarkResponse {
    data: Recentbookmark[]
}