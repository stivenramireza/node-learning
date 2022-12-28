// HTML references
const form = document.querySelector('form');

const url = window.location.hostname.includes('localhost')
    ? 'http://localhost:3000/api/v1/auth/login'
    : 'https://coffee-shop.up.railway.app/api/v1/auth/login';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {};

    for (let el of form.elements) {
        if (el.name.length > 0) {
            formData[el.name] = el.value;
        }
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then(({ message, accessToken: token }) => {
            if (message) return console.error(message);
            localStorage.setItem('token', token);
            window.location = 'chat.html';
        })
        .catch((err) => {
            console.error(err);
        });
});

function handleCredentialResponse(response) {
    const body = {
        idToken: response.credential,
    };

    fetch(`${url}/google`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then(({ email, accessToken: token }) => {
            console.log(token);
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);
            window.location = 'chat.html';
        })
        .catch(console.warn);
}

const button = document.getElementById('google_logout');
button.onclick = () => {
    const googleAccount = google.accounts.id;
    googleAccount.disableAutoSelect();

    const email = localStorage.getItem('email');
    googleAccount.revoke(email, () => {
        localStorage.clear();
        location.reload();
    });
};
