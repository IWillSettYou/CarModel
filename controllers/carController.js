const prisma = require('@prisma/client');
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

const getAllCars = async (req, res) => {
  try {
    const cars = await prismaClient.car.findMany();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'GET method failed in runtime' });
  }
};

const createCar = async (req, res) => {
  const { model, year, manufacturer } = req.body;
  try {
    const newCar = await prismaClient.car.create({
      data: {
        Model: model,
        Year: year,
        Manufacturer: manufacturer,
      },
    });
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: 'CREATE method failed in runtime' });
  }
};

const deleteCar = async (req, res) => {
  const { carId } = req.params;
  try {
    const car = await prismaClient.car.delete({
      where: {
        CarId: parseInt(carId),
      },
    });
    res.json({ message: 'Car deleted', car });
  } catch (error) {
    res.status(500).json({ error: 'DELETE method failed in runtime' });
  }
};

module.exports = {
  getAllCars,
  createCar,
  deleteCar,
};
