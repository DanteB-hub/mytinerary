const router = require('express').Router()
const cityController = require('./city.controller')

router.get("/cities", cityController.getCities)
router.get("/city/:id", cityController.getCity)
router.get("/", function (req, res){
    res.send("panini")
})


module.exports = router

/*
onChange = name => event => {
    let value_ = name === "image"
    ? event.target.files[0]
    : event.target.value


    this.setSate({[name]: value_})
}
*/