const { User } = require('../../models')

module.exports = async function (req, res) {
    try {
        const userId = req.user.subject

        const user = await User.findOne({ where: { id: userId } })

        let response = await user.getLocations()

        return res.status(200).json({
            message: response
        })
    } catch(err){
        return res.status(500).json({
            message: "Error occurred getting favourites, " + err.message
        })
    }
    
}