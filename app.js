const {add, minus} = require('./module');

// console.log(add());
// console.log(minus());

// const fs = require('fs');
// const http = require('http');

// console.log(__filename);
// console.log(__dirname);

// ///

// fs.readFile('module.js', (err, data) =>{
//     if (err) return;

//     console.log(data);
// });

// const server = http.createServer((req, res) =>{
//     res.statusCode = 200;
//     res.end('<h1>Hello World!!</h1>');
// });

// server.listen(3000, 'localhost', () => {
//     console.log('Server is working!');

// });
const exspress = require('express');
const bodyparser = require('body-parser');

const app = exspress();

app.use(bodyparser.urlencoded({extended: false}));

app.use(bodyparser.json());

app.use(exspress.static('public'));

app.post('/comments', (req, res, next) => {
    res.writeHead(200, {'Content-Type': 'applicatoin/json'});
    res.end(JSON.stringify(req.body, null, 2));
});

// app.get('/users/:user_name', (req, res, next) => {
//     res.status(200).send(`Hello,  ${req.params.user_name}`);
// });

// app.get('/', (req, res, next) => {
//     res.writeHead(200, {});
//     next('Very bad error!');
// });

// app.use('/', (err, req, res, next) => {
//     res.status(500).end(`Error: ${err}`);
// });


app.listen(4000);