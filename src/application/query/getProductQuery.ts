import { Product } from "../../domain/entities/product";
import { ProductRepository } from "../repository/productRepository";


export class GetProductQuery{
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository){
        this.productRepository = productRepository;
    }

    public async execute(request: string): Promise<Product>{
        const reqId = request;

        return this.productRepository.get(reqId);
    }
}