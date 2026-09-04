"""WebSocket bridge for real-time agent events."""
from fastapi import WebSocket


async def handle(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            msg = await websocket.receive_text()
            # Route agent events (hackathon:found, idea:generated, build:progress, ...)
            print("[ws]", msg)
            await websocket.send_text(f"ack: {msg}")
    except Exception:
        await websocket.close()
