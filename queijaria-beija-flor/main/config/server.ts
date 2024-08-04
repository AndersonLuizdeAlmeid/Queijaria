import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
//import clienteRoutes from "../routes/clienteRoutes";
// Importar outras rotas conforme necessário

const createWindow = (): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    center: true,
    backgroundColor: "#FFF",
    webPreferences: {
      preload: path.join(__dirname, "../preload.js"),
    },
  });

  if (process.env.NODE_ENV === "production") {
    mainWindow.loadFile(path.join(__dirname, "../index.html"));
  } else {
    const port = process.argv[2];
    mainWindow.loadURL(`http://localhost:${port}`);
    mainWindow.webContents.openDevTools();
  }

  return mainWindow;
};

app.on("ready", () => {
  const mainWindow = createWindow();

  // Iniciar rotas do IPC
  //clienteRoutes(ipcMain);
  // Outras rotas conforme necessário
});

app.on("window-all-closed", () => {
  app.quit();
});
