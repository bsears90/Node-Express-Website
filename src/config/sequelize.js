const Sequelize = require('sequelize');

const database = 'basic_server';
const username = 'root';
const password = 'root';

module.exports = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  timezone: 'America/Los_Angeles',

});
