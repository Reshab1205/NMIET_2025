const express = require('express')
const user = require('../models/userSchema')


const register = async (req,res) => {
    const inputData = req.body;
    if(!inputData) {
        res.status(402).json({message: "Provide User Details"})
    }
    const data = await user.create(inputData)
    console.log(data)
    res.status(200).json({message: "User registered Successfully", user_data:data})

}

const login = () => {

}



module.exports = {register, login}
