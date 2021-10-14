const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'p@ssword', {
	dialect: 'mysql',
	host: 'localhost',
});

module.exports = sequelize;
