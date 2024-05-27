import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// Import Routes
import routeAPI from './api/entregas/routes/index';
//Configuración para variables de entorno
import config from './config/config';
//Declaramos la variable app igualandola a express
const app = express();
//Establece la conexion a la BD
import { mongoose } from './config/database.config';
import { getAllEntregas } from './api/entregas/services/Entrega.service';
//Settings
app.set('port', config.PORT);
//Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Routes
const api = config.API_URL;
app.get(`${api}`, (req,res)=>{
    res.send(
        `<h1>RESTful running in root</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/DrFIC', (req,res)=>{
    res.send(
        `<h1>RESTful running in DrFIC</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
// Routes
routeAPI(app);
// Export App
export default app;