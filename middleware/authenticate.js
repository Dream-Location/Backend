const jwt = require('jsonwebtoken')

module.exports = async function (req, res, next) {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(400).json({
                message: "provide token"
            })
        }

        let decoded = await jwt.verify(token, process.env.JWT_SECRET);
        if (decoded) {
            req.user = decoded
            next()
        } else {
            return res.status(401).json({
                message: "invalid token"
            })
        }
    } catch(err){
        return res.status(400).json({
            message: "invalid token supplied, " +  err.message
        })
    }
}