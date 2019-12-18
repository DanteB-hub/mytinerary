const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    user_lower: String,
    password: String,
    email: String,
    email_lower: String,
    pfpurl: String
})

module.exports = mongoose.model('user',userSchema)