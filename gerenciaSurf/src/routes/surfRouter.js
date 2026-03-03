import {Router} from "express";
const router = Router();

import { getPranchas, editPranchas, deletePranchas, addPranchas } from '../controller/surfController.js';

router.get('/prancha', surfController.getPranchas);
router.post('/prancha', surfController.addPranchas);
router.patch('/prancha/:id', surfController.editPranchas);
router.delete('/prancha/:id', surfController.deletePranchas);

export default router;