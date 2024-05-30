import { Router } from 'express';
import * as prodServController from '../controllers/Entrega.controller';

const router = Router();
router.get('/envios', prodServController.getAllEntregas);
router.get('/envios/:id', prodServController.getOneEntrega);
router.post('/envios/', prodServController.postEntrega);
router.put('/envios/:id', prodServController.updateEntrega);
router.delete('/envios/:id', prodServController.deleteEntrega);
router.post('/envios/envio/:id', prodServController.newEnvio);


export default router;