import { User } from "../../domain/entities/user";

export interface UserRepository{
    all(): Promise<User[]>
    create(obj: User): Promise<String>
    change(obj: User, id: string): Promise<object>
    get(id: string): Promise<User>
}