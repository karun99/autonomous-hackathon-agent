"""FastAPI agent-core entry point.

Runs the model router, S-AI swarm orchestration, and exposes the WebSocket
bridge consumed by the Electron/Capacitor shell.

Run: uvicorn backend.app.main:app --host 0.0.0.0 --port 8765
"""
from fastapi import FastAPI, WebSocket

from .routers import chat  # noqa: F401  (registers routes)
from .routers import ws  # noqa: F401  (registers /ws)

app = FastAPI(title="Autonomous Hackathon Agent", version="2.0.0")


@app.get("/health")
def health():
    return {"status": "ok", "version": "2.0.0"}


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await ws.handle(websocket)
