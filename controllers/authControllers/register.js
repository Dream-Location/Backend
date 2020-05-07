const bcrypt = require('bcrypt');
const generateToken = require('../../helpers/generateToken')
const User = require('../../models/user')

module.exports = async function(req, res){
    const {username, password1, password2} = req.body

    if(password1 !== password2) {
        return res.status(401).json({
            "message": 'An error occurred!'
        })
    }

    const encryptedPassword = await bcrypt.hash(password1, 10);

    const token = await generateToken(username)

    const user = await User.create({ username, password: encryptedPassword })

    res.status(201).json({
        message : `welcome ${user.username}`,
        token: token
    })
}