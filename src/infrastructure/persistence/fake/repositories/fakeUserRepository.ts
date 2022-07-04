import { User } from "../../../../domain/entities/user";
import { UserRepository } from "../../../../application/repository/userRepository";

export class fakeUserRepository implements UserRepository{

    private UserRef: User[] = []

    constructor(){
        const user01 = new User()

        Object.assign(user01, {
            id: '01',
            name: 'Diego',
            email: 'diego01@gmail.com'
        });

        this.UserRef.push(user01)
    }


    public async all(): Promise<User[]>{
        
        throw new Error('...')

    }

    public async create(obj: User): Promise<String>{

        throw new Error('...')
        
    }

    public async change(obj: User, id: string): Promise<Object>{

        throw new Error('...')
        
    }

    public async get(id: string): Promise<User>{
        
        throw new Error('...')
        
    }
}