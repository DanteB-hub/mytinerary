const User = require("../models/user.model")
var bcrypt = require('bcryptjs');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

const createUser = (req, res) => {
    
    const newUser = new User ({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        pfpurl: req.body.pfpurl
    })

    console.log(newUser)
    if (newUser) {
        return res.send({message: "Funciona"})
    }
}

module.exports = {
    createUser
}