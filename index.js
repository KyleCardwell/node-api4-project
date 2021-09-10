require('dotenv').config()

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('*', (req, res) => {
    res.json({
        message: "this is cool!"
    })
})

server.listen(5000, () => {
    console.log(`listening on port ${5000}`)
})