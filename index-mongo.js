// Module http
var http = require('http');

// Server listening in 3000
http.createServer(function(req, res) {
    // write header
    // This function is executed every time someone reaches this end point.
    res.writeHead(200, {
        'Content-type': 'text-plain'
    })
    // response header. Message
    res.end('Hello World\n');

}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000');
