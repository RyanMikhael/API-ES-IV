import { User } from '../../domain/entities/user';
import {UserRepository} from '../repository/userRepository';

export class GetAllUsersQuery{
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    public async execute(): Promise<User[]>{
        return this.userRepository.all();
    }
}