import User from '../models/user';
import UserRepository from '../repositories/users';
import { UserData } from '../utils/types';

class UserService {
    public async getUsers(): Promise<User[]> {
        return await UserRepository.getUsers();
    }

    public async getUserById(id: string): Promise<User | null> {
        return await UserRepository.getUserById(id);
    }

    public async saveUser(user: UserData): Promise<User> {
        return await UserRepository.saveUser(user);
    }

    public async updateUser(id: string, data: UserData): Promise<User | null> {
        const user = {
            name: data.name,
            email: data.email,
        };
        return await UserRepository.updateUser(id, user);
    }

    public async deleteUser(id: string): Promise<User | null> {
        return await UserRepository.deleteUser(id);
    }
}

export default new UserService();
