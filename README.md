# Universal Autonomous Hackathon Agent

> **Complete Technical Reference** · Version 2.0 · Production-Ready Blueprint
> **Focus:** Cross-Platform (Desktop / Mobile / Web) with Zero-Cost AI Inference

A single application that runs on **Windows, macOS, Linux, Android, and iOS** that
continuously hunts hackathons, generates project ideas, and builds full prototypes
— combining **Hack2Find**, **S-AI Swarm**, **Playwright**, **Browser-Use**,
**Agent-Reach**, and multiple free LLM backends in a cross-platform
Electron/Capacitor shell.

- **Desktop** runs the full AI stack locally (offline-capable via Ollama / llama.cpp).
- **Mobile** acts as a remote commander, connecting to a self-hosted Cloud Agent or a home PC.

---

## 1. Core Vision

One codebase, five platforms. The desktop app can go fully offline (local inference),
while the mobile app delegates heavy orchestration to your own VPS or home PC over
WebSocket.

---

## 2. System Architecture

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

---

## 3. Core Components & Official URLs

| Component | Description | Official URL / Repository |
|-----------|-------------|----------------------------|
| **Hack2Find** (UI) | The frontend interface (HTML/CSS/JS) with voice, CSV/PDF exports, and 3D avatar. | Live Demo: http://you-ai-project.netlify.app |
| **S-AI Swarm** | The 7-agent orchestration engine (Lead, Pro/Con, Critic, Planner, Synthesizer). | Conceptual port from the demo above. |
| **Playwright** | Cross-browser automation (Chromium, Firefox, WebKit). Used to control the real browser. | Official: https://playwright.dev/ · Python: https://github.com/microsoft/playwright-python |
| **Browser-Use** | Bridges AI agents to Playwright actions. Converts "click this" into real DOM interactions. | GitHub: https://github.com/browser-use/browser-use · Docs: https://browser-use.com/ |
| **Agent-Reach** | Zero-API-fee access to 15+ platforms (Twitter/X, Reddit, YouTube, GitHub, XiaoHongShu, etc.). | GitHub: https://github.com/Panniantong/agent-reach |

---

## 4. Free LLM Inference Backends

| Backend | Description | Free Tier Details | URL / Repository |
|---------|-------------|-------------------|------------------|
| **OpenRouter** | Unified API for 20+ free models (Gemini Flash, Llama, etc.). | 20 req/min, 50/day (or 1000/day with $10 top-up). | Official: https://openrouter.ai/ · API: https://openrouter.ai/api/v1/chat/completions · Models: https://openrouter.ai/models |
| **NVIDIA NIM** | Enterprise-grade hosted APIs for 190+ models (DeepSeek, Llama 4, etc.). | 5,000 free credits, 40 requests/minute. | Official: https://build.nvidia.com/ · Models: https://build.nvidia.com/models · Docs: https://build.nvidia.com/docs/overview |
| **Ollama** | Run models locally (LLaMA 3, Mistral, Qwen, etc.). | Unlimited (uses your own hardware). | Official: https://ollama.com/ · GitHub: https://github.com/ollama/ollama · Models: https://ollama.com/library |
| **llama.cpp** | Lightweight C++ inference engine (GGUF quantization). | Unlimited (CPU/GPU local). | GitHub: https://github.com/ggerganov/llama.cpp · Server Docs: https://github.com/ggerganov/llama.cpp/tree/master/examples/server |
| **Hugging Face Transformers** | Python library for loading any HF model. | Free with local execution. | GitHub: https://github.com/huggingface/transformers · Models: https://huggingface.co/models |
| **FreeBuff / OpenCode** | Community proxies for free AI coding agents. | Ad-supported, unlimited queries. | FreeBuff Proxy: https://github.com/opencode-ai/freebuff · OpenCode: https://github.com/opencode-ai/opencode |

---

## 5. Cross-Platform Wrapper Tools (Desktop & Mobile)

| Component | Description | Official URL / Repository |
|-----------|-------------|----------------------------|
| **Electron** | Builds desktop apps for Windows, macOS, and Linux using web technologies. | Official: https://www.electronjs.org/ · Docs: https://www.electronjs.org/docs/latest |
| **Electron Builder** | Packages Electron apps into .exe, .dmg, .deb, etc. | GitHub: https://github.com/electron-userland/electron-builder |
| **Capacitor** | Builds native mobile apps (Android & iOS) from a single web codebase. | Official: https://capacitorjs.com/ · Docs: https://capacitorjs.com/docs |
| **PyInstaller** | Bundles Python code + dependencies into a standalone executable (for desktop). | Official: https://pyinstaller.org/ · Docs: https://pyinstaller.org/en/stable/ |

---

## 6. Frontend & UI Dependencies (Hack2Find)

| Library | Purpose | Official URL |
|---------|---------|--------------|
| Bootstrap 5 | Responsive CSS framework & components. | https://getbootstrap.com/ |
| Font Awesome 6 | Icon library. | https://fontawesome.com/ |
| Google Fonts (Inter) | Typography. | https://fonts.google.com/specimen/Inter |
| Three.js | 3D rendering for the avatar/visual effects. | Official: https://threejs.org/ · Docs: https://threejs.org/docs/ |
| PptxGenJS | Export project docs to PowerPoint (optional). | GitHub: https://github.com/gitbrent/PptxGenJS |
| jsPDF | Export results to PDF. | GitHub: https://github.com/parallax/jsPDF |
| CryptoJS | AES-256 encryption for local storage. | GitHub: https://github.com/brix/crypto-js |

