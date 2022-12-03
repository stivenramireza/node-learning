const { response } = require('express');

const badRequestResponse = (res = response, message) => {
    return res.status(400).json({ message });
};

const unauthorizedResponse = (res = response, message) => {
    return res.status(401).json({ message });
};

const forbiddenResponse = (res = response, message) => {
    return res.status(403).json({ message });
};

const notFoundResponse = (res = response, message) => {
    return res.status(404).json({ message });
};

const conflictResponse = (res = response, message) => {
    return res.status(409).json({ message });
};

const internalResponse = (res = response) => {
    return res.status(500).json({ message: 'Internal server error' });
};

module.exports = {
    badRequestResponse,
    unauthorizedResponse,
    forbiddenResponse,
    notFoundResponse,
    conflictResponse,
    internalResponse,
};
