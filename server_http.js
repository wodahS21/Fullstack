const http = require('http');
const hostname = '192.168.76.93';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader ('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');
});

server.listen(port, hostname, ()=>{

    console.log('El servidor esta corriendo en http://${hostname}:${port}/');
})