const Location = require('../../models/location')

module.exports = async function(req,res){
    try{
        const locations = await Location.findAll()
        return res.status(200).json({locations})
    }
    catch(err){
        return res.status(500).json({
            message : ("Error occurred when creating location", err.message)
        })
    }
}