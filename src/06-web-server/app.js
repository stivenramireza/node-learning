const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/hello-world', (req, res) => {
    res.send('Hello World in its respective route');
});

app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
