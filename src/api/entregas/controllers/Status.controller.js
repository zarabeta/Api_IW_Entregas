import * as StatusServices from '../services/Status.service';
import boom from '@hapi/boom';

//Obtener todas los status
export const getAllStatus = async (req, res, next) => {
  try{
    const StatusAll = await StatusServices.getAllStatus();
    if (!StatusAll) {
      throw boom.notFound('No se encontraron status registrados.');
    } else if (StatusAll) {
      res.status(200).json(StatusAll);
    }

    } catch(error) {
      next(error);
    }
  }; 

//Obtener solo un Status.
export const getOneStatus = async (req, res, next) => {
  try {
    //Obtener parametro id mediante la desestructuracion de objetos
  const { id } = req.params;
  const keyType = req.query.keyType || 'OK';
  const StatusOne = await StatusServices.getOneStatus(id, keyType);
  if (!StatusOne) {
    throw boom.notFound('No se encontraron status registrados.');
  } else if (StatusOne) {
    res.status(200).json(StatusOne);
  }
}catch(error){
  next(error);
}
};

//API POST (ADD) status.
export const postStatus = async (req, res, next) => {
  try {
    const paStatus = req.body;
    const newStatusItem = await StatusServices.postStatus(paStatus);
    if (!newStatusItem) {
      throw boom.badRequest('No se pudo crear la status.');
    } else if (newStatusItem) {
      res.status(201).json(newStatusItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Controlador para manejar la solicitud PUT para actualizar una status
export const updateStatus = async (req, res, next) => {
  try {
    const { id } = req.params; // Obtiene el ID del status a actualizar
    const updatedData = req.body; // Obtiene los datos actualizados del cuerpo de la solicitud
    const updatedStatus = await StatusServices.updateStatus(id, updatedData); // Llama al servicio para actualizar el status
    if (!updatedStatus) {
      throw boom.notFound('No se encontró el status a actualizar.');
    } else {
      res.json(updatedStatus); // Responde con los datos actualizados de la entrega
    }
  } catch (error) {
    next(error);
  }
};

// Controlador para manejar la solicitud DELETE para eliminar un status
export const deleteStatus = async (req, res, next) => {
  try {
    const { id } = req.params; // Obtiene el ID de la entrega a eliminar
    const deletedStatus = await StatusServices.deleteStatus(id); // Llama al servicio para eliminar la entrega
    if (!deletedStatus) {
      throw boom.notFound('No se encontró el status a eliminar.');
    } else {
      res.json(deletedStatus); // Responde con los datos de la entrega eliminada
    }
  } catch (error) {
    next(error); 
  } 
};

// Controlador para manejar la solicitud PATCH para agregar envios a un status
export const newStatus = async (req, res, next) => {
  try {
    const { id } = req.params; // Obtiene el ID de la entrega a la que se agregará el envío
    const envioData = req.body; // Obtiene los datos del envío a agregar
    const updatedStatus = await StatusServices.newStatus(id, envioData); // Llama al servicio para agregar el envío a la entrega
    if (!updatedStatus) {
      throw boom.notFound('No se encontró el status a la que se desea agregar el envío.');
    } else {
      res.json(updatedStatus); // Responde con los datos actualizados de la entrega
    }
  } catch (error) {
    next(error);
  }
};