const express = require('express')
const server = express()
const CarRouter = require('../cars/CarsRouter')

server.use(express.json())
server.use('/api/cars', CarRouter)

module.exports = server