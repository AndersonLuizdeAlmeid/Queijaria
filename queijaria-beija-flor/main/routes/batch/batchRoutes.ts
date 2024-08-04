import { IpcMain } from "electron";
import {
  getAllBatchs,
  createBatch,
  updateBatch,
  deleteBatch,
} from "../controllers/batchController";

export default (ipcMain: IpcMain): void => {
  ipcMain.handle("get-all-batches", getAllBatchs);
  ipcMain.handle("create-batch", createBatch);
  ipcMain.handle("update-batch", updateBatch);
  ipcMain.handle("delete-batch", deleteBatch);
  // Outras rotas como 'get-batche-by-id', 'create-batche', etc.
};
