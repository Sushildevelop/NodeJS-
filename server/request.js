const http = require('http');


const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
}


const req = http.request(options, (apiRes) => {
    apiRes.on('data', (data) => {
        console.log(data.toString());
    })
})
req.on("error", () => {
    console.log(e);
})
req.end();