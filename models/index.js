const Sequelize = require('sequelize')

const sequelize = new Sequelize('dream-locations', 'postgres', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
  });

sequelize.sync()

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize