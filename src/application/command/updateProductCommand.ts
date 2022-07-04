import { Product } from "../../domain/entities/product";
import { ProductRepository } from "../repository/productRepository";

interface UpdateProductRequestModel{
    id: string;
    name: string;
    description: string;
    price: Number;
    company: string;
    link: string;
}

export class UpdateProductCommand{
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository){
        this.productRepository = productRepository;
    }

    public async execute(request: UpdateProductRequestModel): Promise<object>{
        const modifiedProduct = request as Product;

        const reqId = modifiedProduct.id;

        const modInfo = this.productRepository.change(modifiedProduct, reqId);

        return modInfo;
    }
}