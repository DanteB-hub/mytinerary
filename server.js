const express = require("express");
const app = express();
const db = require('./db.js');
const cors = require("cors")
const routerCity = require('./city/city.routes')
const routerItinerary = require('./itinerary/itinerary.routes')
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true}))

app.use(routerCity)
app.use(routerItinerary)

app.listen(8080,()=>{console.log("Server is UP!")})