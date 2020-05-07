const jwt = require('jsonwebtoken')

module.exports = async function(userData){
    const token = await jwt.sign({
        data: userData
      }, process.env.JWT_SECRET, { expiresIn: '30d' });

      return token
}