const express = require("express");
const mongoose = require('mongoose');
const userController = require('./controllers/userController')


const app = express();

// Mongodb check 5 parameters to connect any external resources
//Regex



// middlewares

app.use(express.json());

mongoose.connect(url)
.then(() => console.log(`Db Connected`))
.catch((err) => console.log(`Db Error`, err))

//encrypted in string format
// body ke through data api request se aata hai usse payload kehte hai

app.get("/", (req, res) => {
  res.send("Hello NMIETians");
});

app.get("/home", (req, res) => {
  res.send("Hello I am Homepage");
});

app.get("/about", (req, res) => {
  res.send("Hello I am About Us Page");
});

app.get("/nmiet", (req, res) => {
  res.send("Hello from NMIET");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.post("/register", userController.register);
app.post("/login", userController.login);

app.listen(8000, () => {
  console.log(`Server started on 8000`);
});
