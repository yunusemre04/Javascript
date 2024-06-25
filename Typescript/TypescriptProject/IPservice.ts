import { Product } from "./Product";


export interface IPService{
    getByID(id:number):Product;
    getProducts():Array<Product>;
    saveProduct(product:Product):void;
    deleteProduct(product:Product):void;
}