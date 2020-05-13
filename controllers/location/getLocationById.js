const { Location } = require('../../models')

module.exports = async function(req,res){
    try{
        const id = req.params.id
        const location = await Location.findOne({where: {id}})
        if(!location){
            return res.status(404).json({
                message : ("Location not found")
            })
        }
        return res.status(200).json({location})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            message : ("Error occurred when getting location", err.message)
        })
    }
}