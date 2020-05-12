const jwt = require('jsonwebtoken')

module.exports = async function(user){
    const token = await jwt.sign({
        subject: user.id,
        username: user.username
      }, process.env.JWT_SECRET, { expiresIn: '30d' });

      return token
}