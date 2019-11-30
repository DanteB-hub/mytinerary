const router = require('express').Router()
const itineraryController = require('./itinerary.controller')

router.get("/itineraries", itineraryController.getAll)
router.get("/itineraries/:id", itineraryController.getOneCity)

module.exports = router