const City = require("../models/city.model")

const getCities = (req,res)=>{
    City
    .find({}).then((cities)=>{res.json(cities).status(204)})
}
const getCity = (req,res)=>{
    City
    .find({_id:req.params.id}).then((city)=>{res.json(city).status(204)})
}

const postCity = (req, res) => {

     const newCity = new City ({
        name: req.body.name,
        country: req.body.country
     })

     console.log(newCity)

   
     City
    /*.find({ name:newCity.name }, function (err, city) {
        if(city.length > 0) return res.send("This city is already in our database")
        else { 
            newCity.save()
        .then((newCity)=>{
            return res.send(newCity).status(200);
        })
    }})
 /*
     newCity.save()
     .then(newCity => {
         res.send(newCity)
     })

     .catch(err =>
     res.status(500).send("Server Error"))
     */
    
}

module.exports = {
    getCities,
    getCity,
    postCity
}