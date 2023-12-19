import express from 'express';
import authController from '../controllers/authController';
const router = express.Router();

router.post('/register', authController.handlecreateNewAccount);

router.post('/login', authController.handleLogin);

router.get('/test', authController.handleTestSendMail);

export default router;
