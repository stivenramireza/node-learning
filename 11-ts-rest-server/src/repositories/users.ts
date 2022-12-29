import User from '../models/user';

export const findUsers = async () => {
    return await User.findAll({
        where: {
            status: true,
        },
    });
};
