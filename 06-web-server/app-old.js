const http = require('http');

http.createServer((req, res) => {
    console.log(req);

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const person = {
    //     id: 1,
    //     name: 'Stiven',
    // };

    res.write('Hello world!');
    // res.write('id, name\n');
    // res.write('1, Stiven\n');
    // res.write('2, Maria\n');
    // res.write('3, Fernando\n');

    res.end();
}).listen(8080);

console.log('Listening port', 8080);
