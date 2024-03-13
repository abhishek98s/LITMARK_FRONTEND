export interface Bookmark {
    id: number,
    title: string,
    image_id: number,
    image_url?:string,
    date: string,
    url: string
}

export interface bookmarkArrayResponse {
    data: Bookmark[];
}

export interface bookmarkResponse {
    data: Bookmark;
}

export interface bookmarkApiBody {
    url: string,
    folder_id: number,
}

export interface BookmarkSearchObject {
    type: string,
    title: string,
    link: string,
}