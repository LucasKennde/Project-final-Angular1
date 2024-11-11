import { ICategory } from "./ICategory";

export interface IGame {
    id: number,
    name: string,
    title: string,
    description: string,
    image: string,
    category: ICategory,
    price: number,
    stock: number
}