const router = require('express').Router()
const {getImage} = require('./images.controller'); 


router.get("/backendImages/activities/:activID?", getImage)



module.exports = router