import db from '../models/index';

// CRUD
const appointmentServices = {
	createAppointment: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const appointments = await db.Appointment.findOne({ where: { name: data.name } });
				if (!appointments) {
					let newAppointment = await db.Appointment.create({
						name: data.name,
						address: data.address,
						phoneNumber: data.phoneNumber,
						email: data.email,
						generic: data.generic,
						appointmentsTime: data.appointmentTime,
						service: data.service,
					});
					if (newAppointment) {
						resolve({ status: true, message: 'Create new appointment successfully!' });
					} else {
						resolve({ status: false, message: 'Create appointment failed!' });
					}
				} else {
					resolve({ status: false, message: 'Appointment already exists!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllAppointment: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				let appointments = await db.Appointment.findAll({
					atributes: ['id', 'name', 'address', 'phoneNumber', 'email', 'generic', 'appointmentsTime', 'service'],
				});
				if (appointments.length < 0) {
					resolve({ status: false, message: 'Get all appointments failed!' });
				} else {
					resolve({ status: true, message: 'Get all appointments successfully!', appointments: appointments });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateAppointment: async (data, idAppointment) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isUpdate = await db.Appointment.update(
					{
						name: data.name,
						address: data.address,
						phoneNumber: data.phoneNumber,
						email: data.email,
						generic: data.generic,
						appointmentsTime: data.appointmentTime,
						service: data.service,
					},
					{ where: { id: id } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update appointment successfully!' });
				} else {
					resolve({ status: false, message: 'Update appointment failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteAppointment: async (idAppointment) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isDelete = await db.Appointment.destroy({ where: { id: id } });
				let deleteAppointment = await db.Appointment.destroy({ where: { appointmentId: id } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete appointment successfully!' });
				} else {
					resolve({ status: false, message: 'Delete appointment failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default appointmentServices;
