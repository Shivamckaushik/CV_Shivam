# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Shivam — a static site hosted on GitHub Pages. The site is deployed automatically via GitHub Pages whenever changes are pushed to the main branch.

## Tech Stack

- Plain HTML/CSS/JavaScript (no build tools or frameworks)
- GitHub Pages for hosting and deployment

## Development

### Local Development

Open `index.html` directly in a browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node (if npx available)
npx serve .
```

### Deployment

Push to the `main` branch on GitHub. GitHub Pages serves the site automatically — no build step required.

```bash
git add .
git commit -m "describe change"
git push origin main
```

## Architecture

- `index.html` — main entry point and page structure
- `assets/` — images, icons, and static files
- `css/` — stylesheets
- `js/` — JavaScript files
- `Shivam_Chand_Kaushik_CV_9Yrs.pdf` — downloadable resume

## Target Employers & Role Context

Shivam is targeting **AI/ML Engineer** roles in the **semiconductor domain** at these companies:

| Company | Focus Area | Key Requirements |
|---------|-----------|-----------------|
| **KLA** | Semiconductor wafer/IC inspection, metrology | Computer vision, deep learning (CNNs/GANs), image processing, PyTorch/TensorFlow, Python + C++ |
| **Jio/Reliance** | Telecom AI, edge AI, semiconductor ambitions | Python, NLP, deep learning, GenAI/LLMs, distributed systems, Jio Brain platform |
| **ValueLabs** | Semiconductor/VLSI/EDA services, AI solutions | MATLAB, Verilog, RTL, ASIC, Physical Design; cloud platforms (AWS/Azure) |
| **Micron** | Memory semiconductor manufacturing | AI for smart manufacturing & yield analysis; neural network quantization; memory error correction |
| **Intel** | Chip design, EDA, yield optimization | SPICE/Spectre familiarity; multivariate yield algorithms; PyTorch/TensorFlow |
| **Samsung** | Custom chip design, ML accelerators | Verilog/SystemVerilog/HLS; reinforcement learning; physics-informed ML; PhD preferred for Staff roles |
| **Synopsys** | EDA tools, AI-driven chip design | Agentic AI, GenAI/LLMs for EDA, Python + C++, deep learning, EDA tools + UVM familiarity |
| **Microsoft** | Custom silicon (Maia/Cobalt), Azure ML | Large GPU cluster management; Azure ML pipelines; HuggingFace; LLM deployment |

### Common Skill Requirements Across Targets

- **Must-have:** Python, C/C++, PyTorch/TensorFlow, scikit-learn
- **Domain:** EDA tools, fabrication processes, yield analysis, defect detection, chip design fundamentals
- **MLOps:** Docker, Kubernetes, AWS/Azure ML, model deployment pipelines
- **Education:** MS/M.Tech minimum (PhD preferred at Samsung/Intel for research roles)
- **Certifications that help:** NVIDIA DLI, AWS ML Engineer, Azure AI Engineer (AI-102)

### Current Profile Score: 52/100 (reworded resume)

See `Analysis/` directory for full breakdown, gap analysis, improvement roadmap, and reworded resume.

## GitHub Pages Notes

- The site is served from the root of the `main` branch
- All asset paths must be relative (no leading `/`) to work on GitHub Pages subpaths
- No `.nojekyll` file is needed unless using files/dirs starting with `_`
