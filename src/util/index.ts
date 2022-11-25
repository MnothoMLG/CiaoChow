import { IEntry, ImageInterface } from '../store/data/types';
import {BASE_URL} from '../config/env.json';

export const generateNumber = (len: number) => Math.floor(Math.random() * len);

export const getFullURL = (path: string) => `${BASE_URL}${path}`

export const getImageUrls = (data: IEntry<ImageInterface>[]) => {

    console.log({data})
    
    return data?.length ?
  [...(data).map((entry: IEntry<ImageInterface>) => getFullURL(entry.attributes.url))] : []}