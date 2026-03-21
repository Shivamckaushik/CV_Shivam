# SHIVAM CHAND KAUSHIK

**AI/ML Engineer | Semiconductor Domain Expert**

Bangalore, India | +91-8310644891 | shivamckaushik@gmail.com | [LinkedIn](https://www.linkedin.com/in/shivam-chand-kaushik-34a723a8)

---

## Professional Summary

AI/ML engineer with 9 years of semiconductor and systems software experience spanning advanced packaging, IC inspection, and factory automation at Kulicke & Soffa and KLA. Currently pursuing M.Tech in Artificial Intelligence from IIT Jodhpur. Building production-grade AI systems — multi-agent architectures, vision-language models, and knowledge graph platforms — specifically for semiconductor manufacturing, inspection, and EDA workflows. One of a rare cohort who combines deep fab-floor domain knowledge (SECS/GEM, wire bonding, pick-and-place, machine vision) with modern AI/ML engineering (LangGraph, PyTorch, LLaVA, RAG, multi-agent orchestration). Proven ability to ship production C++ software across three countries, lead engineering teams, and deliver systems deployed to military and semiconductor customers.

---

## Education

**Indian Institute of Technology (IIT), Jodhpur** | June 2024 — Present
*Master of Technology (M.Tech) — Artificial Intelligence*

**JSS Academy of Technical Education, Noida** | June 2011 — May 2015
*Bachelor of Technology (B.Tech) — Information Technology*

---

## Core Competencies

| AI/ML & Deep Learning | Semiconductor Domain | Software & Infrastructure |
|------------------------|----------------------|---------------------------|
| PyTorch, TensorFlow, torchvision | Wafer Defect Inspection (KLA) | C++ (9 years production) |
| LangGraph, LangChain, RAG | Advanced Packaging & Wire Bonding (K&S) | Python, C#/.NET, WPF |
| LLaVA, Qwen-VL, DeepSeek-Coder | SECS/GEM Protocol (Intel integration) | FastAPI, Docker, Kubernetes |
| XGBoost, scikit-learn, SHAP | Pick & Place (iFlex, Luminex, Pixalux) | MQTT, TCP/IP, WebSocket |
| Computer Vision, CNNs, ViT | SPC, Yield Analysis, Predictive Maintenance | Neo4j, PostgreSQL, ChromaDB |
| Multi-Agent Orchestration | Smart Factory / Industry 4.0 | React, Streamlit, Git/CI-CD |

---

## AI/ML Projects

### LLM & Agentic AI Systems

#### 1. Multi-Modal Vision-Language AI for Semiconductor Inspection & Autonomous FA Report Generation

- Built a multi-modal Vision-Language system for semiconductor defect inspection by fine-tuning LLaVA-1.6 with QLoRA on semiconductor image-text pairs, enabling natural language defect description, root cause hypothesis generation, and severity reasoning directly from inspection images (SEM, optical, wafer map).
- Developed four agentic modules (Defect Describer, Root Cause Analyzer, Severity Classifier, Recipe Advisor) that correlate defect images with SECS/GEM equipment logs and a historical defect vector database (Qdrant) to generate structured Failure Analysis reports in under 2 minutes — replacing a 2-4 hour manual process.
- **Stack:** LLaVA-1.6, DINOv2, QLoRA/PEFT, LangGraph, SECS/GEM, MQTT, Qdrant, MinIO, TimescaleDB, FastAPI, Docker

#### 2. Agentic AI for HDL Code Analysis, Generation & Verification

- Architected a multi-agent system for semiconductor HDL verification: four specialized agents (RTL Analyzer, Testbench Generator, Lint/DRC, Design Space Explorer) autonomously parse Verilog/SystemVerilog, generate UVM testbenches with self-correction loops, and optimize design parameters via reinforcement learning — targeting 60-70% of the chip development cycle spent on verification.
- Integrated open-source EDA tools (Icarus Verilog, Yosys, Verilator) as agent tools with RAG over IEEE Verilog standards and design pattern libraries. Supports fully air-gapped deployment with local LLMs (DeepSeek-Coder) for semiconductor IP protection.
- **Stack:** LangGraph, DeepSeek-Coder, pyverilog, Icarus Verilog, Yosys, Qdrant, Stable-Baselines3, Optuna, FastAPI, React, Docker

#### 3. Multi-Agent Autonomous Fab Operations System

- Developed a multi-agent AI system for autonomous semiconductor fab diagnostics. Four specialized agents (Equipment Health, Yield Analyst, Recipe Optimization, Defect Inspector) collaborate through a LangGraph orchestrator to investigate yield excursions end-to-end — from SECS/GEM log anomaly detection to wafer map classification to root cause reporting.
- Implemented real-time MQTT ingestion for live equipment data, RAG over equipment manuals, human-in-the-loop approval gates, and full audit trail for regulated fab compliance. Multi-modal reasoning across SECS/GEM logs, SPC data, and wafer map images.
- **Stack:** LangGraph, PyTorch, MQTT, SECS/GEM, ChromaDB, PostgreSQL, Redis, FastAPI, React, Docker Compose, Prometheus/Grafana

#### 4. LLM-Powered SECS/GEM Protocol Assistant (RAG)

- Built a RAG-powered LLM assistant for the SECS/GEM semiconductor protocol, enabling natural language queries over SEMI standards, equipment specifications, alarm codes, and message formats. Fine-tuned retrieval on SECS/GEM documentation with FAISS vector store.
- Deployed as an interactive web application for equipment and process engineers.
- **Stack:** HuggingFace Transformers, LangChain, FAISS, Streamlit

### Deep Learning & Computer Vision

#### 5. Wafer Defect Detection & Classification (WM-811K)

- Built a deep learning pipeline for wafer defect pattern classification on the WM-811K dataset (811K+ wafer maps, 9 defect classes) using ResNet and EfficientNet architectures, with AutoEncoder-based anomaly detection for unseen defect patterns. Benchmarked against classical ML baselines (Random Forest, XGBoost).
- Deployed as a containerized inference API with FastAPI, achieving 95%+ classification accuracy across all defect classes.
- **Stack:** PyTorch, torchvision, scikit-learn, FastAPI, Docker

### Data Science & Manufacturing Analytics

#### 6. Semiconductor Yield Prediction & Explainability (SECOM)

- Developed a yield prediction model on the SECOM semiconductor manufacturing dataset (591 sensor features, extreme class imbalance at 93.4% pass rate). Applied SMOTE, mutual information, LASSO, and tree-based feature selection to identify the top 15 critical sensor parameters driving yield loss.
- Built an interpretable SHAP dashboard enabling process engineers to understand which parameters to monitor for yield improvement. Models: XGBoost, LightGBM, neural network ensemble.
- **Stack:** scikit-learn, XGBoost, LightGBM, SHAP, pandas, Streamlit

#### 7. SECS/GEM Data Analytics & Predictive Maintenance

- Built a SECS/GEM data analytics pipeline for semiconductor equipment predictive maintenance. Developed a Python library that parses SECS/GEM messages, extracts equipment state data, and applies time-series anomaly detection (Isolation Forest, LSTM) to predict equipment failures before yield impact.
- Integrated MQTT for real-time equipment data streaming, directly leveraging SECS/GEM protocol expertise from KLA/Intel production work.
- **Stack:** PyTorch (LSTM), scikit-learn, paho-mqtt, pandas, FastAPI

### Process Optimization

#### 8. Wire Bond Quality Prediction & Process Optimization

- Developed an ML-based wire bond quality prediction model using simulated bonding process data (bond force, ultrasonic power, temperature, loop height). Classified bond pass/fail with root cause analysis and applied Bayesian optimization to identify optimal bonding parameters, reducing predicted defect rate by 40%.
- **Stack:** scikit-learn, Optuna, matplotlib

---

## Work Experience

### Software Engineer — Semiconductor Assembly & Smart Factory AI
**Kulicke & Soffa (K&S)** | Netherlands & Singapore (via ASM Technologies) | Sept 2020 — Present

*K&S is a global leader in semiconductor assembly equipment for advanced packaging.*

**Wire Bonding Systems (RapidPro, ATPP) — Singapore**
- Developing and optimizing the C++ software stack for RapidPro and ATPP wire bonding machines, engineering real-time machine control systems that process high-frequency sensor data and manage process parameter optimization — building the domain expertise now applied to ML-based wire bond quality prediction and process optimization.

**Pick & Place Systems (iFlex Platform) — Netherlands**
- Architected product decoupling in the Machine Configuration Tool (MCT), enabling multi-platform support across iFlex-T2/T4/H1/CX, Luminex, and Pixalux — reducing configuration overhead for 6 machine variants.
- Integrated MQTT protocol into MCT for the Smart Factory initiative, enabling real-time machine-to-cloud data streaming for production analytics — the same MQTT architecture now used in AI/ML projects for real-time equipment data ingestion.
- Led code quality modernization: compiler warning upgrades (W3 to W4), static analysis (PVS-Studio), IWYU implementation, and Boost-to-STL migration.

### Software Engineer — IC Inspection & Machine Vision
**Quest Global Technologies** (client: **KLA/ICOS**) | Bangalore | July 2018 — Sept 2020

*KLA is the world's leading semiconductor process control and inspection equipment company.*

- Built a Python-based hardware simulator for the ICOS T800 Gantry System — a TCP/IP server modeling machine behavior for offline testing — demonstrating the simulation and digital-twin thinking applied to AI-driven inspection systems.
- Developed data logging and analytics pipelines for production metrics: tape job throughput tracking, taper parameter monitoring, and per-head performance analysis — precursors to ML-driven yield analysis and predictive maintenance.
- Implemented SECS/GEM interface for Intel — the semiconductor industry standard protocol for equipment-to-host communication in automated fabs. This protocol expertise is now the foundation for AI-driven fab diagnostics projects.
- Engineered granular process control: independent per-head "ignore pockets with pickup problems" for YZ1/YZ2/YZ4 pick & place heads, improving yield-loss diagnostics.

### Software Engineer — Telecom & Embedded Systems
**Quest Global Technologies** (client: **Reliance Jio**) | Bangalore | 2018

- Developed LibWebSocket server for IoT smart speaker integration with ONT (Optical Network Terminal) router — embedded systems communication architecture for Jio's IoT ecosystem.

### Software Engineer — Aerospace & Defense Systems
**AxisCades Aerospace & Technology** | Bangalore | May 2016 — June 2018

- Developed real-time 2D signal visualization for a Bird Detection Radar system using C++/Qt — processing and rendering live radar data streams.
- **Led a team of 5 engineers** and successfully commissioned the Aircraft Recognition Training System (ACRT) across **37 units of the Indian Army and Indian Air Force**.

---

## Achievements

- **Bright Mind Award** — ASM Technologies Ltd. (2021), recognizing exceptional technical contribution in semiconductor software engineering
- **779th Rank** — International Mathematics Olympiad (IMO), demonstrating strong analytical and quantitative aptitude

---

## Certifications (In Progress)

| Certification | Provider |
|--------------|----------|
| Fundamentals of Deep Learning | NVIDIA Deep Learning Institute (DLI) |
| AWS Certified Machine Learning Engineer — Associate | Amazon Web Services |
| Azure AI Engineer Associate (AI-102) | Microsoft |

---

## Languages

- English — Professional proficiency
- Hindi — Native

---

*Project repositories available on GitHub upon request.*
