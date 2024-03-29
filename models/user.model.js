const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    user_lower: String,
    password: String,
    email: String,
    email_lower: String,
    pfpurl: String,
    googleID: String,
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'itinerary' }]
})

module.exports = mongoose.model('user', userSchema)