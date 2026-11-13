const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const { WINDOW_SIZE, buildWindowOptions, resolveEntry } = require("../desktop/launch-config");

test("the shell keeps a fixed 1280x800 desktop window", () => {
  assert.deepEqual(WINDOW_SIZE, { width: 1280, height: 800 });
  const options = buildWindowOptions();
  assert.equal(options.width, 1280);
  assert.equal(options.height, 800);
});

test("the renderer is isolated from Node", () => {
  const { webPreferences } = buildWindowOptions();
  assert.equal(webPreferences.contextIsolation, true);
  assert.equal(webPreferences.nodeIntegration, false);
});

test("the packaged frontend entry exists", () => {
  const entry = resolveEntry(path.join(__dirname, "..", "desktop"));
  assert.ok(entry.endsWith(path.join("frontend", "index.html")));
  assert.ok(fs.existsSync(entry), `missing ${entry}`);
});

test("the shell loads the entry rather than a remote URL", () => {
  const source = fs.readFileSync(path.join(__dirname, "..", "desktop", "main.js"), "utf8");
  assert.match(source, /win\.loadFile\(resolveEntry\(\)\)/);
  assert.doesNotMatch(source, /loadURL\(\s*["']https?:/);
});

test("the manifest declares the Electron entry and MIT license", () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8"));
  assert.equal(pkg.main, "desktop/main.js");
  assert.equal(pkg.license, "MIT");
  assert.ok(pkg.build?.appId, "electron-builder needs an appId");
});

test("the frontend is a self-contained SPA shell", () => {
  const html = fs.readFileSync(path.join(__dirname, "..", "frontend", "index.html"), "utf8");
  assert.match(html, /<title>/i);
  assert.match(html, /<meta[^>]+name=["']viewport["']/i);
  assert.match(html, /<script[^>]+type=["']module["']/i);
});
