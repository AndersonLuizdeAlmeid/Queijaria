import { IpcMain } from "electron";
import {
  getAllClients,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController";

export default (ipcMain: IpcMain): void => {
  ipcMain.handle("get-all-clients", getAllClients);
  ipcMain.handle("create-client", createClient);
  ipcMain.handle("update-cliente", updateClient);
  ipcMain.handle("delete-cliente", deleteClient);
  // Outras rotas como 'get-cliente-by-id', 'create-cliente', etc.
};
