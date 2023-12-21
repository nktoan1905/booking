import express from 'express';
import employeeController from '../controllers/emloyeeController';

const router = express.Router();
// read
router.get('/', employeeController.handleGetAllEmloyee);
// create
router.post('/register', employeeController.handleCreateEmloyee);
// update
router.put('/:employeeId', employeeController.handleUpdateEmloyee);
// delete
router.delete('/:employeeId', employeeController.handleDeleteEmloyee);
export default router;
