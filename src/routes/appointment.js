import express from 'express';
import appointmentController from '../controllers/appointmentController';

const router = express.Router();
// read
router.get('/', appointmentController.handleGetAllAppointment);
// create
router.post('/register', appointmentController.handleCreateAppointment);
// update
router.put('/:appointmentId', appointmentController.handleUpdateAppointment);
// delete
router.delete('/:appointmentId', appointmentController.handleDeleteAppointment);
export default router;
