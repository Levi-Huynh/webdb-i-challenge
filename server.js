const express = require('express');
const accountsRouter = require('./data/accounts-router.js');


const server = express();
server.use(express.json());



server.use('/api/accounts', accountsRouter)



server.get('/', (req, res) => {
    res.send(`<h2>Lets modify a SQL3 database!</h2>`)
})


// your code here

module.exports = server;