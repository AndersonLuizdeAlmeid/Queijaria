import { IpcMainInvokeEvent } from "electron";
import batchService from "../services/batchService";
import { Batch } from "main/models/Batchs/types";

export const getAllBatchs = async (event: IpcMainInvokeEvent): Promise<any> => {
  try {
    return await batchService.getAll();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createBatch = async (
  event: IpcMainInvokeEvent,
  batchData: Batch
): Promise<any> => {
  try {
    const novoBatche = await batchService.create(batchData);
    return novoBatche;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateBatch = async (
  event: IpcMainInvokeEvent,
  batchData: Batch
): Promise<any> => {
  try {
    const updatedBatch = await batchService.update(batchData);
    return updatedBatch;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteBatch = async (
  event: IpcMainInvokeEvent,
  id: number
): Promise<any> => {
  try {
    await batchService.delete(id);
    return { message: "Lote deletado com sucesso" };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
