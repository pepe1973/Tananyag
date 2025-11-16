import express from 'express';
import { updateOneCakeBackend } from '../../controllers/cakes/oneCakeControllersBackend.mjs';
const router = express.Router();

router.put('/', updateOneCakeBackend);

export default router;
