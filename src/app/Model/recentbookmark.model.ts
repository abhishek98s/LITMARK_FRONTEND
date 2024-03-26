export interface Recentbookmark {
    id: number,
    category: string,
    title: string,
    click_date: string,
    img: string,
    url: string
}

export interface RecentbookmarkResponse {
    data: Recentbookmark[]
}