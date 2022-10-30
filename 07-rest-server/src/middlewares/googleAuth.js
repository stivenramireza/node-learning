const { OAuth2Client } = require('google-auth-library');

const { GOGGLE_CLIENT_ID } = require('../utils/secrets');

const client = new OAuth2Client(GOGGLE_CLIENT_ID);

const verifyGoogleToken = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: GOGGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    return { name: payload.name, picture: payload.picture, email: payload.email };
};

module.exports = {
    verifyGoogleToken,
};
