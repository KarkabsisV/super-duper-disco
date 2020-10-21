const {add, minus} = require('./module');

console.log(add());
console.log(minus());

const fs = require('fs');
const http = require('http');

console.log(__filename);
console.log(__dirname);

///

fs.readFile('module.js', (err, data) =>{
    if (err) return;

    console.log(data);
});

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.end('<h1>Hello World!!</h1>');
});

server.listen(3000, 'localhost', () => {
    console.log('Server is working!');

});