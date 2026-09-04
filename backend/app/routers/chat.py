"""Route registration for the agent core."""
import json

import httpx
from fastapi import APIRouter

router = APIRouter()


@router.post("/api/v1/chat/completions")
async def chat_completions(payload: dict):
    """Model-router proxy: routes a request to the configured free backend.

    Reads env: OPENROUTER_API_KEY / NVIDIA_NIM_API_KEY / OLLAMA_HOST / LLAMA_CPP_HOST
    """
    backend = payload.get("backend", "openrouter")
    forward_url = {
        "openrouter": "https://openrouter.ai/api/v1/chat/completions",
        "nim": "https://integrate.api.nvidia.com/v1/chat/completions",
        "ollama": "http://localhost:11434/v1/chat/completions",
        "llamacpp": "http://localhost:8080/v1/chat/completions",
    }.get(backend, "https://openrouter.ai/api/v1/chat/completions")

    headers = {"Content-Type": "application/json"}
    async with httpx.AsyncClient(timeout=120) as client:
        resp = await client.post(forward_url, json=payload, headers=headers)
    return json.loads(resp.text)
