import { IpcMain } from "electron";
import {
  getAllSales,
  createSale,
  updateSale,
  deleteSale,
} from "../controllers/saleController";

export default (ipcMain: IpcMain): void => {
  ipcMain.handle("get-all-sales", getAllSales);
  ipcMain.handle("create-sale", createSale);
  ipcMain.handle("update-sale", updateSale);
  ipcMain.handle("delete-sale", deleteSale);
  // Outras rotas como 'get-salee-by-id', 'create-salee', etc.
};
