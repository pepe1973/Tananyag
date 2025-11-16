import express from 'express';
import { getAllCakesFrontend } from '../../controllers/cakes/cakesControllersFrontend.mjs';
const router = express.Router();

router.get('/', getAllCakesFrontend);

export default router;
