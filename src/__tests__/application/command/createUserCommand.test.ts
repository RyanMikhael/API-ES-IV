import { User } from "../../../domain/entities/user";
import { CreateUserCommand } from "../../../application/command/createUserCommand";
import { fakeUserRepository } from "../../../infrastructure/persistence/fake/repositories/fakeUserRepository";


const userRepository =  new fakeUserRepository()
const createUserCommand = new CreateUserCommand(userRepository)

describe('Create user', () => {
    it('Criando user 01', async () => {
        const user: User = {
            id: '01',
            name: 'Diego',
            email: 'diego01@gmail.com'
        }

        const response = await createUserCommand.execute(user)

        expect(response).toEqual(user)
    })
})