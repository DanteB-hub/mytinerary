const router = require('express').Router()
const {getImage} = require('../controllers/images.controller'); 


router.get("/backendImages/activities/:activID?", getImage)



module.exports = router