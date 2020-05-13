const express = require('express')
const router = express.Router()
const getLocations = require('../controllers/location/getLocations')
const addLocation = require('../controllers/location/addLocation')
const getLocationById = require('../controllers/location/getLocationById')

router.post("/", addLocation)

router.get("/", getLocations)

router.get("/:id", getLocationById)

module.exports = router