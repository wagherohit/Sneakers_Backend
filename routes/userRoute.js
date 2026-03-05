const express = require('express')
const router = express.Router()
const {register,login} = require('../controllers/userController.js')


router.post('/signUp', register)
router.post('/login',login)


module.exports = router