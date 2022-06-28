import { Product } from "../../domain/entities/product";
import {ProductRepository} from "../repository/productRepository";

export class GetAllProductsQuery{
    private productRepository: ProductRepository;

    public async execute(): Promise<Product[]>{
        return this.productRepository.all();
    }
}