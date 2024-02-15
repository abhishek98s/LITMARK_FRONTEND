export interface Chip {
    id: number,
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

export interface Folder {
    id: number,
    img?: string
    title: string,
}
export interface Bookmark {
    id: number,
    title: string,
    img: string
    date: string,
    link: string
}

export interface State {
    sidebar: Boolean,
    folderInputbox: Boolean,
    bookmarkInputbox: Boolean
    sidebarFolderkInputbox: Boolean,
}

export interface RegisterUser {
    name: string,
    email: string,
    password: string
}

export interface LoginUser {
    email: string,
    password: string
}

export interface BookmarkSearchObject {
    type: string,
    title: string,
    link: string,
}

export interface FolderSearchObject {
    id: number,
    title: string,
}

export interface SearchText {
    searchText: string,
    inputId: string,
}