const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const carRoutes = require("./routes/carRoutes");

dotenv.config();

const app = express();

app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/cars', carRoutes);

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});