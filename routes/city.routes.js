const router = require('express').Router()
const cityController = require('../controllers/city.controller')

router.get("/cities", cityController.getCities)
router.get("/cities/:id", cityController.getCity)
router.get("/", function (req, res){
    res.send("panini")
})

router.post("/cities/post", cityController.postCity)


module.exports = router

