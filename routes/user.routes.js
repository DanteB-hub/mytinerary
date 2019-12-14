const router = require('express').Router()
const userController = require('../controllers/user.controller')

router.post('/user/register', userController.createUser)

module.exports = router