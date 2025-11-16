import express from 'express';
import pictureUploader from '../../middlewares/pictureToCloudinary.mjs';
import {
    getNewCake,
    postNewCake,
} from '../../controllers/cakes/newCakeControllers.mjs';
const router = express.Router();

router.get('/', getNewCake);
router.post('/', pictureUploader, postNewCake);

export default router;
