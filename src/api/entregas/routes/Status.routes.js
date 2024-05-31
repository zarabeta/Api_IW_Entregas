import { Router } from 'express';
import * as prodServController from '../controllers/Status.controller';

const router = Router();
router.get('/status', prodServController.getAllStatus);
router.get('/status/:id', prodServController.getOneStatus);
router.post('/status/', prodServController.postStatus);
router.put('/status/:id', prodServController.updateStatus);
router.delete('/status/:id', prodServController.deleteStatus);
//router.post('/status/envio/:id', prodServController.newEnvio);


export default router;