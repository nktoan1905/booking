import express from 'express';
import authRoute from './auth';
import employeeRoute from './employee';
let router = express.Router();

let initRoutes = (app) => {
	app.get('/', function (req, res) {
		res.send('<h1>Hello World!</h1>');
	});

	app.use('/v1/auth', authRoute);
	app.use('/v1/employee', employeeRoute);
	return app.use('/', router);
};

module.exports = initRoutes;
