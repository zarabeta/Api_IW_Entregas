import { Router } from 'express';
import * as prodServController from '../controllers/Entrega.controller';

const router = Router();
router.get('/', prodServController.getAllEntregas);
router.get('/:id', prodServController.getOneEntrega);
router.post('/', prodServController.postEntrega);
router.put('/:id', prodServController.updateEntrega);
router.delete('/:id', prodServController.deleteEntrega);

export default router;