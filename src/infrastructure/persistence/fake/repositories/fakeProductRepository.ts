import { Product } from "../../../../domain/entities/product";
import { ProductRepository } from "../../../../application/repository/productRepository";

export class FakeProductRepository implements ProductRepository{
    private productsRef = [];

    public async all(): Promise<Product[]>{

    }

    public async create(obj: Product): Promise<String> {

    }

    public async change(obj: Product, id: String): Promise<object> {
        
    }

    public async get(id: String): Promise<Product> {
        
    }


}