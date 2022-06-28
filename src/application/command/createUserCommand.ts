import { User } from "../../domain/entities/user";
import { UserRepository } from "../repository/userRepository";

interface createUserRequestModel{
    name: string;
    email: string;
}

export class CreateUserCommand{
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    public async execute(request: createUserRequestModel): Promise<String> {
        const newUser = request as User;

        const id = this.userRepository.create(newUser);
    
        return id;
    }
}