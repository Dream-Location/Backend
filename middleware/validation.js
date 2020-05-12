module.exports = {
    addFavouriteValidation: function (req, res, next) {
        errors = {}
        let { location } = req.body

        location = location || ""

        if (!location) {
            errors.location = "location is required"
        } else if (isNaN(location)) {
            errors.location = "location must be a valid id"
        }

        if(!!Object.keys(errors).length){
            return res.status(401).json(errors)
        }
        next()

    }
}