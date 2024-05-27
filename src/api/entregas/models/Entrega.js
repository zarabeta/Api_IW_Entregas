import * as mongoose from 'mongoose';

const ActRastreoSchema = new mongoose.Schema({
  Ubicacion: { type: String },
  DesUbicacion: { type: String },
  Referencias: { type: String },
  Observacion: { type: String },
  FechaReg: { type: String },
  UsuarioReg: { type: String },
});

const productSchema = new mongoose.Schema({
  IdProdServOK: { type: String },
  DesProdServ: { type: String },
  DesPresenta: { type: String },
  CantidadPed: { type: Number },
  CantidadEnt: { type: Number }
});

const estatusSchema = new mongoose.Schema({
  IdTipoEstatusOK: { type: String },
  Actual: { type: String },
  Observacion: { type: String },
});

//entrega
const envioSchema = new mongoose.Schema({
  IdEntregaOK: { type: String },
  IdPaqueteriaOK: { type: String },
  IdTipoMetodoEnvio: { type: String },
  CostoEnvio: { type: Number },
  productos: [productSchema],
  estatus: [estatusSchema]
});

const estadoSchema = new mongoose.Schema({
  IdTipoEntregaOK: { type: String },
  Activo: { type: String },
  Borrado: { type: String },
});

const infoSchema = new mongoose.Schema({
  NumeroGuia: { type: String },
  NombreRepartidor: { type: String },
  Alias: { type: String },
});

//orden
const entregaSchema = new mongoose.Schema({
  IdInstitutoOK: { type: String },
  IdNegocioOK: { type: String },
  IdEntregaOK: { type: String },
  IdEntregaBK: { type: String },
  IdOrdenOK: { type: String },
  envios: [envioSchema],
  estado: { type: estadoSchema },
});

//module.exports = mongoose.model('entregas', entregaSchema);

entregaSchema.set('timestamps', false);

export default mongoose.model(
    'entregas',
    entregaSchema,
    'entregas'
  );