//Commerce
import { Router } from 'express';
import config from '../../../config/config';
// Import Routes
import prodServRoutes from './Entrega.routes';
//import ordersRoutes from './orders.routes';
const routerAPI = (app) => {
  // Routes
  app.use('/entregas', prodServRoutes);
  //router.use('/orders', ordersRoutes);
  // Return Router
  return app;
};
module.exports = routerAPI;