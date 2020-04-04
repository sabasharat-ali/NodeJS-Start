const http = require ('http')
const port = 3001

const requestHandler = (req, res) => {
    if (req.url.toLowerCase() === '/login') {
        res.end('You need to login first mate')
    }
    else if (req.url.toLowerCase() === '/signup') {
        res.end('You have to make an ID first mate')
    }
    else {
        res.end('404 PAGE NOT FOUND')
    }
}

const server = http.createServer(requestHandler);

server.listen (port, () => {
    console.log('Your SERVER is running on port 3001')
})