# Enterprise-Grade LLM / Agentic AI Projects

**Date:** 2026-03-21
**Purpose:** Four enterprise-grade LLM/Agentic AI projects to dramatically boost Shivam's profile for AI/ML Engineer roles at semiconductor companies

---

## Project 6: Multi-Agent Autonomous Fab Operations System

### The Problem

In a semiconductor fab, when something goes wrong (yield drop, equipment alarm, process drift), it takes **hours to days** of manual investigation across multiple disconnected systems — SECS/GEM logs, SPC charts, equipment manuals, recipe databases, historical defect data. Senior process engineers do this manually today. There is no system that autonomously orchestrates a full investigation across all data sources.

### System Architecture

```
┌─────────────────────────────────────────────────────┐
│              Orchestrator Agent                      │
│   (Plans investigation, delegates to specialists,    │
│    synthesizes findings, recommends actions)         │
└──────┬──────────┬──────────┬──────────┬─────────────┘
       │          │          │          │
  ┌────▼───┐ ┌───▼────┐ ┌──▼───┐ ┌───▼──────┐
  │Equipment│ │ Yield  │ │Recipe│ │ Defect   │
  │ Health  │ │Analyst │ │Optim.│ │Inspector │
  │ Agent   │ │ Agent  │ │Agent │ │  Agent   │
  └────┬────┘ └───┬────┘ └──┬───┘ └───┬──────┘
       │          │         │          │
  ┌────▼───┐ ┌───▼────┐ ┌──▼───┐ ┌───▼──────┐
  │SECS/GEM│ │SPC Data│ │Recipe│ │Wafer Map │
  │  Logs  │ │& Yield │ │  DB  │ │ Images   │
  │(MQTT)  │ │History │ │      │ │          │
  └────────┘ └────────┘ └──────┘ └──────────┘
```

### The Four Specialized Agents

| Agent | Role | Tools It Uses |
|-------|------|--------------|
| **Orchestrator** | Receives user query ("Why did yield drop on Lot 4523?"), decomposes into sub-tasks, delegates, synthesizes final report | All agents, memory store |
| **Equipment Health Agent** | Parses SECS/GEM event logs, detects anomalies in equipment state transitions, correlates alarms with process events | SECS/GEM parser, time-series anomaly detector, equipment manual RAG |
| **Yield Analyst Agent** | Queries yield data, runs statistical analysis, identifies patterns across lots/wafers/layers | SQL tool, pandas, SPC chart generator |
| **Recipe Optimization Agent** | Compares process recipe parameters across good/bad lots, suggests parameter adjustments | Recipe DB, Bayesian optimizer, diff tool |
| **Defect Inspector Agent** | Analyzes wafer map images, classifies defect patterns, correlates spatial patterns with equipment/process root causes | Vision model (CNN), wafer map visualizer |

### Enterprise-Grade Architecture

