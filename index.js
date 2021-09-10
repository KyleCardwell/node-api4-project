require('dotenv').config()

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const PORT = process.env.PORT || 5000;

const server = express();

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('*', (req, res) => {
    res.json({
        message: "this is cool!"
    })
}) 

server.get('/', (req, res) => {
    res.send('<h1>Just making a basic node app</h1>')
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
}) 