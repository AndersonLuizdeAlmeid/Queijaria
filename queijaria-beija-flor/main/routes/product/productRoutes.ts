import { IpcMain } from "electron";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

export default (ipcMain: IpcMain): void => {
  ipcMain.handle("get-all-products", getAllProducts);
  ipcMain.handle("create-product", createProduct);
  ipcMain.handle("update-product", updateProduct);
  ipcMain.handle("delete-product", deleteProduct);
  // Outras rotas como 'get-producte-by-id', 'create-producte', etc.
};
