const { Location } = require('../../models')

module.exports = async function (req, res) {
    try {
        const locationData = req.body
        console.log(locationData)
        const { description, imageUrl, city, country, price, rating } = locationData

        let location = await Location.findOne({ where: { imageUrl, city, country, price } })
        if (location) return res.status(400).json({ message: "Location already exists" })

        location = await Location.create({
            description,
            imageUrl,
            city,
            country,
            price,
            rating
        })

        return res.status(201).json({
            location
        })
    }
    catch(err){
        return res.status(500).json({
            message : ("Error occurred when creating location", err.message)
        })
    }
    
}