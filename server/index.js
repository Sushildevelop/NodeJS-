const http = require('http');

const PORT = 3031;
const HOSTNAME = 'localhost';

const server = http.createServer((request, response) => {
    // Home Page
    // About page
    // Contact page
    // Product page
    // rest...> error

    // home page
    if (request.url == '/') {
        response.statusCode = 200,
            response.setHeader('Content-type', 'text/plain'),
            response.end('Welcome to Node Js server by Sushil chaubey')

    }
    // about page
    else if (request.url == '/about') {
        response.statusCode = 200,
            response.setHeader('Content-Type', 'text/plain');
        response.end('About page!');
    }

    // contact page
    else if (request.url == '/contact') {
        response.statusCode = 200,
            response.setHeader('Content-Type', 'text/plain');
        response.end("Contact page!");

    }
    // product page
    else if (request.url == '/product') {

        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }


        const req = http.request(options, (apiRes) => {
            apiRes.on('data', (data) => {
                response.statusCode = 200,
                    response.setHeader('Content-Type', 'application/json');
                response.end(data.toString())
            })
        })
        req.on("error", () => {
            console.log(e);
        })
        req.end();



    }
    // other
    else {
        response.statusCode = 500,
            response.setHeader('Content-Type', 'text/plain'),
            response.end("Page not found!");
    }







    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/plain')
    // response.end("Node Server created by shushil chaubey and ruby chaubey")

    // error message
    // response.statusCode = 500;
    // response.setHeader('Content-Type', 'application/json');
    // response.end(JSON.stringify({ error: "Server Error" }));
});

server.listen(PORT, () => {
    console.log(`server running at ${HOSTNAME}:${PORT}`);
})