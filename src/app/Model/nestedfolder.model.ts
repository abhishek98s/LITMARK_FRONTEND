
export interface Folder {
    id: number,
    name: string,
    image_id: number,
    folder_id: number,
}
export interface NestedFolderArrayResponse {
    data: Folder[];
}
export interface NestedFolderResponse {
    data: Folder;
}
export interface FolderApiBody {
    name: string,
    folder_id: number
}


export interface State {
    sidebar: Boolean,
    loading: Boolean,
    sub_loading: Boolean,
    folderInputbox: Boolean,
    bookmarkInputbox: Boolean
    sidebarFolderkInputbox: Boolean,
}

export interface SearchText {
    searchText: string,
    inputId: string,
}