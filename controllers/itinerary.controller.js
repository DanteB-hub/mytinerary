const Itinerary = require("../models/itinerary.model")

const getAll= (req,res)=>{
    Itinerary
    .find({}).then((itineraries)=>{res.json(itineraries).status(204)})
    .catch(err => console.log(err))
}
const getOneCity = (req,res)=>{

    Itinerary
    .find({}).or([{forCity:req.params.id}, {test: true}]).then((itineraries)=>{res.json(itineraries).status(204)})
    .catch(err => console.log(err))
}

module.exports = {
    getAll,
    getOneCity
}