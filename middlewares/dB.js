const mongoose = require('mongoose')

const url = process.env.MONGODB_URL


const connectDb = async () => {
    try {
   await mongoose.connect(url)
   console.log(`Db Connected`)
    } catch (err) {
        console.log(`Db error`)
    }

}

module.exports = {connectDb}