const { User } = require('../../models')

module.exports = async function (req, res) {
    try {
        const userId = req.user.subject
        const location = req.params.id
        const user = await User.findOne({ where: { id: userId } })
        let response = await user.removeLocation(location)
        if (!response){
            return res.status(404).json({
                message: "Already removed from favourites"
            })
        }
        return res.status(200).json({
            message: "Successfully deleted",
            itemsDeleted: response
        })
    } catch(err){
        return res.status(500).json({
            message: "Error occurred removing from favourites, " + err.message
        })
    }
    
}