```
┌────────────────────────────────────────────────────────┐
│                    Frontend (React)                      │
│   Chat Interface + Dashboard + Investigation Timeline   │
├────────────────────────────────────────────────────────┤
│                  API Gateway (FastAPI)                    │
├────────────────────────────────────────────────────────┤
│              Agent Orchestration Layer                    │
│   ┌─────────────────────────────────────────────────┐   │
│   │  LangGraph / CrewAI / Claude Agent SDK          │   │
│   │  - State machine for investigation workflows     │   │
│   │  - Agent memory (Redis)                          │   │
│   │  - Tool registry                                 │   │
│   │  - Human-in-the-loop approval gates              │   │
│   └─────────────────────────────────────────────────┘   │
├────────────────────────────────────────────────────────┤
│                    Tool Layer                             │
│   SECS/GEM Parser │ SQL Engine │ Vision Model │ RAG     │
├────────────────────────────────────────────────────────┤
│                 Data Layer                                │
│   PostgreSQL │ ChromaDB (vectors) │ Redis │ MinIO (imgs)│
├────────────────────────────────────────────────────────┤
│              Infrastructure                              │
│   Docker Compose │ MQTT Broker │ Prometheus + Grafana    │
└────────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| LLM backbone | Claude API / GPT-4 / Llama 3 (swappable) |
| Agent framework | LangGraph or CrewAI or Claude Agent SDK |
| Vector store | ChromaDB |
| SECS/GEM ingestion | Custom Python parser + MQTT (paho-mqtt) |
| Vision model | PyTorch (fine-tuned ResNet on WM-811K) |
| Database | PostgreSQL + Redis |
| API | FastAPI |
| Frontend | React + WebSocket for live updates |
| Deployment | Docker Compose, Kubernetes-ready |
| Observability | LangSmith / Prometheus + Grafana |

### Enterprise Features

1. **Human-in-the-Loop Gates** — Agents propose actions (recipe changes, equipment shutdown) but require engineer approval before execution.
2. **Audit Trail** — Every agent decision logged with reasoning chain for traceability (critical in regulated semiconductor fabs).
3. **Real-Time MQTT Ingestion** — Live equipment data streaming (Shivam already knows MQTT from K&S Smart Factory work).
4. **Multi-Modal Reasoning** — Combines text (logs), tabular (SPC data), and image (wafer maps) in a single investigation.
5. **Memory & Learning** — Stores past investigations so the system gets smarter over time.
6. **Agent-to-Agent Communication** — Equipment Health Agent can trigger Yield Analyst Agent when it detects a correlated anomaly, without waiting for the Orchestrator.

### Target Company Relevance

| Company | Why They Care |
|---------|--------------|
| **Intel** | SECS/GEM integration with fab data + autonomous yield investigation = their smart manufacturing vision |
| **Micron** | Smart manufacturing AI — this automates their process engineering workflow |
| **KLA** | Agentic architecture for inspection data reasoning, complements their product roadmap |
| **Samsung** | Multi-agent AI for fab operations aligns with their Industry 4.0 investments |
| **Synopsys** | Agentic pattern transfers to their EDA automation vision |

### Shivam's Unique Edge
- **SECS/GEM + MQTT from K&S and KLA** — the equipment integration layer is something no pure ML candidate can build
- **KLA IC inspection experience** — understands defect data workflows firsthand
- **C++ systems expertise** — can build performant real-time data processing pipelines

### Implementation Phases

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| 1 | 2 weeks | Orchestrator + Equipment Health Agent with SECS/GEM parser and MQTT ingestion |
| 2 | 1 week | Yield Analyst Agent with SQL tools and SPC chart generation |
| 3 | 1 week | Recipe Optimization Agent with parameter diff and Bayesian optimizer |
| 4 | 1 week | Defect Inspector Agent with CNN classifier and wafer map visualization |
| 5 | 1 week | Integration — LangGraph orchestration, React frontend with chat + dashboard, Docker Compose, observability |

### Resume Line
*"Architected multi-agent AI system for autonomous semiconductor fab diagnostics. Four specialized agents (equipment health, yield analysis, recipe optimization, defect inspection) collaborate via an orchestrator to investigate yield excursions — reducing diagnosis time from hours to minutes. Built with LangGraph, MQTT real-time ingestion, RAG over equipment manuals, and multi-modal reasoning (SECS/GEM logs + SPC data + wafer map images). Includes human-in-the-loop approval gates and full audit trail for fab compliance."*

### Score Impact: +10-15 points

---

## Project 7: Enterprise Knowledge Graph + Conversational AI for Semiconductor Manufacturing Intelligence

### The Problem

Semiconductor manufacturing knowledge is trapped in silos:
- Equipment manuals (PDFs, 1000s of pages per machine)
- SEMI standards documents (SECS/GEM, E10, E30, etc.)
- Process recipes (proprietary formats)
- Tribal knowledge (in engineers' heads)
- Defect libraries (images + descriptions)
- Vendor specifications
- Internal SOPs and runbooks

No single system connects all of these. When a new engineer joins or an unusual problem occurs, finding the right information is a needle-in-a-haystack exercise.

### What It Does

An **enterprise knowledge platform** that ingests all manufacturing knowledge sources, builds a structured knowledge graph, and exposes it through a conversational AI interface — a "semiconductor manufacturing brain."

**Example interaction:**
```
Engineer: "What causes edge-ring defects on the KLA T800 during high-temp bonding?"

System:  "Edge-ring defects on T800 are typically caused by [3 root causes
         with confidence]. Based on similar cases in Q3 2025:
         - Recipe adjustment: reduce temp by 5°C
         - Equipment check: inspect collet alignment
         - See: SOP-2847, Defect Library entry #412"
```

### System Architecture

```
┌──────────────────────────────────────────────────────────┐
│              Conversational Interface                      │
│  (Natural language queries over manufacturing knowledge)  │
└──────────────┬───────────────────────────────────────────┘
               │
┌──────────────▼───────────────────────────────────────────┐
│                   Query Engine                             │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────────┐   │
│  │ Intent   │  │ Knowledge    │  │ Response           │   │
│  │ Router   │→ │ Graph Query  │→ │ Generator (LLM)    │   │
│  │          │  │ + RAG Hybrid │  │ + Citation Engine   │   │
│  └──────────┘  └──────────────┘  └───────────────────┘   │
└──────────────────────────────────────────────────────────┘
               │
┌──────────────▼───────────────────────────────────────────┐
│              Knowledge Graph (Neo4j)                       │
│                                                            │
│  [Equipment]──uses──→[Recipe]──produces──→[Product]       │
│       │                  │                    │            │
│    has_alarm          has_param           has_defect       │
│       │                  │                    │            │
│  [Alarm Code]      [Parameter]          [Defect Type]     │
│       │                  │                    │            │
│  documented_in      affects               root_cause      │
│       │                  │                    │            │
│  [Manual/SOP]       [Yield]             [Process Step]    │
└──────────────────────────────────────────────────────────┘
               │
