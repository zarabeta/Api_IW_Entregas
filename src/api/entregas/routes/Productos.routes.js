import { Router } from 'express';
import * as prodServControllerP from '../controllers/Producto.controller';

const router = Router();
router.get('/productos', prodServControllerP.getAllProductos);
router.get('/productos/:id', prodServControllerP.getOneProducto);
router.post('/productos/:id', prodServControllerP.postProducto);
router.put('/productos/:id', prodServControllerP.updateProducto);
router.delete('/productos/:id', prodServControllerP.deleteProducto);
router.post('/productos/envio/:id/:idpaq', prodServControllerP.newProduct);

export default router;