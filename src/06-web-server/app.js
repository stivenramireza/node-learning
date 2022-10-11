const express = require('express');

const app = express();
const port = 8080;

// Serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/hello-world', (req, res) => {
    res.send('Hello World in its respective route');
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/back/404.html');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
