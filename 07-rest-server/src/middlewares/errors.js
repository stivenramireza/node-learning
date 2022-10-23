const { BadRequest, Unauthorized, Forbidden, NotFound, Conflict } = require('../utils/exceptions');
const {
    badRequestResponse,
    unauthorizedResponse,
    forbiddenResponse,
    notFoundResponse,
    conflictResponse,
    internalResponse,
} = require('../utils/responses');

const errorLogger = (err, req, res, next) => {
    console.error(err);
    next(err);
};

const errorResponse = (err, req, res, next) => {
    if (err instanceof BadRequest) return badRequestResponse(res, err.message);
    if (err instanceof Unauthorized) return unauthorizedResponse(res, err.message);
    if (err instanceof Forbidden) return forbiddenResponse(res, err.message);
    if (err instanceof NotFound) return notFoundResponse(res, err.message);
    if (err instanceof Conflict) return conflictResponse(res, err.message);
    next(err);
};

const errorInternal = (req, res, next) => {
    return internalResponse(res);
};

module.exports = {
    errorLogger,
    errorResponse,
    errorInternal,
};
