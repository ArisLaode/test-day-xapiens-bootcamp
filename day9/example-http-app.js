const http = require('http')

const host = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    if(req.url === '/about') {
        return res.end(JSON.stringify({
            test : "about"
        }))
    }
    res.end(JSON.stringify({
        test : "test"
    }))
})

server.listen(port, host, () => {
    console.log(`run in localhost:5000`)
})