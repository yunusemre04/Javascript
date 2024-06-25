import {ProductService} from './ProductService';
import { Product } from './Product';

let products=new ProductService();
console.log(products.getProducts());

let newProduct= new Product(3,"Console",550);
products.saveProduct(newProduct);
console.log(products.getProducts());

products.deleteProduct(newProduct);
console.log(products.getProducts());