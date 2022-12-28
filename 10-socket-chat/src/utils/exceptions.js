class BadRequest extends Error {}

class Unauthorized extends Error {}

class Forbidden extends Error {}

class NotFound extends Error {}

class Conflict extends Error {}

module.exports = {
    BadRequest,
    Unauthorized,
    Forbidden,
    NotFound,
    Conflict,
};
