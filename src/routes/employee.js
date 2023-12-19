import express from 'express';
import employeeController from '../controllers/emloyeeController';

const router = express.Router();
// read
router.get('/', employeeController.handleGetAllEmloyee);
// create
router.post('/register', employeeController.handleCreateEmloyee);
// update
router.put('/:idEmployee', employeeController.handleUpdateEmloyee);
// delete
router.delete('/:idEmployee', employeeController.handleDeleteEmloyee);
export default router;
