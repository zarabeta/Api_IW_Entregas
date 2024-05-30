//Esecurity
import Productos from '../models/Entrega';
import boom from '@hapi/boom';

//Obtener lista de productos
export const getAllProductos = async () => {
  try {
        const ProductosAll = await Productos.find();
        return(ProductosAll);
  } catch (error) {
    throw boom.internal(error);
  }
};

//Obtener productos por ID
export const getOneProducto = async (id, keyType) => {
  let ProductosOne;
 
  try {
    if (keyType === 'OK') {
      ProductosOne = await Productos.findOne({
        IdProductoOK: id,
      });
    } else if (keyType === 'BK') {
        ProdServOne = await ProdServ.findOne({
          IdProductoBK: id,
      });
    }
    return(ProductosOne);
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) Productos.
export const postProducto = async (paProducto) => {
  try {
  const newProducto = new Productos(paProducto);
  return await newProducto.save();
  } catch (error) {
  throw error;
  }
};

// Servicio para actualizar una producto por su ID
export const updateProducto = async (IdProductoOK, updatedData) => {
  try {
    // Actualiza la producto usando el campo 'id' en lugar de '_id'
    const updatedProductos = await Productos.findOneAndUpdate({ IdProductoOK }, updatedData, { new: true });
    return updatedProductos;
  } catch (error) {
    throw error;
  }
};

// Servicio para eliminar una producto por su ID
export const deleteProducto = async (IdProductoOK) => {
  try {
    // Busca el producto/servicio por su ID y elimínalo
    const deletedProductos = await Productos.findOneAndDelete({ IdProductoOK });
    return deletedProductos;
  } catch (error) {
    throw error;
  }
};
 

export const newProduct = async (IdProductoOK, idpaq, prods) => {
  try {
    // Busca el producto por su ID y actualiza el campo 'envios' agregando un nuevo envío
    const updatedProductos = await Productos.findOneAndUpdate(
      { IdEntregaOK: IdProductoOK, "envios.IdPaqueteriaOK": idpaq },
      { $push: { "envios.$.productos": prods } }, // Usa el operador $ para actualizar el array anidado
      { new: true }
    );  
    return updatedProductos;
  } catch (error) {
    throw error;
  }
};




