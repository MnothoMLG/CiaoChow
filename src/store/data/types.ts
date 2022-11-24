
export interface IEntry<T>  {
    id: number;
    attributes: T
}

export interface Chow  {
    Title:string;
    Description:string;
    createdAt:Date;
    updatedAt:Date;
    publishedAt:Date;
    image: {
        data: IEntry<ImageInterface>[]
    }
}

export interface ImageInterface {
    name: string;
    alternativeText: string;
    caption: string;
    width: string;
    height: string;
    hash: string;
    ext: string;
    mime: string;
    size: string;
    url: string;
    previewUrl: string;
    provider: string;
    formats: {[key: string]: Object} ; //can't ref self
    provider_metadata: string;
    createdAt: Date;
    updatedAt: Date;
}

