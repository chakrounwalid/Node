var http = require('http');

const server = http.createServer(function (request, response) {
    response.write('<h1>Hello Node!!!!</h1>\n')
    response.end()})
    
    server.listen(3000,console.log('server run in port 3000'))
    