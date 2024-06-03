// create http server and mount the app
const http = require('http');
const app = require('./src/config/express.config');
const server = http.createServer();

server.listen(3000, () => {
    console.log('server is running on port 3000');
}
);