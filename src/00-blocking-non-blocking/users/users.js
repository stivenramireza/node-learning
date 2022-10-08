const getUserSync = (id) => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000) {
        // Waiting...
        // Fetching the database...
        // Getting info from facebook...
    }

    return {
        id,
        name: `User ${id}`,
    };
};

const getUserAsync = (id, callback) => {
    const user = {
        id,
        name: `User ${id}`,
    };

    setTimeout(() => {
        callback(user);
    });
};

module.exports = { getUserSync, getUserAsync };
