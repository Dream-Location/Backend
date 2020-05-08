const bcrypt = require('bcrypt');
const generateToken = require('../../helpers/generateToken')
const User = require('../../models/user')

module.exports = async function(req, res){
    const {username, password} = req.body

    let user = await User.findOne({where: { username}})

    if (user){
        return res.status(400).json({message: "user already exists"})
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    
    user = await User.create({ username, password: encryptedPassword })

    const token = await generateToken(username)

    return res.status(201).json({
        message : `welcome ${user.username}`,
        token: token
    })
}