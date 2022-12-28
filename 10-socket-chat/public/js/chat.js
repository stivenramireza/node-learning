let user = null;
let socket = null;

const url = window.location.hostname.includes('localhost')
    ? 'http://localhost:3000/api/v1/auth/token/validation'
    : 'https://coffee-shop.up.railway.app/api/v1/auth/token/validation';

const validateJWT = async () => {
    const token = localStorage.getItem('token');

    const response = await fetch(url, { method: 'POST', headers: { Authorization: token } });

    if (response.status !== 200) {
        window.location = '401.html';
        throw new Error('There is not token in the server');
    }

    const { user: userDB, token: tokenDB } = await response.json();

    localStorage.setItem('token', tokenDB);
    user = userDB;
    document.title = user.name;

    await connectSocket();
};

const connectSocket = async () => {
    const socket = io({
        extraHeaders: {
            Authorization: localStorage.getItem('token'),
        },
    });
};

const main = async () => {
    await validateJWT();
};

main();
