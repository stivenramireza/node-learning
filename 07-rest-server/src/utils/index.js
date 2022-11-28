const exceptions = require('./exceptions');
const files = require('./files');
const responses = require('./responses');
const secrets = require('./secrets');
const validators = require('./validators');

module.exports = {
    ...exceptions,
    ...files,
    ...responses,
    ...secrets,
    ...validators,
};
