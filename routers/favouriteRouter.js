const express = require('express')
const router = express.Router()

const authenticate = require('../middleware/authenticate')
const addFavourite = require('../controllers/favourite/addFavourite')
const getFavourites = require('../controllers/favourite/getFavourites')
const removeFavourite = require('../controllers/favourite/removeFavourite')

router.post("/", authenticate, addFavourite)
router.get("/", authenticate, getFavourites)
router.delete("/:id", authenticate, removeFavourite)

module.exports = router