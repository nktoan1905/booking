import db from '../models/index';

// CRUD
const employeeServices = {
	createEmloyee: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const employees = await db.Employee.findOne({ where: { name: data.name } });
				if (!employees) {
					let newEmployee = await db.Employee.create({
						name: data.name,
						description: data.description,
						position: data.position,
						image: data.image,
					});
					if (newEmployee) {
						resolve({ status: true, message: 'Create new employee successfully!' });
					} else {
						resolve({ status: false, message: 'Create employee failed!' });
					}
				} else {
					resolve({ status: false, message: 'Employee already exists!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllEmloyee: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				let employees = await db.Employee.findAll({ atributes: ['id', 'name', 'description', 'position', 'image'] });
				if (employees.length < 0) {
					resolve({ status: false, message: 'Get all employees failed!' });
				} else {
					resolve({ status: true, message: 'Get all employees successfully!', employees: employees });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateEmloyee: async (data, idEmployee) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isUpdate = await db.Employee.update(
					{ name: data.name, description: data.description, position: data.position, image: data.image },
					{ where: { id: id } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update employee successfully!' });
				} else {
					resolve({ status: false, message: 'Update employee failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteEmloyee: async (idEmployee) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isDelete = await db.Employee.destroy({ where: { id: id } });
				let deleteEmployee = await db.Employee.destroy({ where: { employeeId: id } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete employee successfully!' });
				} else {
					resolve({ status: false, message: 'Delete employee failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default employeeServices;
