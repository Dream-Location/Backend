const jwt = require('jsonwebtoken')

module.exports = async function (req, res, next){
    let token = ""

    if (req.headers.hasOwnProperty('authorization')){
        token = req.headers['authorization']
    }

    if (!token){
        res.status(400).json({
            message: "provide token"
        })
    }

    let decoded = await jwt.verify(token, process.env.JWT_SECRET);
    if(decoded){
        req.user = decoded
        next()
    } else {
        res.status(401).json({
            message: "invalid token"
        })
    }
}