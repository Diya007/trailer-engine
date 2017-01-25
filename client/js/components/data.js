server/index.js
const babel = require('babel-polyfill');
//const express = require('express');
const app = require('./routers');
const morgan = require('morgan');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

//const app = express();
app.use(morgan('common'));

//app.use(express.static(process.env.CLIENT_PATH));

//require('./routers.js')(app); 


function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}