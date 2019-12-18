const User = require("../models/user.model")
var bcrypt = require('bcryptjs');

const createUser = (req, res) => {
    



    /*User.findOne({user_lower: req.body.username.toLowerCase()}).then((user) => {
        if(user) {
            res.send({message: "Ese usuario ya existe"})
        }
    }).then(() => { 
        User.findOne({email_lower: req.body.email.toLowerCase()}).then((email) => {
            if(email) {
                res.send({message: "Ese e-mail ya esta en uso"})
            }
        })  
     })*/

    var profilePicture = ""

    if (req.body.pfpurl) {
        profilePicture = req.body.pfpurl
    } else {
        profilePicture = "userpfp/defaulticon.png"
    }

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            var newUser = new User  ({
                username: req.body.username,
                user_lower: req.body.username.toLowerCase(),
                password: hash,
                email: req.body.email,
                email_lower: req.body.email.toLowerCase(),
                pfpurl: profilePicture
            })
            console.log(newUser)

           newUser.save()
                .then((newCity)=>{
            return res.send(newCity).status(200);
        })
        });
    });


}

module.exports = {
    createUser
}