const mongoose = require("mongoose");
const citySchema =new mongoose.Schema({
    name:String,
    country:String
})
module.exports = mongoose.model('city',citySchema)