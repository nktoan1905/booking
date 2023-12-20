import HttpStatusCode from '../helper/HttpStatusCode';
import employeeServices from '../services/EmployeeServiceS';

const employeeController = {
	handleCreateEmloyee: async (req, res) => {
		try {
			const { status, message, data } = await employeeServices.createEmloyee(req.body);
			res.status(HttpStatusCode.OK).json(req.body);
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllEmloyee: async (req, res) => {
		try {
			const { status, message, data } = await employeeServices.getAllEmloyee();
			res.status(HttpStatusCode.OK).json('get');
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateEmloyee: async (req, res) => {
		try {
			const { status, message, data } = await employeeServices.getAllEmloyee(req.body, req.params.idEmployee);
			res.status(HttpStatusCode.OK).json(`${req.params.idEmployee} update`);
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteEmloyee: async (req, res) => {
		try {
			res.status(HttpStatusCode.OK).json(`${req.params.idEmployee} delete`);
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default employeeController;
