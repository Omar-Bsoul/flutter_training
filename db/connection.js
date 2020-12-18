const { Sequelize } = require('sequelize');
const { DB_CONFIG } = require('./config/config');

const sequelize = new Sequelize(DB_CONFIG.DB_NAME, DB_CONFIG.DB_USERNAME, DB_CONFIG.DB_PASSWORD, {
  host: DB_CONFIG.DB_HOST,
  dialect: DB_CONFIG.DB_DIALECT,
});

sequelize.authenticate()
  .then(() => {
    console.log('connected to db');
  })
  .catch((error) => {
    console.error(`db connection failed ${error}`);
  });

exports.sequelize = sequelize;
