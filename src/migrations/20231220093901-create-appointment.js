'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Appointments', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			phoneNumber: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			generic: {
				type: Sequelize.STRING,
			},
			appointmentTime: {
				type: Sequelize.DATE,
			},
			service: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Appointments');
	},
};
