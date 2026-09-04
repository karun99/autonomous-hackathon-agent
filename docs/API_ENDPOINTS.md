# API Endpoints Quick Reference

## Chat Completions (OpenAI-compatible)

| Service | Base URL | Authentication |
|---------|----------|----------------|
| OpenRouter Chat | `https://openrouter.ai/api/v1/chat/completions` | Bearer `sk-or-v1-...` |
| OpenRouter Models | `https://openrouter.ai/api/v1/models` | Bearer `sk-or-v1-...` |
| NVIDIA NIM Chat | `https://integrate.api.nvidia.com/v1/chat/completions` | Bearer `nvapi-...` |
| Ollama (Local) | `http://localhost:11434/v1/chat/completions` | None |
| llama.cpp (Local) | `http://localhost:8080/v1/chat/completions` | None |

> The agent core exposes a unified OpenAI-compatible route so any backend can be
> swapped via the model router.

## Search

| Service | Endpoint | Notes |
|---------|----------|-------|
| DuckDuckGo Instant (fallback) | `https://api.duckduckgo.com/?q=...&format=json` | No auth |

## CLI Tooling

| Tool | Invocation |
|------|------------|
| Agent-Reach | `agent-reach <platform> <query> --json` (uses `~/.agent-reach/config.yaml`) |
| Playwright | `python -m playwright` (browser automation) |
| Browser-Use | `python -m browser_use` (AI-to-DOM bridge) |

## In-App WebSocket Bridge (agent core ⇄ frontend)

- Route: `/ws` (WebSocket)
- Events: `hackathon:found`, `idea:generated`, `plan:ready`, `build:progress`, `build:complete`

## Local Health

- `GET /health` — returns `{ "status": "ok", "models": [...] }`
