import * as ProductoServices from '../services/Producto.service';
import boom from '@hapi/boom';

//Obtener todas las productos
export const getAllProductos = async (req, res, next) => {
  try{
    const ProductosAll = await ProductoServices.getAllProductos();
    if (!ProductosAll) {
      throw boom.notFound('No se encontraron productos/servicios registrados.');
    } else if (ProductosAll) {
      res.status(200).json(ProductosAll);
    }

    } catch(error) {
      next(error);
    }
  };

//Obtener solo una producto.
export const getOneProducto = async (req, res, next) => {
  try {
    //Obtener parametro id mediante la desestructuracion de objetos
  const { id } = req.params;
  const keyType = req.query.keyType || 'OK';
  const ProductosOne = await ProductoServices.getOneProducto(id, keyType);
  if (!ProductosOne) {
    throw boom.notFound('No se encontraron productos registradas.');
  } else if (ProductosOne) {
    res.status(200).json(ProductosOne);
  }
}catch(error){
  next(error);
}
};

//API POST (ADD) producto.
export const postProducto = async (req, res, next) => {
  try {
    const paProducto = req.body;
    const newProductoItem = await ProductoServices.postProducto(paProducto);
    if (!newProductoItem) {
      throw boom.badRequest('No se pudo crear la producto.');
    } else if (newProductoItem) {
      res.status(201).json(newProductoItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Controlador para manejar la solicitud PUT para actualizar una producto
export const updateProducto = async (req, res, next) => {
  try {
    const { id } = req.params; // Obtiene el ID del producto a actualizar
    const updatedData = req.body; // Obtiene los datos actualizados del cuerpo de la solicitud
    const updatedProducto = await ProductoServices.updateProducto(id, updatedData); // Llama al servicio para actualizar la producto
    if (!updatedProducto) {
      throw boom.notFound('No se encontró la producto a actualizar.');
    } else {
      res.json(updatedProducto); // Responde con los datos actualizados de la producto
    }
  } catch (error) {
    next(error);
  }
};

// Controlador para manejar la solicitud DELETE para eliminar una producto
export const deleteProducto = async (req, res, next) => {
  try {
    const { id } = req.params; // Obtiene el ID de la producto a eliminar
    const deletedProducto = await ProductoServices.deleteProducto(id); // Llama al servicio para eliminar la producto
    if (!deletedProducto) {
      throw boom.notFound('No se encontró la producto a eliminar.');
    } else {
      res.json(deletedProducto); // Responde con los datos de la producto eliminada
    }
  } catch (error) {
    next(error); 
  }
};
 
// Controlador para manejar la solicitud PATCH para agregar productos a una producto
export const newProduct = async (req, res, next) => {
  try {
    const { id, idpaq } = req.params; /// Obtiene los datos del envío a agregar
    const productoData = req.body; // Obtiene los datos del envío a agregar
    const updatedProducto = await ProductoServices.newProduct(id, idpaq, productoData); // Llama al servicio para agregar el envío a la producto
    if (!updatedProducto) {
      throw boom.notFound('No se encontró el envio a la que se desea agregar el producto.');
    } else {
      res.json(updatedProducto); // Responde con los datos actualizados de la producto
    }
  } catch (error) {
     next(error);
 //
}
};