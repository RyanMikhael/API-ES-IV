import { User } from "../../domain/entities/user";
import { UserRepository } from "../repository/userRepository";

interface UpdateUserRequestModel{
    name: string;
    email: string;
}

export class UpdateUserCommand{
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    public async execute(request: UpdateUserRequestModel){
        const modifiedUser = request as User;
        
        const reqId = modifiedUser.id;

        const modInfo = this.userRepository.change(modifiedUser, reqId);

        return modInfo;
    }
}