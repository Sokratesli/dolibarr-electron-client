const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;
let inputWindow;

function createInputWindow() {
  inputWindow = new BrowserWindow({
    width: 400,
    height: 200,
    resizable: false,
    icon: path.join(__dirname, "icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });

  inputWindow.loadFile("index.html");
}

function createMainWindow(url) {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, "build/icons/256x256.png"),
    webPreferences: {
      contextIsolation: true,
    },
  });

  mainWindow.loadURL(url);
}

app.whenReady().then(() => {
  createInputWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createInputWindow();
  });
});

ipcMain.on("open-main-window", (event, url) => {
  createMainWindow(url);
  inputWindow.close();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
