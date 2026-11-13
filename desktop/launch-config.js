/// Pure launch configuration for the Electron shell.
///
/// Kept separate from `main.js` so the window contract can be unit-tested
/// without booting Electron.

const path = require("path");

const WINDOW_SIZE = Object.freeze({ width: 1280, height: 800 });

/** Absolute path to the packaged SPA entry. */
function resolveEntry(dirname = __dirname) {
  return path.join(dirname, "..", "frontend", "index.html");
}

/** Options passed to `new BrowserWindow(...)`. */
function buildWindowOptions(dirname = __dirname) {
  return {
    width: WINDOW_SIZE.width,
    height: WINDOW_SIZE.height,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  };
}

module.exports = { WINDOW_SIZE, buildWindowOptions, resolveEntry };
