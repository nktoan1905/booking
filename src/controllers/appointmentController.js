import HttpStatusCode from '../helper/HttpStatusCode';
import appointmentServices from '../services/appointmentService';

const appointmentController = {
	handleCreateAppointment: async (req, res) => {
		try {
			const { status, message, data } = await appointmentServices.createAppointment(req.body);
			res.status(HttpStatusCode.OK).json(req.body);
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllAppointment: async (req, res) => {
		try {
			const { status, message, data } = await appointmentServices.getAllAppointment();
			res.status(HttpStatusCode.OK).json('get');
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateAppointment: async (req, res) => {
		try {
			const { status, message, data } = await appointmentServices.getAllAppointment(req.body, req.params.idappointment);
			res.status(HttpStatusCode.OK).json(`${req.params.idappointment} update`);
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteAppointment: async (req, res) => {
		try {
			res.status(HttpStatusCode.OK).json(`${req.params.idappointment} delete`);
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default appointmentController;
