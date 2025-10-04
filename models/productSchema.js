const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    product_id:{type:String, unique:true},
    product_name:{type:String, },
    product_brand:{type:String, },
    product_price:{type:Number, },
    product_quantity:{type:Number, default:1}
}, {timestamps:true})

module.exports = mongoose.model('product', productSchema)