┌──────────────▼───────────────────────────────────────────┐
│              Ingestion Pipeline                            │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│  │PDF     │ │SECS/GEM│ │Recipe  │ │Defect  │ │Internal│ │
│  │Manuals │ │Specs   │ │Files   │ │Library │ │SOPs    │ │
│  └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘ │
│      └──────────┴──────────┴──────────┴──────────┘        │
│                         │                                  │
│              ┌──────────▼──────────┐                       │
│              │ Document Processor   │                      │
│              │ - PDF chunking       │                      │
│              │ - Entity extraction  │                      │
│              │ - Relation extraction│                      │
│              │ - Embedding gen      │                      │
│              └─────────────────────┘                       │
└──────────────────────────────────────────────────────────┘
```

### Key Innovation: Graph RAG Hybrid

Standard RAG retrieves text chunks. This system combines:
1. **Knowledge Graph traversal** — structured queries ("What equipment produces this defect type?")
2. **Vector search (RAG)** — semantic similarity over unstructured docs
3. **LLM synthesis** — combines both sources into a coherent, cited answer

This is superior to pure RAG because semiconductor knowledge is inherently **relational** — equipment connects to recipes connects to defects connects to root causes. A graph captures this; flat vector search doesn't.

### Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Knowledge Graph | **Neo4j** | Store entities & relationships (equipment, recipes, defects, SOPs) |
| Vector Store | **ChromaDB / Weaviate** | Semantic search over document chunks |
| LLM | **Claude API / Llama 3** (swappable) | Query understanding, response generation, entity extraction |
| Entity Extraction | **spaCy + fine-tuned NER** | Extract semiconductor entities from documents (equipment names, defect types, parameters) |
| Relation Extraction | **LLM-based** | Identify relationships between entities |
| Document Processing | **LangChain + Unstructured.io** | PDF parsing, chunking, metadata extraction |
| API | **FastAPI + GraphQL** | Query interface for frontend and programmatic access |
| Frontend | **React + Cytoscape.js** | Chat + interactive knowledge graph visualization |
| Auth | **OAuth2 / LDAP** | Enterprise SSO integration |
| Deployment | **Docker Compose → Kubernetes** | Production-ready, scalable |
| Observability | **LangSmith + ELK stack** | Query analytics, response quality monitoring |

### Enterprise Features

1. **Citation Engine** — Every answer links back to source documents (page, section). Critical for manufacturing compliance — engineers can't act on uncited AI answers.

2. **Access Control** — Role-based access to knowledge (operator vs. process engineer vs. equipment engineer). Some recipes/SOPs are restricted.

3. **Feedback Loop** — Engineers rate answers, correct mistakes → fine-tune retrieval and entity extraction over time.

4. **Multi-Language Document Support** — Equipment manuals come from Japanese (Tokyo Electron), Dutch (ASML, K&S), Korean (Samsung) vendors.

5. **Versioned Knowledge** — Track how knowledge evolves — recipe v3.2 replaced v3.1 on date X. Historical queries possible.

6. **Offline Mode** — Fabs often have restricted internet. System runs fully on-premise with local LLM (Llama 3).

7. **API-First** — Other fab systems (MES, SPC tools) can query the knowledge graph programmatically.

### Target Company Relevance

| Company | Why They Care |
|---------|--------------|
| **Jio** | Directly maps to Jio Brain's knowledge management and LLM-as-a-service vision |
| **Microsoft** | Knowledge graph + conversational AI = Azure AI product skills |
| **Samsung** | Manufacturing intelligence platform for their fab operations |
| **Intel** | Enterprise knowledge management across their global fabs |
| **Micron** | Onboarding and tribal knowledge preservation for smart manufacturing |
| **KLA** | Customer-facing knowledge base for inspection equipment |

### Shivam's Unique Edge
- **SECS/GEM and SEMI standards knowledge** — understands the documents being ingested, not just the NLP pipeline
- **K&S and KLA experience** — knows what equipment manuals look like and what engineers actually search for
- **Multi-company exposure** — Netherlands (K&S), Singapore, India — understands diverse manufacturing contexts

### Implementation Phases

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| 1 | 2 weeks | Ingestion pipeline — PDF parsing, entity extraction (spaCy NER fine-tuned on semiconductor terms), Neo4j schema design and population |
| 2 | 1 week | Graph RAG hybrid query engine — Neo4j Cypher queries + ChromaDB vector search + LLM synthesis with citation |
| 3 | 1 week | Conversational interface — FastAPI backend, React frontend with chat + Cytoscape.js graph visualization |
| 4 | 1 week | Enterprise features — OAuth2 auth, feedback loop, versioned knowledge, offline mode with local Llama 3 |
| 5 | 1 week | Integration testing, Docker Compose deployment, LangSmith observability, demo with 50+ semiconductor documents |

### Resume Line
*"Built enterprise knowledge graph platform for semiconductor manufacturing intelligence. Ingests equipment manuals, SEMI standards, process recipes, and defect libraries into a Neo4j knowledge graph with 50K+ entities and 200K+ relationships. Graph RAG hybrid query engine combines structured graph traversal with semantic vector search, synthesized by LLM with full citation trail. Supports on-premise deployment with local LLM for air-gapped fab environments. Built with Neo4j, ChromaDB, LangChain, FastAPI, React, and Cytoscape.js."*

### Score Impact: +8-12 points

---

## Project 8: Agentic AI for HDL Code Analysis, Generation & Verification

### The Problem

Chip design verification consumes **60-70% of the total chip development cycle**. Engineers spend weeks manually writing SystemVerilog testbenches, debugging RTL, reviewing design rule violations, and iterating on timing closure. Synopsys is explicitly hiring for "Agentic AI for EDA." Samsung needs "RL for design exploration." Intel needs engineers who understand both ML and chip design flows.

No open-source or portfolio-grade project demonstrates an agentic system that can reason about HDL code, generate testbenches, and autonomously iterate on design issues.

### System Architecture

```
                        +---------------------------+
                        |    User Interface (Web)    |
                        |  Upload HDL / Describe Spec|
                        +------------+--------------+
                                     |
                        +------------v--------------+
                        |    Orchestrator Agent       |
                        |  (LangGraph State Machine)  |
                        +--+------+------+------+---+
                           |      |      |      |
              +------------+  +---+---+  +--+---+-------+
              |               |       |  |              |
    +---------v---------+ +--v----+ +-v--v------+ +----v--------+
    | RTL Analyzer Agent| |TestGen| |Lint/DRC   | |Design Space |
    | - Parse Verilog/  | |Agent  | |Agent      | |Explorer     |
    |   SystemVerilog   | | - Gen | | - Static  | |Agent        |
    | - AST extraction  | |  test | |   analysis| | - Parameter |
    | - Code understand | |  bench| | - Rule    | |   sweep     |
    |   via LLM         | |  from | |   check   | | - RL-guided |
    | - Explain modules | |  spec | | - Fix     | |   optim.    |
    +-------------------+ +-------+ |   suggest | +-------------+
                                     +-----------+
                           |      |      |      |
                        +--v------v------v------v---+
                        |     Tool Layer              |
                        | - Icarus Verilog simulator  |
                        | - Yosys synthesis engine    |
                        | - Verilator linting         |
                        | - Python waveform analyzer  |
                        +------------+--------------+
                                     |
                        +------------v--------------+
                        |   RAG Knowledge Base        |
                        | - IEEE Verilog/SV specs     |
                        | - Design pattern library    |
                        | - Common bug patterns DB    |
                        | - Timing constraint refs    |
                        +---------------------------+
                                     |
                        +------------v--------------+
                        |   Vector DB (Qdrant) +      |
                        |   Code Embedding Store      |
                        +---------------------------+
