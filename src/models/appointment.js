'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Appointment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Appointment.init(
		{
			name: DataTypes.STRING,
			address: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
			email: DataTypes.STRING,
			generic: DataTypes.STRING,
			appontmentTime: DataTypes.DATE,
			service: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Appointment',
		},
	);
	return Appointment;
};