import {IPService} from './IPservice';
import {Product} from './Product';
import {Data} from './Data';

export class ProductService implements IPService{
    private dataSrc: Data;
    private products:Product[];

    constructor(){
        this.dataSrc=new Data();
        this.products= new Array<Product>();
        this.dataSrc.getProductData().forEach(element => {
            this.products.push(element);
        });
    }

    getByID(id: number): Product {
        return this.products.filter(e=>e.id === id)[0];
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id==0|| product.id==null){
            product.id=this.createID();
            this.products.push(product);
        }else{
            let index;
            for(let i=0;i<this.products.length;i++){
                if(this.products[i].id==product.id){
                    index=i;
                }
            }
            this.products.splice(index,1,product);
        }
        
    }
    deleteProduct(product: Product): void {
        let index=this.products.indexOf(product);
        if(index>0){
            this.products.splice(index,1);
        }
     
    }
    createID(){
        let id=1;
        while(this.getByID(id)!=null){
            id++;
        }
        return id;
    }
}
