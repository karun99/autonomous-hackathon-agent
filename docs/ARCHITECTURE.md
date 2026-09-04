# Architecture

The Universal Autonomous Hackathon Agent is a cross-platform system that
continuously hunts hackathons, proposes projects, and drafts working prototypes.

## High-Level Diagram

```mermaid
graph TD
    User((User)) --> Frontend[Cross-Platform UI<br>Hack2Find]

    subgraph Device [Device Layer]
        Frontend --> Platform{Platform Type}
        Platform -- Desktop --> LocalAgent[Local Agent<br>Electron + Python]
        Platform -- Mobile --> RemoteAgent[Remote Agent<br>WebSocket to VPS/Home PC]
    end

    subgraph AgentCore [Agent Core (Python/FastAPI)]
        Router[Model Router]
        Swarm[S-AI Swarm<br>7-Agent Debate]
        Planner[Action Planner]
    end

    subgraph Tools [Execution Tools]
        PW[Playwright<br>Browser Control]
        BU[Browser-Use<br>AI-to-DOM Bridge]
        AR[Agent-Reach<br>Social Intelligence]
    end

    subgraph LLMs [Free Inference Backends]
        OR[OpenRouter<br>20+ Models]
        NIM[NVIDIA NIM<br>190+ Models]
        OLL[Ollama / llama.cpp<br>Local Models]
        FB[FreeBuff / OpenCode<br>Proxy-based]
    end

    Swarm --> Router
    Router --> OR
    Router --> NIM
    Router --> OLL
    Router --> FB
    Planner --> PW
    Planner --> BU
    Planner --> AR
    AgentCore -- Results --> Frontend
```

## Device Modes

### Desktop (Electron)
- Runs the full stack locally.
- **Offline capable** via Ollama / llama.cpp on your own hardware.
- Web UI is served by the local Python/FastAPI backend.

### Mobile (Capacitor)
- Thin remote commander.
- Connects over WebSocket to a self-hosted Cloud Agent (VPS) or a home PC
  running the full stack.

## Agent Core Pipeline

1. **Hunt** — Agent-Reach + DuckDuckGo scan events and community channels for
   hackathons.
2. **Idea** — The 7-agent S-AI swarm debates to generate a winning project idea
   for the target event.
3. **Plan** — The action planner breaks the idea into implementable steps.
4. **Build** — Playwright + Browser-Use (and an AI coder) draft a working
   prototype.
5. **Report** — Results are streamed back to the frontend and exportable to
   PDF/PPT.
