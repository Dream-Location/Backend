const express = require('express')
const router = express.Router()
const getLocations = require('../controllers/location/getLocations')
const addLocation = require('../controllers/location/addLocation')

router.post("/", addLocation)

router.get("/", getLocations)

module.exports = router