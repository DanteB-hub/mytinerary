const router = require('express').Router()
const userController = require('../controllers/user.controller')
const passport = require('passport')

router.post('/user/register', userController.createUser)
router.post('/user/login', userController.userLogin)
router.get("/user/", passport.authenticate("jwt", { session: false }), userController.test)
router.get("/user/google")
router.get('/user/google/redirect')

module.exports = router