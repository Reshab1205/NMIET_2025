const express = require("express");
const dotenv = require('dotenv')
const app = express();
dotenv.configDotenv()

const userRoutes = require('./routes/userRoutes')
const productRoutes = require("./routes/productRoutes");
const { connectDb } = require("./middlewares/dB");

connectDb() // Third-Party Middleware
app.use(express.json()); // Built-In Middleware
app.use('/product',productRoutes) // Router-Level Middleware
app.use('/user', userRoutes)

app.get("/", (req, res) => {
  res.send("Hello NMIETians");
});

app.listen(8000, () => {
  console.log(`Server started on 8000`);
});
