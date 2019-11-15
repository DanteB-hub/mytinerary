const City = require("./city.model")

const getCities = (req,res)=>{
    City
    .find({}).then((cities)=>{res.json(cities).status(204)})
}
const getCity = (req,res)=>{
    City
    .find({_id:req.params.id}).then((cities)=>{res.json(cities).status(204)})
}
module.exports = {
    getCities,
    getCity
}