---

## 7. API Endpoints (Quick Reference)

| Service | Base URL | Authentication |
|---------|----------|----------------|
| OpenRouter Chat | https://openrouter.ai/api/v1/chat/completions | Bearer `sk-or-v1-...` |
| OpenRouter Models | https://openrouter.ai/api/v1/models | Bearer `sk-or-v1-...` |
| NVIDIA NIM Chat | https://integrate.api.nvidia.com/v1/chat/completions | Bearer `nvapi-...` |
| Ollama (Local) | http://localhost:11434/v1/chat/completions | None |
| llama.cpp (Local) | http://localhost:8080/v1/chat/completions | None |
| Agent-Reach CLI | CLI command (`agent-reach ... --json`) | Local config/cookies |
| DuckDuckGo Instant (fallback search) | https://api.duckduckgo.com/?q=...&format=json | None |

---

## 8. Quick Start

### 8.1 Clone & Install Backend (Python)

```bash
# Setup Python Virtual Environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Core Dependencies
pip install fastapi uvicorn websockets playwright browser-use
playwright install chromium

# Install Agent-Reach
pip install https://github.com/Panniantong/agent-reach/archive/main.zip

# Install Ollama (if using local models)
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.2
```

### 8.2 Setup Electron Desktop App

```bash
npm init -y
npm install electron electron-builder --save-dev
# Copy hackbot.html to frontend/ and backend/ to backend/
```

### 8.3 Setup Capacitor Mobile App

```bash
npm install @capacitor/core @capacitor/cli
npx cap init Hack2Find com.yourcompany.hack2find
npx cap add android
npx cap add ios
# Copy hackbot.html to www/ folder
```

---

## 9. Environment Variables (`.env`)

See [`.env.example`](./.env.example):

```ini
# Server
HOST=0.0.0.0
PORT=8765

# LLM APIs
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxx
NVIDIA_NIM_API_KEY=nvapi-xxxxxxxx

# Local Paths
OLLAMA_HOST=http://localhost:11434
LLAMA_CPP_HOST=http://localhost:8080

# Agent-Reach
AGENT_REACH_CONFIG_PATH=~/.agent-reach/config.yaml

# Security
ENCRYPTION_KEY=Hack2Find_Global_2026
```

**Agent-Reach Config** — see [`config/agent-reach.yaml`](./config/agent-reach.yaml):

```yaml
twitter:
  cookie: "auth_token=xxxx; ct0=xxxx"
reddit:
  cookie: "reddit_session=xxxx"
```

---

## 10. Deployment & Hosting URLs

| Service | Purpose | URL |
|---------|---------|-----|
| Netlify | Host the static web version (PWA). | https://www.netlify.com/ |
| Vercel | Alternative static hosting. | https://vercel.com/ |
| DigitalOcean | Cheap VPS to run the Cloud Agent for mobile users. | https://www.digitalocean.com/ |
| AWS EC2 | Scalable cloud agent. | https://aws.amazon.com/ec2/ |
| Railway | Easy Python backend deployment. | https://railway.app/ |

---

## 11. Full Tech Stack Summary

| Layer | Technology | URLs |
|-------|------------|------|
| Frontend UI | HTML5, CSS3, Vanilla JS + Bootstrap 5 + Three.js | See Section 6 |
| Desktop Wrapper | Electron + Electron Builder | See Section 5 |
| Mobile Wrapper | Capacitor (Android/iOS) | See Section 5 |
| Backend API | Python 3.10+, FastAPI, Uvicorn, WebSockets | https://fastapi.tiangolo.com/ |
| Browser Control | Playwright Python + Browser-Use | See Section 3 |
| Social Scraping | Agent-Reach (CLI) | See Section 3 |
| AI Inference | OpenRouter, NVIDIA NIM, Ollama, llama.cpp, Hugging Face | See Section 4 |
| Data Encryption | CryptoJS (frontend) + Python cryptography (backend) | https://cryptography.io/ |

---

## 12. Conclusion

This complete reference merges five powerful open-source ecosystems into a single,
cross-platform **Autonomous Hackathon Agent**:

- **Desktop (Win/Mac/Linux):** A standalone `.exe` / `.dmg` that runs the entire
  S-AI swarm, Playwright, and Ollama completely offline.
- **Mobile (Android/iOS):** A Capacitor app that connects to a self-hosted VPS
  agent, enabling on-the-go hackathon hunting.
- **Cost:** $0 for inference (using OpenRouter/NIM free tiers or local models).

All code, tools, and documentation are linked above — everything needed to fork,
clone, or build this system from scratch.

---

## Repository Layout

```
autonomous-hackathon-agent/
├── README.md            # This blueprint (complete technical reference)
├── .env.example         # Environment variable template
├── config/
│   └── agent-reach.yaml # Agent-Reach config template
├── docs/
│   ├── ARCHITECTURE.md  # System architecture deep-dive (Mermaid)
│   └── API_ENDPOINTS.md # API endpoint quick reference
├── scripts/
│   └── setup.sh         # One-shot backend + toolchain installer
├── backend/             # Python FastAPI agent core (scaffold)
├── frontend/            # Hack2Find web UI source
├── desktop/             # Electron shell
└── mobile/              # Capacitor shell
```

## License

MIT
