import { Product } from "./Product";

export class Data {
    private productsData:Array<Product>;
    constructor(){
        this.productsData = new Array<Product>(
            new Product(1,"Laptop",600),
            new Product(2,"Phone",360),
            new Product(3,"TV",500)
        );
    }
    getProductData():Array<Product>{
        return this.productsData;
    }
}