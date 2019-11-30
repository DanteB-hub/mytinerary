const Itinerary = require("./itinerary.model")

const getAll= (req,res)=>{
    Itinerary
    .find({}).then((itineraries)=>{res.json(itineraries).status(204)})
    .catch(err => console.log(err))
}
const getOneCity = (req,res)=>{

    Itinerary
    .find({forCity:req.params.id}).then((itineraries)=>{res.json(itineraries).status(204)})
    .catch(err => console.log(err))
}

module.exports = {
    getAll,
    getOneCity
}