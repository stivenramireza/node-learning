import { findUsers } from '../repositories/users';

export const searchUsers = async () => {
    return await findUsers();
};
