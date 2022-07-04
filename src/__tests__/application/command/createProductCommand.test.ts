import { Product } from "../../../domain/entities/product";
import { CreateProductCommand } from "../../../application/command/createProductCommand";
import { FakeProductRepository } from "../../../infrastructure/persistence/fake/repositories/fakeProductRepository";

const productRepository = new FakeProductRepository()
const createProductCommand = new CreateProductCommand(productRepository)

describe('Create product', () => {
    it('Criando product 01', async () => {
        const product: Product = {
            name: 'teclado multilaser',
            description: 'teclado com teclas sileciosas',
            price: 80,
            company: 'Multilaser',
            link: 'http://teclado.com'

        }
        const response = await createProductCommand.execute(product)

        expect(response).toEqual(product)
    })
})