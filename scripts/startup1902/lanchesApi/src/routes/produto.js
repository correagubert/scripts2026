import { Router } from 'express';
const router = Router();

import { getProdutos, editProdutos, deleteProdutos, addProdutos } from '../controller/produtoController.js';

router.get('/produto', getProdutos);
router.patch('/produto/:id', editProdutos);
router.delete('/produto/:id', deleteProdutos);
router.post('/produto', addProdutos);

export default router;