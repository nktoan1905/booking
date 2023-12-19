import db from '../models/index';

// CRUD
const employeeServices = {
	createEmloyee: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllEmloyee: async () => {
		return new Promise(async (resolve, reject) => {
			try {
			} catch (error) {
				reject(error);
			}
		})
	},
	updateEmloyee: async (data, idEmployee) => {
		return new Promise(async (resolve, reject) => {
			try {
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteEmloyee: async (idEmployee) => {
		return new Promise(async (resolve, reject) => {
			try {
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default employeeServices;
