const express = require('express')
const router = express.Router()
const login = require('../controllers/authControllers/login')
const register = require('../controllers/authControllers/register')

router.post('/login', login)

router.post('/register', register)

module.exports = router