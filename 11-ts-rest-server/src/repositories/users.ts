import { v4 } from 'uuid';

import User from '../models/user';
import { UserData } from '../utils/types';

class UserRepository {
    public async getUsers(): Promise<User[]> {
        return await User.findAll({
            where: {
                status: true,
            },
        });
    }

    public async getUserById(id: string): Promise<User | null> {
        return await User.findOne({ where: { id, status: true } });
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        return await User.findOne({ where: { email } });
    }

    public async saveUser(user: UserData): Promise<User> {
        const savedUser = new User();
        savedUser.id = v4();
        savedUser.name = user.name;
        savedUser.email = user.email;

        await savedUser.save();

        return savedUser;
    }

    public async updateUser(id: string, data: UserData): Promise<User | null> {
        const updatedUser = await this.getUserById(id);
        await updatedUser?.update(data);
        return updatedUser;
    }

    public async deleteUser(id: string): Promise<User | null> {
        const deletedUser = await this.getUserById(id);
        await deletedUser?.update({ status: 0 });
        return deletedUser;
    }
}

export default new UserRepository();
