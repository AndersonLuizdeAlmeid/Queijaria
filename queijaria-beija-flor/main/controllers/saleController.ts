import { IpcMainInvokeEvent } from "electron";
import saleService from "../services/saleService";
import { Sale } from "main/models/Sales/types";

export const getAllSales = async (event: IpcMainInvokeEvent): Promise<any> => {
  try {
    return await saleService.getAll();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createSale = async (
  event: IpcMainInvokeEvent,
  saleData: Sale
): Promise<any> => {
  try {
    const novosalee = await saleService.create(saleData);
    return novosalee;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateSale = async (
  event: IpcMainInvokeEvent,
  saleData: Sale
): Promise<any> => {
  try {
    const updatedsale = await saleService.update(saleData);
    return updatedsale;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteSale = async (
  event: IpcMainInvokeEvent,
  id: number
): Promise<any> => {
  try {
    await saleService.delete(id);
    return { message: "Venda deletada com sucesso" };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
