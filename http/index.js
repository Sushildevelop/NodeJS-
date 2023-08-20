const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<h1>Hello , Node.js</h1>');
    } else if (req.url == '/sushil') {
        res.write('Sushil has created a first server')
    }
    res.end();
});

server.listen(5000);
console.log("The HTTP server is running on port 5000");