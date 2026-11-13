const { app, BrowserWindow } = require("electron");
const { buildWindowOptions, resolveEntry } = require("./launch-config");

function createWindow() {
  const win = new BrowserWindow(buildWindowOptions());

  // Serve the local Hack2Find frontend (dev) or the packaged SPA.
  win.loadFile(resolveEntry());
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
