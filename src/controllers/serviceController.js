import HttpStatusCode from '../helper/HttpStatusCode';
import serviceServices from '../services/serviceServices';

const serviceController = {
	handleCreateService: async (req, res) => {
		try {
			const { status, message, data } = await serviceServices.createService(req.body);
			res.status(HttpStatusCode.OK).json(req.body);
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllService: async (req, res) => {
		try {
			const { status, message, data } = await serviceServices.getAllService();
			res.status(HttpStatusCode.OK).json('get');
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateService: async (req, res) => {
		try {
			const { status, message, data } = await serviceServices.getAllService(req.body, req.params.idService);
			res.status(HttpStatusCode.OK).json(`${req.params.idService} update`);
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteService: async (req, res) => {
		try {
			res.status(HttpStatusCode.OK).json(`${req.params.idService} delete`);
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default serviceController;
