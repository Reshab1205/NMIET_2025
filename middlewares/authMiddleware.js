const jwt = require('jsonwebtoken')

const createToken = (userId, email) => {
    return jwt.sign({id: userId, email:email}, process.env.JWT_SECRET_KEY, {expiresIn:process.env.JWT_EXPIRE_TIME})
}

const verifyToken = () => {

}


module.exports = {createToken, verifyToken}