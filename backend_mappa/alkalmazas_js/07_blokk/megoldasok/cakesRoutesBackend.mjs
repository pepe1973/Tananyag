import express from 'express';
import pictureDeleter from '../../middlewares/pictureDeleteFromCloudinary.mjs';
import {
    deleteOneCakeBackend,
    getAllCakesBackend,
    getOneCakeBackend,
} from '../../controllers/cakes/cakesControllersBackend.mjs';
const router = express.Router();

router.get('/', getAllCakesBackend);
router.get('/:id', getOneCakeBackend);
router.delete('/:id', pictureDeleter, deleteOneCakeBackend);

export default router;
