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
        throw new Error('...')
    }

    public async create(obj: Product): Promise<String> {
        throw new Error('...')

    }

    public async change(obj: Product, id: String): Promise<object> {
        throw new Error('...')
        
    }

    public async get(id: String): Promise<Product> {
        throw new Error('...')
    }


}