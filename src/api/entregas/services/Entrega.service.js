//Esecurity
import Entregas from '../models/Entrega';
import boom from '@hapi/boom';

//Obtener lista de entregas
export const getAllEntregas = async () => {
  try {
        const EntregasAll = await Entregas.find();
        return(EntregasAll);
  } catch (error) {
    throw boom.internal(error);
  }
};

//Obtener entregas por ID
export const getOneEntrega = async (id, keyType) => {
  let EntregasOne;
 
  try {
    if (keyType === 'OK') {
      EntregasOne = await Entregas.findOne({
        IdEntregaOK: id,
      });
    } else if (keyType === 'BK') {
        ProdServOne = await ProdServ.findOne({
          IdEntregaBK: id,
      });
    }
    return(EntregasOne);
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) Entregas.
export const postEntrega = async (paEntrega) => {
  try {
  const newEntrega = new Entregas(paEntrega);
  return await newEntrega.save();
  } catch (error) {
  throw error;
  }
};

// Servicio para actualizar una entrega por su ID
export const updateEntrega = async (IdEntregaOK, updatedData) => {
  try {
    // Actualiza la entrega usando el campo 'id' en lugar de '_id'
    const updatedEntregas = await Entregas.findOneAndUpdate({ IdEntregaOK }, updatedData, { new: true });
    return updatedEntregas;
  } catch (error) {
    throw error;
  }
};

// Servicio para eliminar una entrega por su ID
export const deleteEntrega = async (IdEntregaOK) => {
  try {
    // Busca el producto/servicio por su ID y elimínalo
    const deletedEntregas = await Entregas.findOneAndDelete({ IdEntregaOK });
    return deletedEntregas;
  } catch (error) {
    throw error;
  }
};