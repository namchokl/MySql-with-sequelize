const path = require('path');

const express = require('express');

const sequelize = require('./utils/database');

const app = express();

app.use(express.urlencoded());

app.use(express.json());

const userRoutes = require('./routes/user');

app.use('/api', userRoutes);

app.use((err, req, res, next) => {
	console.error('Something wrong...');
	// console.log(err);
	res.send({
		error: err.message,
	});
});

const PORT = 3000;

sequelize
	.sync()
	.then((result) => {
		app.listen(PORT, () => {
			console.log(`Listening on port: ${PORT}..`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
