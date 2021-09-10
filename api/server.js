require('dotenv').config()

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const users = [
    {
        id: 1,
        username: "johnDoe",
        password: "bond007"
    },
    {
        id: 2,
        username: "janeDoe",
        password: "bristow"
    },
]

const newUser = {
    id: 3,
    username: "newKid",
    password: "ontheblock"
}

const server = express();

server.use(express.json())
server.use(cors())
server.use(helmet())


server.get('/api/users', (req, res) => {
    res.json(users)
})

server.post('/api/register', (req, res) => {
    res.json(req.body)
    console.log("hello")
})

server.post('/api/login', (req, res) => {
    if(req.body.username === "newKid" && req.body.password === "ontheblock") {

        res.json({messsage: "Welcome! Come on in!"})

    } else {
        res.json({message: "sorry, try again"})
    }
})

server.use('*', (req, res) => {
    res.json({
        message: "this is cool!"
    })
})

module.exports = server