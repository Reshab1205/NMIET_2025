const jwt = require("jsonwebtoken");
const user = require("../models/userSchema");

const createToken = (userId, email) => {
  return jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
};

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "UnAuthorized Access" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No Token" });


    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    const getUser = await user.findById(decoded.id).select("-password");
    console.log('getUser', getUser)
    if (!getUser) return res.status(401).json({ message: "User not found" });
    req.user = user;
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};

module.exports = { createToken, verifyToken };
