//Esecurity
import Status from '../models/Entrega';
import boom from '@hapi/boom';

//Obtener lista de status
export const getAllStatus = async () => { 
  try {
        const StatusAll = await Status.find();
        return(StatusAll);
  } catch (error) {
    throw boom.internal(error);
  }
};

//Obtener Status por Numero de guía
export const getOneStatus = async (id, keyType) => {
  let StatusOne;
 
  try {
    if (keyType === 'OK') {
        StatusOne = await Status.findOne({
        NumeroGuia: id,
      });
    } else if (keyType === 'BK') {
        ProdServOne = await ProdServ.findOne({
        NumeroGuia: id,
      });
    }
    return(StatusOne);
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) Status.
export const postStatus = async (paStatus) => {
  try {
    const newStatus = new Status(paStatus);
    return await newStatus.save();
  } catch (error) {
    throw error;
  }
};

// Servicio para actualizar un status por su Numero de guía
export const updateStatus = async (NumeroGuia, updatedData) => {
  try {
    // Actualiza la entrega usando el campo 'id' en lugar de '_id'
    const updatedStatus = await Status.findOneAndUpdate({ NumeroGuia }, updatedData, { new: true });
    return updatedStatus;
  } catch (error) {
    throw error;
  }
};

// Servicio para eliminar un status por su numero de guía
export const deleteStatus = async (NumeroGuia) => {
  try {
    // Busca el producto/servicio por su ID y elimínalo
    const deletedStatus = await Status.findOneAndDelete({ NumeroGuia });
    return deletedStatus;
  } catch (error) {
    throw error;
  }
};

/*export const newEnvio = async (IdEntregaOK, envio) => {
  try {
    // Busca la entrega por su ID y actualiza el campo 'envios' agregando un nuevo envío
    const updatedEntregas = await Status.findOneAndUpdate({ IdEntregaOK }, { $push: { envios: envio } }, { new: true });
    return updatedEntregas;
  } catch (error) {
    throw error;
  }
}*/