import { Product } from "../../../../domain/entities/product";
import { ProductRepository } from "../../../../application/repository/productRepository";

export class FakeProductRepository implements ProductRepository{
    private productsRef: Product[] = [];

    constructor(){
        const product01 = new Product()

        Object.assign(product01, {
            name: 'teclado multilaser',
            description: 'teclado com teclas sileciosas',
            price: 80,
            company: 'Multilaser',
            link: 'http://teclado.com'
        })
    }

    public async all(): Promise<Product[]>{
        return this.productsRef
    }

    public async create(Product): Promise<String> {
        return Product

    }

    public async change(Product,String): Promise<object> {
        return Product
        
    }

    public async get(id): Promise<Product> {
        return this.productsRef[id]
    }


}
