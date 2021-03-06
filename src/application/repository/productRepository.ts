import { Product } from "../../domain/entities/product";

interface ProductRepository{
    all(): Promise<Product[]>
    create(obj: Product): Promise<String>
    change(obj: Product, id: String): Promise<object>
    get(id: String): Promise<Product>;
}

export {ProductRepository};