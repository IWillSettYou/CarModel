const express = require('express')
var Router = express.Router()

const{
    getAllCars,
    createCar,
    deleteCar
} = require('../controllers/carController.js')

Router.get('/', getAllCars);

Router.post('/', createCar);

Router.delete('/:carId', deleteCar);

module.exports = Router