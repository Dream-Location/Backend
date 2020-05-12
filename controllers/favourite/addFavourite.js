const { User } = require('../../models')

module.exports = async function (req, res) {
    try {
        const userId = req.user.subject
        const { location } = req.body
        const user = await User.findOne({ where: { id: userId } })
        let response = await user.addLocation(location)
        if (!response){
            return res.status(401).json({
                message: "Already added to favourites"
            })
        }
        return res.status(201).json({
            message: "Successfully created",
            favourites: response
        })
    } catch(err){
        return res.status(500).json({
            message: "Error occurred adding favourites, " + err.message
        })
    }
    
}