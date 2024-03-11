
export interface Folder {
    id: number,
    img?: string
    title: string,
}
export interface NestedFolderResponse {
    data: Folder[];
}



export interface State {
    sidebar: Boolean,
    folderInputbox: Boolean,
    bookmarkInputbox: Boolean
    sidebarFolderkInputbox: Boolean,
}

export interface SearchText {
    searchText: string,
    inputId: string,
}