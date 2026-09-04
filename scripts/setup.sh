#!/usr/bin/env bash
set -euo pipefail

echo "==> Universal Autonomous Hackathon Agent — setup"

# 1. Python backend
python3 -m venv venv
# shellcheck disable=SC1091
source venv/bin/activate

echo "==> Installing Python dependencies"
pip install --upgrade pip
pip install fastapi uvicorn websockets playwright browser-use cryptography

echo "==> Installing Playwright Chromium"
python -m playwright install chromium

echo "==> Installing Agent-Reach (from source)"
pip install https://github.com/Panniantong/agent-reach/archive/main.zip

# 2. Node desktop/mobile shell
echo "==> Installing Node dependencies (Electron + Capacitor)"
npm install
npx cap init Hack2Find com.yourcompany.hack2find

echo "==> Done."
echo "    Start backend:  source venv/bin/activate && uvicorn backend.app.main:app --host 0.0.0.0 --port 8765"
