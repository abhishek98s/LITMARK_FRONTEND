export interface Recentbookmark {
    id: number,
    category: string,
    title: string,
    date: string,
    image_id: number,
    img_url: string,
    url: string
}

export interface RecentbookmarkResponse {
    data: Recentbookmark[]
}