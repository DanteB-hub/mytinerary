const mongoose = require("mongoose");


const itinerarySchema =new mongoose.Schema({
    title:String,
    rating: Number,
    duration: Number,
    price: Number,
    postedBy: { name: String, pfpUrl: String },
    hashtaghs: Array,
    forCity: { type: mongoose.Schema.Types.ObjectId, ref: "city"},
    activities: Array
})

module.exports = mongoose.model('itinerary', itinerarySchema)