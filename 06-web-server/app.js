const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => {});

// Serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Stiven Ramírez Arango',
        title: 'Handlebars',
    });
});

app.get('/hello-world', (req, res) => {
    res.send('Hello World in its respective route');
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Stiven Ramírez Arango',
        title: 'Handlebars',
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Stiven Ramírez Arango',
        title: 'Handlebars',
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/back/404.html');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
