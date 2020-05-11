const bcrypt = require('bcrypt');
const generateToken = require('../../helpers/generateToken')
const User = require('../../models/user')

module.exports = async function(req, res){
    try{
        const {username, password} = req.body

        const user = await User.findOne({where: { username}})

        const match = await bcrypt.compare(password, user.password)

        if(!match || !user){
            return res.status(401).json({
                message : "Invalid Credentials"
            })
        }

        const token = await generateToken(user.username)

        res.status(201).json({
            message : `welcome ${user.username}`,
            token: token
        })
    } catch(err){
        return res.status(500).json({
            message : ("login failed", err.message)
        })
    }
}