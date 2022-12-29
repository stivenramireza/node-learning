import UserRepository from '../repositories/users';

export const existsUserById = async (id: string) => {
    if (id) {
        const user = await UserRepository.getUserById(id);
        if (!user) throw new Error('User does not exist');
    }
};

export const existsEmail = async (email: string) => {
    if (email) {
        const user = await UserRepository.getUserByEmail(email);
        if (user) throw new Error('Email is already registered');
    }
};
