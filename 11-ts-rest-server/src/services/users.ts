import UserRepository from '../repositories/users';

class UserService {
    public async getUsers() {
        return await UserRepository.getUsers();
    }

    public async getUserById(id: string) {
        return await UserRepository.getUserById(id);
    }
}

export default new UserService();
