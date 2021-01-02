export interface DirectoryType {
    sections: ({
        title: string;
        imageUrl: string;
        id: number;
        size?: string
    } | {
        title: string;
        imageUrl: string;
        size?: string;
        id: number;
    })[]
}

export interface MenuItems {
    id: number;
    size: string | undefined;
    title: string;
    imageUrl: string;
}