import { IProduct } from "./IProduct";

export interface IOrder {
    id: number,
    status: string,
    date: Date,
    products: IProduct[]
}
