import express from 'express';
import appointmentController from '../controllers/appointmentController';

const router = express.Router();
// read
router.get('/', appointmentController.handleGetAllAppointment);
// create
router.post('/register', appointmentController.handleCreateAppointment);
// update
router.put('/:idAppointment', appointmentController.handleUpdateAppointment);
// delete
router.delete('/:idAppointment', appointmentController.handleDeleteAppointment);
export default router;
