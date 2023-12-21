import express from 'express';
import serviceController from '../controllers/serviceController';

const router = express.Router();
// read
router.get('/', serviceController.handleGetAllService);
// create
router.post('/register', serviceController.handleCreateService);
// update
router.put('/:serviceId', serviceController.handleUpdateServiceId);
// delete
router.delete('/:serviceId', serviceController.handleDeleteServiceId);
export default router;
