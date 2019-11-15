const express = require("express");
const app = express();
const db = require('./db.js');
const cors = require("cors")
const routerCity = require('./city/city.routes')

app.use(cors())

app.use(routerCity)

app.listen(8080,()=>{console.log("Server is UP!")})