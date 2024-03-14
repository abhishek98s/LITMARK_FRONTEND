export interface SidebarFolder {
    id: number,
    img?: string
    name: string,
    image_id?: number,
    folder_id: number
}

export interface SidebarFolderApiBody {
    name: string,
    folder_id: number | null
}

export interface SidebarFolderArrayResponse {
    data: SidebarFolder[];
}

export interface SidebarFolderResponse {
    data: SidebarFolder;
}

export interface SidebarFolderSearchObject {
    id: number,
    title: string,
}