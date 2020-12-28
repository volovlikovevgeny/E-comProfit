export type DirectoryType = {
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