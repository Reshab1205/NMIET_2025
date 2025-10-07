const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()



router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/update/:id", userController.updateUser);
router.post("/delete/:id", userController.hardDelete);
router.get('/users', userController.getUsers)

module.exports = router


// Private 
// Public
// Protected