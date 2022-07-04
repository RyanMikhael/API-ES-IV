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
        
        return this.UserRef

    }

    public async create(User): Promise<String>{

        return User
        
    }

    public async change(User, string): Promise<Object>{

        return User
        
    }

    public async get(id): Promise<User>{
        
        return this.UserRef[id]
        
    }
}
