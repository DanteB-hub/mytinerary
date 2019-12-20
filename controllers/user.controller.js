const User = require("../models/user.model");
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const key = require('../enb')


const createUser = (req, res) => {
    
     User.findOne({email_lower: req.body.email.toLowerCase()}).then((user) => {
        if(user) {
            res.send({message: "Ese usuario ya existe"})
        }
        else {

                let profilePicture = ""

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
                    res.send(newCity).status(200)
                    .catch(500);
                })
                });
            });

}}).catch(500)}


const userLogin = (req,res)=>{
    User
    .findOne({email_lower: req.body.email.toLowerCase()}).then((userExiste) => {
        if(userExiste) {
            var hash = userExiste.password
            bcrypt.compare(req.body.password, hash, function(err, passwordMatch) {
                if (passwordMatch) {
                    console.log("Login sucessful")

                    const payload = {
                                id: userExiste._id,
                                username: userExiste.username,
                                pfpurl: userExiste.pfpurl
                    };

                    const options = {expiresIn: 2592000};
                    
                    jwt.sign(payload, key.secretKey.secretKey, options, (err, token) => {
                        if(err){
                            res.json({
                                success: false,
                                token: "There was an error"
                        });

                        } else {
                            res.json({
                                success: true,
                                token: token
                                });
                        }
                    });
                }

                if (!passwordMatch) return console.log("login error")

            })
        } else {
            res.send({message: "Ese email no se encuentra registrado"})
        }
    }).catch(500)
}

const test = (req, res) => {
    User
      .findOne({ _id: req.user.id })
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(404).json({ error: "User does not exist!" }));
  }


  const userRedirect = (req, res) => {
    const payload = {
        id: req.user.id,
        username: req.user.username,
    };
    const options = {expiresIn: 2000};
    
    jwt.sign(
    payload,
    key.secretKey.secretKey,
    options,
    (err, token) => {
        if(err){
         return res.json({
            payload:payload,
            success: false,
            token: "There was an error",
        });
        }else {
            // res.json({
            // payload: payload,
            // success: true,
            // token: token});
            // console.log('login google back ok')
            res.redirect(`http://localhost:3000/`) 
        }
    }
    )
};

module.exports = {
    userLogin,
    createUser,
    test,
    userRedirect
}