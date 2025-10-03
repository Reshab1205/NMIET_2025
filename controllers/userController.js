const express = require("express");
const user = require("../models/userSchema");

const register = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Empty Data" });
    }
    const { full_name, email, password, mobile_number, isUser, age } = req.body;
    if (
      !full_name ||
      !email ||
      !password ||
      !mobile_number ||
      !isUser ||
      !age
    ) {
      return res.status(400).json({ message: "Provide Details To Register" });
    }
    const checkEmail = await user.findOne({ email: email });
    const checkMobile = await user.findOne({ mobile_number: mobile_number });
    if (checkEmail && checkMobile) {
      return res.status(409).json({ message: "User Already exists" });
    }
    console.log(checkEmail, checkMobile);
    const data = { full_name, email, password, mobile_number, isUser, age };
    const createUser = await user.create(data);
    return res
      .status(201)
      .json({
        message: "User Registered Sucessfully",
        data: { id: createUser._id, email: createUser.email },
      });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};

const login = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Empty Data" });
    }
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Provide Details To Login" });
    }
    const checkEmail = await user
      .findOne({ email: email, isUser: true })
      .select("+password");
    console.log(checkEmail);
    if (!checkEmail || !(checkEmail.password === password)) {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Invalid Credentials" });
    }
    return res
      .status(200)
      .json({ message: "Logged In Sucessfully", data: checkEmail._id });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};

const updateUser = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Empty Data" });
    }
    const updatedData = req.body;
    const data = await user.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res
        .status(404)
        .json({ error: "Not Found", message: "User not Found" });
    }
    return res.status(202).json({ message: "Updated sucessfully", data: data });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};

const hardDelete = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Empty Data" });
    }
    await user.findByIdAndDelete(id);
    return res.status(202).json({ message: "Deleted sucessfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};


const getUsers = async (req,res) => {
    try {
        const getUsers = await user.find()
        return res.status(200).json({message: "List of users", data:getUsers})

    } catch (err) {
       return res
      .status(500)
      .json({ message: "Internal Server Error", error: err }); 
    }
}

module.exports = { register, login, updateUser, hardDelete,getUsers };
