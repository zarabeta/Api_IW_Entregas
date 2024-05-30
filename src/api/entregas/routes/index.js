//Commerce
import { Router } from 'express';
import config from '../../../config/config';
// Import Routes
import prodServRoutes1 from './Entrega.routes';
import prodServRoutes2 from './Productos.routes';
const routerAPI = (app) => {
  // Routes
  app.use('/entregas', prodServRoutes1);
  app.use('/entregas', prodServRoutes2);
  // Return Router
  return app;
};
module.exports = routerAPI;