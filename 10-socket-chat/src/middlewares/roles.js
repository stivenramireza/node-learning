const { request, response } = require('express');

const ADMIN_ROLE = 'ADMIN';

const isAdminRole = (req = request, res = response, next) => {
    if (!req.user) return res.status(500).json({ message: 'Internal server error' });

    const { name, role } = req.user;

    if (role !== ADMIN_ROLE) {
        return res.status(403).json({
            message: `${name} is not admin`,
        });
    }

    next();
};

const hasRole = (...roles) => {
    return (req = request, res = response, next) => {
        if (!req.user) return res.status(500).json({ message: 'Internal server error' });

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: `You must have one of the following roles: ${roles}`,
            });
        }
        next();
    };
};

module.exports = {
    isAdminRole,
    hasRole,
};
