const express = require("express");
const app = express();
const db = require('./db.js');
const cors = require("cors")
const routerCity = require('./routes/city.routes')
const routerItinerary = require('./routes/itinerary.routes')
const routerImage = require('./routes/images.routes')
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true}))

app.use(routerCity)
app.use(routerItinerary)
app.use(routerImage)

app.listen(8080,()=>{console.log("Server is UP!")})