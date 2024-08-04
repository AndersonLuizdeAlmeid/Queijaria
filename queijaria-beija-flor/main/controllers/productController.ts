import { IpcMainInvokeEvent } from "electron";
import productService from "../services/productService";
import { Product } from "main/models/Products/types";

export const getAllProducts = async (
  event: IpcMainInvokeEvent
): Promise<any> => {
  try {
    return await productService.getAll();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createProduct = async (
  event: IpcMainInvokeEvent,
  productData: Product
): Promise<any> => {
  try {
    const novoProducte = await productService.create(productData);
    return novoProducte;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProduct = async (
  event: IpcMainInvokeEvent,
  productData: Product
): Promise<any> => {
  try {
    const updatedProduct = await productService.update(productData);
    return updatedProduct;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProduct = async (
  event: IpcMainInvokeEvent,
  id: number
): Promise<any> => {
  try {
    await productService.delete(id);
    return { message: "Produto deletado com sucesso" };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
