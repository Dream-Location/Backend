const User = require('../models/user')
const Location = require('../models/location')

Location.belongsToMany(User, {through: 'favourites'});
User.belongsToMany(Location, {through: 'favourites'});

module.exports = { User, Location }