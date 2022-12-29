let user = null;
let socket = null;

const url = window.location.hostname.includes('localhost')
    ? 'http://localhost:3000/api/v1/auth/token/validation'
    : 'https://coffee-shop.up.railway.app/api/v1/auth/token/validation';

// HTML references
const txtUid = document.querySelector('#txtUid');
const txtMessage = document.querySelector('#txtMessage');
const ulUsers = document.querySelector('#ulUsers');
const ulMessages = document.querySelector('#ulMessages');
const btnLogout = document.querySelector('#btnLogout');

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
    socket = io({
        extraHeaders: {
            Authorization: localStorage.getItem('token'),
        },
    });

    socket.on('connect', () => {
        console.log('Sockets online');
    });

    socket.on('disconnect', () => {
        console.log('Sockets offline');
    });

    socket.on('receive-messages', showMessages);

    socket.on('active-users', showUsers);

    socket.on('private-message', (payload) => {
        console.log('Private:', payload);
    });
};

const showUsers = (users = []) => {
    let userHTML = '';

    users.forEach(({ name, uid }) => {
        userHTML += `
            <li>
                <p>
                    <h5 class="text-success">${name}</h5>
                    <span class="fs-6 text-muted">${uid}</span>
                </p>
            </li>
        `;
    });

    ulUsers.innerHTML = userHTML;
};

const showMessages = (messages = []) => {
    let messagesHTML = '';

    messages.forEach(({ name, message }) => {
        messagesHTML += `
            <li>
                <p>
                    <span class="text-primary">${name}:</span>
                    <span>${message}</span>
                </p>
            </li>
        `;
    });

    ulMessages.innerHTML = messagesHTML;
};

txtMessage.addEventListener('keyup', ({ keyCode }) => {
    if (keyCode !== 13) return;

    const uid = txtUid.value;
    const message = txtMessage.value;
    if (message.length === 0) return;

    socket.emit('send-message', { uid, message });
    txtMessage.value = '';
});

const main = async () => {
    await validateJWT();
};

main();
