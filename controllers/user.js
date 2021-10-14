const User = require('../models/User');
const sequelize = require('../utils/database');

exports.getUsers = (req, res, next) => {
	User.findAll()
		.then((users) => {
			// console.log(users);
			res.send(users);
		})
		.catch((err) => {});
};

exports.createUser = (req, res, next) => {
	const { name, email, password } = req.body;
	console.log({ name, email, password });
	User.create({
		name,
		email,
		password,
	})
		.then((result) => {
			console.log('Created new user.');
			res.status(201).send(result);
		})
		.catch((err) => {
			next(err);
		});
};

exports.getOneUser = (req, res, next) => {
	const { userId } = req.params;
	// console.log(`userId = ${userId}`);
	User.findByPk(userId)
		.then((result) => {
			console.log('Find One user.');
			res.send(result);
		})
		.catch((err) => {
			next(err);
		});
};

exports.updateUser = (req, res, next) => {
	const { userId } = req.params;
	const { name, email, password } = req.body;

	User.findByPk(userId)
		.then((user) => {
			user.name = name;
			user.email = email;
			user.password = password;
			return user.save();
		})
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			next(err);
		});
};

exports.deleteUser = (req, res, next) => {
	const { userId } = req.params;

	User.findByPk(userId)
		.then((user) => {
			return user.destroy();
		})
		.then((result) => {
			console.log('Deleted a user.');
			res.send(result);
		})
		.catch((err) => {
			next(err);
		});
};
