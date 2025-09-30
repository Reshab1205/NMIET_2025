const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    full_name: {type: String},
    email: {type:String, unique:true},
    mobile_number:{type: Number, unique:true},
    password:{type:String},
    age:{type:Number},
    isUser:{type:Boolean},
    // aadhar_number:{type:Number, unique:true},
    // pan_number:{type:String, unique:true},
    // aadhar_number_verification_status:{type:Boolean, default:false},
    // pan_number_verification_status:{type:Boolean, default:false},

})


module.exports = mongoose.model('user', userSchema)