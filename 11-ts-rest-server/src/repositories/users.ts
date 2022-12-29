import User from '../models/user';

class UserRepository {
    public async getUsers() {
        return await User.findAll({
            where: {
                status: true,
            },
        });
    }

    public async getUserById(id: string) {
        return await User.findByPk(id);
    }
}

export default new UserRepository();
