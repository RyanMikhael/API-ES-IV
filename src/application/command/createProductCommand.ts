import { Product } from "../../domain/entities/product";
import { ProductRepository } from "../repository/productRepository";

interface CreateProductRequestModel{
     name: string;
     description: string;
     price: Number;
     company: string;
     link: string;
}

export class CreateProductCommand{
     private productRepository: ProductRepository;

     constructor(productRepository: ProductRepository){
          this.productRepository = productRepository;
     }

     public async execute(request: CreateProductRequestModel): Promise<String>{
          const newProduct = request as Product;

          const id = this.productRepository.create(newProduct);

          return id;
     }
}