export interface Chip {
    id: number,
    chipName: string,
    active: boolean
}

export interface ChipsResponse {
    data: Chip[]
}