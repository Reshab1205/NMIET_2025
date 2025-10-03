const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv')


const app = express();

dotenv.configDotenv()


const userController = require('./controllers/userController')



const url = process.env.MONGODB_URL
// middlewares

app.use(express.json());

// Mongodb check 5 parameters to connect any external resources
//Regex
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
app.post("/update/:id", userController.updateUser);
app.post("/delete/:id", userController.hardDelete);



app.listen(8000, () => {
  console.log(`Server started on 8000`);
});
