const mongoose = require('mongoose')
mongoose.set('debug', true);

mongoose.connect("mongodb+srv://mytineraryCurso:mytineraryCurso@mytinerary-cnmus.gcp.mongodb.net/mytinerary?retryWrites=true&w=majorityy", {useNewUrlParser: true})
.catch((err)=>{console.log("Error" ,err.message)});

const db = mongoose.connection;

module.exports = db;