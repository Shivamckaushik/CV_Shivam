# SHIVAM CHAND KAUSHIK

**AI/ML Engineer | Semiconductor Domain Expert**

Bangalore, India | +91-8310644891 | shivamckaushik@gmail.com | [LinkedIn](https://www.linkedin.com/in/shivam-chand-kaushik-34a723a8)

---

## Professional Summary

AI/ML engineer with 9 years of semiconductor and systems software experience spanning advanced packaging, IC inspection, and factory automation at Kulicke & Soffa and KLA. Currently pursuing M.Tech in Artificial Intelligence from IIT Jodhpur. Building production-grade AI systems — multi-agent architectures, vision-language models, and knowledge graph platforms — specifically for semiconductor manufacturing, inspection, and EDA workflows. One of a rare cohort who combines deep fab-floor domain knowledge (SECS/GEM, wire bonding, pick-and-place, machine vision) with modern AI/ML engineering (LangGraph, PyTorch, LLaVA, RAG, multi-agent orchestration). Proven ability to ship production C++ software across three countries, lead engineering teams, and deliver systems deployed to military and semiconductor customers.

---

## Education

**Indian Institute of Technology (IIT), Jodhpur** | June 2024 — May 2026
*Master of Technology (M.Tech) — Artificial Intelligence*

**JSS Academy of Technical Education, Noida** | June 2011 — May 2015
*Bachelor of Technology (B.Tech) — Information Technology*

---

## Core Competencies

| AI/ML & Deep Learning | Semiconductor Domain | Software & Infrastructure |
|------------------------|----------------------|---------------------------|
| PyTorch, TensorFlow, torchvision | Wafer Defect Inspection (KLA) | C++ (9 years production) |
| LangGraph, LangChain, RAG | Advanced Packaging & Wire Bonding (K&S) | Python |
| LLaVA, Qwen-VL, DeepSeek-Coder | SECS/GEM Protocol (Intel integration) | FastAPI |
| XGBoost, scikit-learn, SHAP | Pick & Place (iFlex, Luminex, Pixalux) | React, Streamlit |
| Computer Vision, CNNs, ViT | SPC, Yield Analysis, Predictive Maintenance | Git/CI-CD |
| Multi-Agent Orchestration | Smart Factory / Industry 4.0 | |

---

## AI/ML Projects

#### 1. Multi-Modal Vision-Language AI for Semiconductor Inspection & Autonomous FA Report Generation
[GitHub](https://github.com/Shivamckaushik/SemiFA) | [HuggingFace Dataset](https://huggingface.co/datasets/ShivamChand/SemiFA-930)

- Built a four-agent LangGraph pipeline (Defect Describer, Root Cause Analyzer, Severity Classifier, Recipe Advisor) that fuses DINOv2 visual embeddings, SECS/GEM-format equipment telemetry, and a Qdrant historical defect retrieval database into a unified LLaVA-1.6 context — generating structured Failure Analysis reports in 48 seconds, replacing a 2–4 hour manual process.
- Trained a DINOv2 + MLP defect classifier on SemiFA-930, a self-constructed 930-image dataset spanning 9 semiconductor defect classes (SEM, optical, wafer map); achieved 92.1% accuracy / 0.917 Macro F1 with only 214K trainable parameters vs. 23.5M for ResNet-50 (82.9%).
- Publicly released SemiFA-930 dataset on HuggingFace; paper prepared for arXiv submission (cs.CV).
- **Stack:** LLaVA-1.6, DINOv2, QLoRA/PEFT, LangGraph, SECS/GEM, Qdrant, FastAPI, ReportLab, Streamlit

#### 2. Wafer Defect Detection & Classification (WM-811K)
[GitHub](https://github.com/Shivamckaushik/Visual-inspection-for-Wafer-Defect-Detection-Classification-WM-811K-.git)

- Built an end-to-end deep learning pipeline for wafer defect pattern classification on the WM-811K dataset (811K+ wafer maps, 9 defect classes) using ResNet18 and EfficientNet-B0 architectures, with a ConvAutoEncoder for anomaly detection on unseen defect patterns. Achieved 96.2% overall test accuracy and 90.5% defect-class accuracy on a severely class-imbalanced dataset (103,201 normal vs 104 Near-Full samples); resolved class collapse via WeightedRandomSampler and diagnosed 6 critical training bugs across normalization, BatchNorm domain shift, and loss double-suppression.
- Deployed as a FastAPI inference server with `/classify` and `/anomaly-detect` endpoints; live end-to-end API testing confirmed 91–94% confidence across 7 of 8 defect classes on real WM-811K wafer maps. Anomaly threshold calibrated at the 95th percentile of normal-wafer reconstruction error.
- **Stack:** PyTorch, torchvision, scikit-learn, FastAPI

#### 3. LLM-Powered SECS/GEM Protocol Assistant (RAG) *(Applied at Kulicke & Soffa)*

- Built a RAG-powered LLM assistant for the SECS/GEM semiconductor protocol, enabling natural language queries over SEMI standards, equipment specifications, alarm codes, and message formats. Fine-tuned retrieval on SECS/GEM documentation with FAISS vector store.
- Deployed as an interactive web application for equipment and process engineers in semiconductor fabs.
- **Stack:** HuggingFace Transformers, LangChain, FAISS, Streamlit

#### 4. Wire Bond Quality Prediction & Process Optimization *(Applied at Kulicke & Soffa)*

- Developed an ML-based wire bond quality prediction model using process data (bond force, ultrasonic power, temperature, loop height) modeled on K&S RapidPro and ATPP machine parameters. Classified bond pass/fail with root cause analysis and applied Bayesian optimization to identify optimal bonding parameters, reducing predicted defect rate by 40%.
- **Stack:** scikit-learn, Optuna, matplotlib

#### 5. Agentic AI for HDL Code Analysis, Generation & Verification *(Applied at Kulicke & Soffa)*

- Architected a multi-agent system for semiconductor HDL verification: four specialized agents (RTL Analyzer, Testbench Generator, Lint/DRC, Design Space Explorer) autonomously parse Verilog/SystemVerilog, generate UVM testbenches with self-correction loops, and optimize design parameters via reinforcement learning — targeting 60-70% of the chip development cycle spent on verification.
- Integrated open-source EDA tools (Icarus Verilog, Yosys, Verilator) as agent tools with RAG over IEEE Verilog standards and design pattern libraries. Supports fully air-gapped deployment with local LLMs (DeepSeek-Coder) for semiconductor IP protection.
- **Stack:** LangGraph, DeepSeek-Coder, pyverilog, Icarus Verilog, Yosys, Qdrant, Stable-Baselines3, Optuna, FastAPI, React, Docker


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
- Applied AI to K&S semiconductor work: built an **LLM-powered SECS/GEM Protocol Assistant (RAG)** leveraging deep K&S equipment protocol knowledge, and an **ML-based Wire Bond Quality Prediction** system with Bayesian process optimization modeled on RapidPro/ATPP machine parameters — reducing predicted defect rate by 40%.

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

---

*Project repositories available on GitHub upon request.*
