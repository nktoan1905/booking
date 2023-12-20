import db from '../models/index';

// CRUD
const serviceServices = {
	createService: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const services = await db.Service.findOne({ where: { name: data.name } });
				if (!services) {
					let newService = await db.Service.create({
						name: data.name,
						description: data.description,
					});
					if (newService) {
						resolve({ status: true, message: 'Create new service successfully!' });
					} else {
						resolve({ status: false, message: 'Create service failed!' });
					}
				} else {
					resolve({ status: false, message: 'service already exists!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllService: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				let services = await db.Service.findAll({ atributes: ['id', 'name', 'description'] });
				if (services.length < 0) {
					resolve({ status: false, message: 'Get all services failed!' });
				} else {
					resolve({ status: true, message: 'Get all services successfully!', employees: employees });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateService: async (data, idService) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isUpdate = await db.Services.update(
					{ name: data.name, description: data.description },
					{ where: { id: id } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update service successfully!' });
				} else {
					resolve({ status: false, message: 'Update service failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteService: async (idService) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isDelete = await db.Service.destroy({ where: { id: id } });
				let deleteService = await db.Service.destroy({ where: { serviceId: id } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete service successfully!' });
				} else {
					resolve({ status: false, message: 'Delete service failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default serviceServices;