```

### The Four Specialized Agents

#### 1. RTL Analyzer Agent
- Parses Verilog/SystemVerilog using `pyverilog` or `slang` (open-source SV parser with C++ backend — leverages Shivam's C++ to contribute/extend)
- Feeds AST + code to an LLM (CodeLlama-34B or DeepSeek-Coder-V2) for natural language explanation
- Answers questions like: "What does this FSM do?", "Where are the clock domain crossings?", "Is there a latch inferred here?"
- Uses RAG over Verilog coding standards and design pattern libraries

#### 2. Testbench Generation Agent
- Takes a module specification (natural language or interface definition) and generates SystemVerilog/UVM testbenches
- Uses constrained generation with Verilog grammar to ensure syntactic correctness
- Runs generated testbenches through Icarus Verilog, reads simulation output, and iteratively fixes failures (agentic loop)
- This is the "wow factor" — autonomous test generation with self-healing

#### 3. Lint/DRC Agent
- Runs Verilator lint, Yosys synthesis checks
- Interprets warnings/errors using LLM and suggests fixes
- Can auto-apply fixes with user approval (tool-use pattern)
- Maps violations to IEEE standard sections via RAG

#### 4. Design Space Explorer Agent
- For parameterized designs (e.g., FIFO depth, pipeline stages, bus width)
- Uses Bayesian optimization or RL (PPO) to explore parameter space
- Objective: minimize area/power/timing from Yosys synthesis reports
- Reports Pareto-optimal configurations with natural language explanation

### Tech Stack

| Component | Technology | Justification |
|-----------|-----------|---------------|
| Agent Framework | LangGraph (LangChain) | State machine-based agent orchestration, supports complex multi-step workflows with human-in-the-loop |
| LLM (Primary) | DeepSeek-Coder-V2 33B (local) or GPT-4o (API) | Best-in-class code understanding; configurable for air-gapped/cloud |
| LLM (Embeddings) | CodeBERT or StarEncoder | Code-specific embeddings for RAG retrieval |
| Vector DB | Qdrant | Open-source, fast, supports code similarity search |
| HDL Parser | pyverilog + slang (C++ SV parser) | Shivam can contribute to slang given C++ expertise |
| Simulator | Icarus Verilog (open-source) | Free, widely used, supports SV subset |
| Synthesis | Yosys | Open-source synthesis for area/timing reports |
| Linting | Verilator | Industry-standard open-source linter |
| RL/Optimization | Stable-Baselines3 (PPO) + Optuna | Design space exploration |
| Backend | FastAPI + WebSocket | Real-time agent status streaming |
| Frontend | React + Monaco Editor (VS Code editor component) | Code editing with syntax highlighting |
| Observability | LangSmith + Prometheus | Agent trace debugging, latency monitoring |
| Containerization | Docker Compose | Orchestrates all services |
| CI/CD | GitHub Actions | Automated testing of agent pipelines |

### Enterprise Features

1. **Air-Gapped Local LLM** — Semiconductor companies will NEVER send proprietary RTL to external APIs. System runs fully on-premise with local models (DeepSeek-Coder, CodeLlama). This single feature makes it viable for real deployment.

2. **Human-in-the-Loop Approval Gates** — Agent proposes changes, engineer approves/rejects before execution. Critical in semiconductor where incorrect RTL changes can cost millions.

3. **Audit Trail** — Every agent decision logged with reasoning chain, traceable for ISO 9001/IATF 16949 compliance.

4. **Role-Based Access Control** — Design leads can configure which agents are allowed to auto-execute vs. require approval.

5. **Plugin Architecture** — New agents (e.g., power analysis, formal verification) can be added without modifying the orchestrator.

6. **Metrics Dashboard** — Track testbench coverage improvement, bug detection rate, design exploration efficiency.

### Target Company Relevance

| Company | Why They Care |
|---------|--------------|
| **Synopsys** | This IS their "Agentic AI for EDA" vision. Shows Shivam can architect exactly what they're building. |
| **Samsung** | RL-based design exploration + HDL code generation = their ML accelerator IP design workflow. |
| **Intel** | Design verification automation directly reduces their chip development cycle. |
| **Microsoft** | LLM-for-code architecture (Copilot-like) applied to a specialized domain. |
| **ValueLabs** | EDA services + AI = exactly their growth area. |

### Shivam's Unique Edge
- **C++ expertise (9 years):** Can extend slang (C++ SystemVerilog parser), optimize critical paths, build native tool integrations that pure Python engineers cannot
- **Semiconductor domain:** Understands what RTL verification actually involves — can design realistic agent workflows, not toy demos
- **Systems thinking:** Production software experience means robust architecture, not a Jupyter notebook hack

### Implementation Phases

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| 1 | 2 weeks | RTL Analyzer Agent — parse Verilog with pyverilog, build RAG over Verilog spec docs, demonstrate "explain this module" on 10 open-source designs from OpenCores |
| 2 | 2 weeks | Testbench Generation Agent — module interfaces → testbenches → Icarus Verilog → self-correction loop (3 retries with error feedback) |
| 3 | 1 week | Lint/DRC Agent — Verilator integration, LLM-generated fix suggestions |
| 4 | 1 week | Design Space Explorer — parameterized FIFO/ALU designs, Yosys synthesis in loop, Optuna/RL optimization |
| 5 | 1 week | Integration — LangGraph orchestrator, FastAPI backend, React frontend with Monaco editor, Docker Compose, LangSmith observability |

### Resume Line
*"Architected multi-agent AI system for semiconductor HDL verification automation. Four specialized agents (RTL analyzer, testbench generator, lint/DRC, design space explorer) autonomously analyze Verilog/SystemVerilog, generate UVM testbenches with self-correction, and optimize design parameters via RL — reducing verification cycle time. Built with LangGraph, DeepSeek-Coder, Icarus Verilog, Yosys, and Qdrant. Supports air-gapped deployment with local LLMs for semiconductor IP protection."*

---

## Project 9: Multi-Modal Vision-Language AI for Semiconductor Inspection + Autonomous FA Report Generation

### The Problem

Semiconductor inspection today (KLA's core business, where Shivam worked) generates **millions of images per day** — SEM images, optical microscopy images, wafer maps, cross-section micrographs. Currently:

1. **Defect classification models** output a class label but cannot explain WHY a defect looks the way it does or what process step likely caused it
2. **Failure Analysis (FA) reports** are written manually by engineers, taking **2-4 hours per report**, requiring them to cross-reference images with process data, historical defect databases, and equipment logs
3. **Recipe engineers** must manually interpret inspection results and adjust tool parameters — no system "sees" the defect image AND "understands" the process context simultaneously

KLA is explicitly hiring for **"Vision Language Models for defect classification."** This project builds exactly that, plus adds agentic report generation that no one else is doing.

### System Architecture

```
                    +--------------------------------+
                    |  Inspection Image Input         |
                    |  (SEM, Optical, Wafer Map)      |
                    +---------------+----------------+
                                    |
                    +---------------v----------------+
                    |  Vision Encoder (DINOv2/SigLIP) |
                    |  - Feature extraction            |
                    |  - Defect region attention        |
                    +---------------+----------------+
                                    |
                    +---------------v----------------+
                    |  Vision-Language Model            |
                    |  (LLaVA-1.6 / Qwen-VL-Chat)     |
                    |  Fine-tuned on semiconductor      |
                    |  inspection image-text pairs      |
                    +---+----------+----------+------+
                        |          |          |
           +------------+   +-----+------+   +--------+
           |                |            |             |
    +------v--------+ +----v-------+ +--v----------+ +v--------------+
    |Defect Describer| |Root Cause  | |Severity     | |Recipe Advisor  |
    |Agent           | |Analyzer    | |Classifier   | |Agent           |
    |- NL description| |Agent       | |Agent        | |- Suggest tool  |
    |  of defect     | |- Cross-ref | |- Critical/  | |  param changes |
    |  morphology    | |  with equip| |  major/     | |- Based on      |
    |- Compare to    | |  logs      | |  minor/     | |  defect pattern|
    |  known patterns| |- SECS/GEM  | |  nuisance   | |  + process data|
    +-------+--------+ |  event     | +------+------+ +-------+--------+
            |          |  correlation|        |               |
            |          +-----+------+        |               |
            |                |               |               |
    +-------v----------------v---------------v---------------v---+
    |              Report Generation Agent                        |
    |  - Assembles structured FA report (PDF/HTML)                |
    |  - Annotated images + defect descriptions + root cause      |
    |  - Trend analysis (is this defect increasing over time?)    |
    |  - Recommended actions with confidence scores               |
    +----------------------------+-------------------------------+
                                 |
    +----------------------------v-------------------------------+
    |                    Enterprise Layer                          |
    | +------------------+ +----------------+ +----------------+  |
    | | SECS/GEM Gateway | | Equipment DB   | | Historical     |  |
    | | (Real-time equip | | (Process params| | Defect DB      |  |
    | |  state + events) | |  per wafer lot)| | (Vector search)|  |
    | +------------------+ +----------------+ +----------------+  |
    | +------------------+ +----------------+ +----------------+  |
    | | MQTT Broker      | | PostgreSQL +   | | MinIO (image   |  |
    | | (Event streaming)| | TimescaleDB    | | object store)  |  |
    | +------------------+ +----------------+ +----------------+  |
    +------------------------------------------------------------+
