import express from 'express';
import serviceController from '../controllers/serviceController';

const router = express.Router();
// read
router.get('/', serviceController.handleGetAllService);
// create
router.post('/register', serviceController.handleCreateService);
// update
router.put('/:idService', serviceController.handleUpdateService);
// delete
router.delete('/:idService', serviceController.handleDeleteService);
export default router;
