const express = require('express')
const user = require('../models/userSchema')


const register = async (req,res) => {
    try {
        if(!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({message: 'Empty Data'})
        }
        const {full_name,email,password,mobile_number,isUser,age} = req.body
        if(!full_name || !email || !password || !mobile_number || !isUser || !age) {
            return res.status(400).json({message: 'Provide Details To Register'})
        }
        const data = {full_name,email,password,mobile_number,isUser,age}
        const createUser = await user.create(data)
        return res.status(201).json({message: "User Registered Sucessfully", data: {id:createUser._id, email:createUser.email}})
    }
    catch (err) {
        return res.status(500).json({message: 'Internal Server Error', error:err})
    }
}

const login = () => {
    

}



module.exports = {register, login}