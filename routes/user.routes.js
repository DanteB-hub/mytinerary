const router = require('express').Router()
const userController = require('../controllers/user.controller')
const passport = require('passport')
const jwt = require("jsonwebtoken")
const key = require("../enb")
const google = require("../google")


router.post('/user/register', userController.createUser)

router.post('/user/login', userController.userLogin)


router.get("/user/", passport.authenticate("jwt", { session: false }), userController.test)

router.get('/user/google', passport.authenticate('google', { scope: ['profile'] }));

//google callback route (JWT)
router.get("/user/google/redirect", passport.authenticate('google',{ session: false }), userController.userRedirect); 

module.exports = router