// create http server and mount the app

const http = require('http');
const app = require('./src/config/express.config');
const server = http.createServer(app);
const cors = require('cors');



// assigning port values
const port = process.env.PORT || 3000;
server.listen(port, (error) => {
    if (error) {
        console.log('Error starting server');
    } else {
        console.log('Server started on http://localhost:3000');
        console.log('Press Ctrl+C to stop');
    }
}
);