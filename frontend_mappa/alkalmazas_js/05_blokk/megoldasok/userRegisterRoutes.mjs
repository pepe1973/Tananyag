import express from 'express';
import { registerUser } from '../../controllers/users/userRegisterControllers.mjs';
const router = express.Router();

router.post('/', registerUser);

export default router;