```

### The Multi-Modal VLM Pipeline

#### Step 1: Vision Encoder Fine-Tuning
- Base model: DINOv2 (self-supervised vision transformer) or SigLIP (contrastive vision-language)
- Fine-tune on semiconductor inspection images using a synthetic dataset:
  - WM-811K wafer maps (811K images, 9 defect classes) as one modality
  - Generate synthetic SEM-like images using StyleGAN2 trained on publicly available SEM datasets
  - Create image-text pairs: each defect image paired with detailed textual description of defect morphology, likely cause, and severity
- Result: a semiconductor-specialized vision encoder that "understands" fab defects

#### Step 2: Vision-Language Model Fine-Tuning
- Base: LLaVA-1.6-13B or Qwen-VL-Chat (open-source VLMs)
- Fine-tune with LoRA on semiconductor image-text pairs
- Capabilities after fine-tuning:
  - "Describe this defect" → generates morphological description
  - "What process step likely caused this?" → root cause hypothesis
  - "Compare this to the scratch defect pattern" → similarity reasoning
  - "Is this a nuisance defect or killer defect?" → severity classification with explanation

#### Step 3: Agentic Report Generation
- **Defect Describer Agent** processes image through VLM
- **Root Cause Analyzer Agent** cross-references with:
  - SECS/GEM equipment event logs to find what the equipment was doing when this wafer was processed
  - Process parameter database to identify out-of-spec conditions
  - Historical defect database (vector similarity search) to find similar past defects and confirmed root causes
- **Severity Classifier Agent** assigns severity based on defect location (die edge vs. center), size, density, and pattern (random vs. systematic)
- **Recipe Advisor Agent** suggests process parameter adjustments based on defect type and root cause
- **Report Generation Agent** assembles everything into a structured failure analysis report

### Tech Stack

| Component | Technology | Justification |
|-----------|-----------|---------------|
| Vision-Language Model | LLaVA-1.6-13B or Qwen-VL-Chat | Open-source, fine-tunable, proven multi-modal capability |
| Vision Encoder | DINOv2 (ViT-L/14) | State-of-art self-supervised features, no labels needed for pre-training |
| Fine-tuning | LoRA via HuggingFace PEFT + bitsandbytes (4-bit QLoRA) | Trainable on single A100/H100, memory-efficient |
| SEM Image Synthesis | StyleGAN2-ADA (PyTorch) | Generate realistic synthetic SEM images for training data augmentation |
| Agent Framework | LangGraph | Multi-agent orchestration with conditional routing |
| SECS/GEM Integration | Custom Python library (reuse from Project 3) | Leverages prior work, shows integrated portfolio thinking |
| MQTT | Eclipse Mosquitto + paho-mqtt | Real-time equipment event streaming |
| Image Storage | MinIO (S3-compatible) | Enterprise object storage for inspection images |
| Time-Series DB | TimescaleDB (PostgreSQL extension) | Equipment telemetry and process parameters |
| Vector DB | Qdrant | Historical defect similarity search |
| Report Generation | Jinja2 templates + WeasyPrint (PDF) | Structured FA reports in industry-standard format |
| Backend | FastAPI + Celery (async tasks) | Image processing is async; report generation can take minutes |
| Frontend | React + OpenSeadragon (image viewer) | Zoomable high-res inspection images with annotation overlay |
| Model Serving | vLLM or TGI (Text Generation Inference) | High-throughput VLM inference |
| Observability | LangSmith + Grafana + Prometheus | Agent tracing, system health monitoring |
| Containerization | Docker Compose / Kubernetes | Multi-service orchestration |

### Enterprise Features

1. **Fully Air-Gapped Deployment** — All models run locally. Semiconductor inspection images are extremely sensitive IP — this system NEVER sends data externally. This single feature makes it viable for real fab deployment.

2. **SECS/GEM Real-Time Integration** — Pulls live equipment state via SECS/GEM protocol, correlating defects with equipment events in real-time. This is Shivam's unique differentiator — no other AI portfolio candidate has SECS/GEM integration.

3. **Automated FA Reports with Human Review** — Generates draft FA reports in 2 minutes instead of 2-4 hours, but always routes through engineer review before release. Saves 10-20 hours per week per FA engineer.

4. **Historical Defect Knowledge Flywheel** — Every confirmed defect + root cause pair stored as embeddings. System gets smarter over time — classic enterprise flywheel.

5. **Configurable Severity Thresholds** — Fab managers can adjust what constitutes "critical" vs. "nuisance" based on product/technology node.

6. **Multi-Tool Support** — Works with data from multiple inspection tools (optical, SEM, wafer-level), not locked to one vendor.

7. **Audit Compliance** — Full traceability of every classification decision, root cause hypothesis, and recommendation — required for automotive (IATF 16949) and military semiconductor qualifications.

### Target Company Relevance

| Company | Why They Care |
|---------|--------------|
| **KLA** | This is literally the future of their product line. VLMs for inspection is their active R&D area. Shivam building this with knowledge of their ICOS T800 is devastating. |
| **Intel** | FA report automation saves process engineers hundreds of hours. SECS/GEM integration with fab data infrastructure is directly applicable. |
| **Micron** | Smart manufacturing AI — automated defect analysis is a top priority for memory fabs processing millions of wafers. |
| **Samsung** | Physics-informed defect understanding + multi-modal AI aligns with their ML research direction. |
| **Synopsys** | Multi-modal AI architecture pattern transfers to DFM (Design for Manufacturing) tools bridging design and fab. |
| **Microsoft** | Multi-modal AI + agentic architecture = exactly the skills needed for Azure AI product development. |
| **Jio** | Edge deployment of VLMs for industrial AI — relevant to Jio Brain's industrial AI ambitions. |

### Shivam's Unique Edge
- **Former KLA/ICOS engineer:** Knows exactly what inspection data looks like, what the workflow is, what engineers need — not academic guessing
- **SECS/GEM + MQTT expertise:** Equipment integration layer is a massive differentiator. Pure ML candidates cannot build this.
- **C++ for performance:** VLM inference optimization, custom image preprocessing pipelines, integration with C++ inspection tool APIs
- **C#/WPF experience:** Can build the kind of desktop configuration tools that fab engineers actually use

### Implementation Phases

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| 1 | 2 weeks | Synthetic dataset pipeline — WM-811K wafer maps with generated text descriptions, 10K image-text pairs. Fine-tune DINOv2 on wafer/defect images. |
| 2 | 2 weeks | Fine-tune LLaVA/Qwen-VL with QLoRA on semiconductor image-text pairs. Demo: defect description, severity classification, visual Q&A. |
| 3 | 1 week | Root Cause Analyzer Agent with SECS/GEM event log correlation and historical defect vector search. |
| 4 | 1 week | Report Generation Agent — Jinja2 templates for FA reports, PDF output with annotated images. |
| 5 | 1 week | Integration — LangGraph orchestrator, FastAPI backend, React frontend with image viewer, Docker Compose, metrics dashboard. |

### Resume Line
*"Built multi-modal Vision-Language AI for semiconductor inspection with autonomous Failure Analysis report generation. Fine-tuned LLaVA-1.6 with QLoRA on semiconductor image-text pairs for defect description, root cause hypothesis, and severity reasoning. Four agentic tasks correlate defect images with SECS/GEM equipment logs and historical defect database for automated root cause analysis. Generates structured FA reports in 2 minutes vs. 2-4 hours manually. Fully air-gapped deployment with local VLM for semiconductor IP protection."*

---

## Why These Four Projects Together Are Devastating

### Coverage Across the Semiconductor Value Chain

| Domain | Project |
|--------|---------|
| Fab Operations & Diagnostics | Project 6 (Multi-Agent Fab Ops) |
| Manufacturing Knowledge & Onboarding | Project 7 (Knowledge Graph + Conversational AI) |
| Chip Design & Verification | Project 8 (HDL Agentic AI) |
| Inspection & Failure Analysis | Project 9 (Multi-Modal Inspection AI) |

### Coverage of Hottest AI Paradigms

| Paradigm | Project |
|----------|---------|
| Multi-Agent Orchestration | Project 6 (4 fab agents with orchestrator) |
| Knowledge Graphs + Graph RAG | Project 7 (Neo4j + hybrid retrieval) |
| Agentic AI + Code LLMs | Project 8 (4 EDA agents with self-healing) |
| Multi-Modal Vision-Language AI | Project 9 (VLM + agentic report generation) |

### Unreplicable by Competitors
- A pure ML engineer cannot build the SECS/GEM integration, HDL parser toolchain, or equipment knowledge graph
- A pure semiconductor engineer cannot build VLM fine-tuning, LangGraph orchestration, or Graph RAG
- **Shivam is the only candidate who can build all four**

### Complete Portfolio Story (Projects 1-9)

| AI Modality | Project |
|-------------|---------|
| Tabular/Classical ML | Projects 2, 4 (Yield, Wire Bond) |
| Time-Series | Project 3 (SECS/GEM Predictive Maintenance) |
| Computer Vision | Project 1 (Wafer Defect Detection) |
| NLP / RAG | Project 5 (LLM SECS/GEM Assistant) |
| **Multi-Agent Systems** | **Project 6 (Autonomous Fab Operations)** |
| **Knowledge Graphs + Graph RAG** | **Project 7 (Manufacturing Intelligence)** |
| **Code Generation / Agentic AI** | **Project 8 (HDL Verification AI)** |
| **Multi-Modal Vision-Language** | **Project 9 (Inspection VLM)** |

This portfolio covers **every AI modality** applied to **every semiconductor domain** (design, manufacturing, inspection, packaging). No other candidate has this range with this depth.

---

## Combined Score Impact

| Metric | Before | After Projects 6-9 |
|--------|--------|-------------------|
| Profile Score | 52/100 | 90+/100 |
| Project 6 impact | — | +10-15 pts |
| Project 7 impact | — | +8-12 pts |
| Project 8 impact | — | +10-15 pts |
| Project 9 impact | — | +10-15 pts |
| Company coverage | Partial | Complete (design + manufacturing + inspection + operations) |
| AI paradigm coverage | Classical ML + basic LLM | Full spectrum: Agentic + Multi-Modal + Knowledge Graphs + Multi-Agent |

---

## Enterprise Projects at a Glance

| Project | Core AI Paradigm | Primary Targets | Shivam's Key Leverage | Timeline |
|---------|-----------------|----------------|----------------------|----------|
| **6. Fab Ops** | Multi-Agent Orchestration | Intel, Micron, KLA | SECS/GEM + MQTT | 6 weeks |
| **7. Knowledge Graph** | Graph RAG Hybrid | Jio, Microsoft, Samsung | Domain knowledge + multi-vendor experience | 6 weeks |
| **8. HDL Agent** | Agentic AI + Code LLMs | Synopsys, Samsung, Intel | C++ (9 yrs) + semiconductor domain | 7 weeks |
| **9. Inspection VLM** | Multi-Modal VLM | KLA, Intel, Micron | Former KLA engineer + SECS/GEM | 7 weeks |

---

*Research sources: Synopsys career listings (Bengaluru, Noida), KLA career listings (Chennai, Milpitas), LinkedIn India AI/ML jobs, Indeed India semiconductor AI jobs, NVIDIA semiconductor blog, SPIE/DAC/ISSM conference proceedings (March 2026).*
