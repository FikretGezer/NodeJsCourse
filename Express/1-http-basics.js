const { readFileSync } = require('fs');
const http = require('http');

const homePage = readFileSync('./index.html');
const stylePage = readFileSync('./style.css');

const server = http.createServer((req, res) => {
    console.log('user hit the server');
    const url = req.url;
    if(url === "/"){
        res.writeHead(200, {'content-type':'text-html'});
        res.write(homePage);
        res.end();
    }
    else if(url === "/about")
    {
        res.writeHead(200, {'content-type':'text-html'});
        res.write('<h1>Welcome About</h1>');
        res.end();
    }
    else if(url == "/style.css")
    {
        res.writeHead(200, {'content-type':'text/css'});
        res.write(stylePage);
        res.end();
    }
    else
    {
        res.writeHead(404, {'content-type':'text/html'});
        res.write('<h1>Page not found...</h1>');
        res.end();
    }
});
server.listen(5000);