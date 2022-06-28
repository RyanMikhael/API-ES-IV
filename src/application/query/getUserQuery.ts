import { User } from '../../domain/entities/user';
import {UserRepository} from '../repository/userRepository';

export class GetUserQuery{
    private userRepository: UserRepository;

    public async execute(request: string): Promise<User>{
        const reqId = request;

        return this.userRepository.get(reqId);
    }
}