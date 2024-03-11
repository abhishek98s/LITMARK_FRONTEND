export interface Bookmark {
    id: number,
    title: string,
    img: string
    date: string,
    link: string
}

export interface bookmarkResponse {
    data: Bookmark[];
}

export interface BookmarkSearchObject {
    type: string,
    title: string,
    link: string,
}