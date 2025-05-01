const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openMainWindow: (url) => ipcRenderer.send("open-main-window", url),
});
