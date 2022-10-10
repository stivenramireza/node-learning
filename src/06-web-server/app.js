const express = require('express');

const app = express();
const port = 8080;

// Serve static content
app.use(express.static('public'));

app.get('/hello-world', (req, res) => {
    res.send('Hello World in its respective route');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
