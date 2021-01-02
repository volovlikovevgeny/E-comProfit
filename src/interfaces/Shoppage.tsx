export interface ShopCollections {
    collections: [{
        id: number;
        items: [{
            id: number;
            name: string;
            imageUrl: string;
            price: number;
        }]
    }];
}

export interface PreviewCollections {
    title?: string;
    items: [{
        id: number;
        name: string;
        imageUrl: string;
        price: number;

    }]
}

export interface ItemCollection {
    name: string;
    imageUrl: string;
    price: number;
}