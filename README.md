# Manohar Akuthota — Executive 3D Developer Portfolio

A modern, high-performance, dark luxury personal portfolio built with **React 19**, **Three.js / React Three Fiber**, **Tailwind CSS**, and **Lenis Scroll**. Designed with 1:1 parity across desktop and mobile devices.

[![Live Demo](https://img.shields.io/badge/Status-Live%20Production-success?style=for-the-badge)](https://manohar-akuthota-portfolio.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-ManoharAkuthota-blue?style=for-the-badge&logo=github)](https://github.com/ManoharAkuthota)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/manohar-akuthota/)
[![Resume](https://img.shields.io/badge/Resume-Download%20PDF-emerald?style=for-the-badge&logo=adobeacrobatreader)](https://manohar-akuthota-portfolio.onrender.com/Akuthota_Manohar_Resume.pdf)

---

## 🌟 Featured Live Projects

| Project | Description | Tech Stack | Live Demo | Repository |
| :--- | :--- | :--- | :--- | :--- |
| **SmartVote Bharat — Sovereign E-Voting System** | Sovereign digital electoral voting infrastructure complying with Article 324 of the Indian Constitution with AI facial verification, liveness detection, and SHA-256 cryptographic ballot sealing. | Spring Boot 3.3, React 18, Vite, Lucide, Tailwind, SHA-256 | [Live System](https://manohar-smartvote-bharat.onrender.com/) | [GitHub](https://github.com/ManoharAkuthota/SmartVote-AI) |
| **AI Job Application Bot & ATS Platform** | Autonomous job automation engine with ATS scoring, Gemini/Ollama AI cover letters, and Playwright execution. | Spring Boot 3, React 19, MySQL, Playwright, Gemini API | [Live App](https://manohar-ai-job-frontend.onrender.com) | [GitHub](https://github.com/ManoharAkuthota/ai-job-agent) |
| **MS Mobiles Omnichannel E-Commerce** | Enterprise e-commerce & mobile platform with Razorpay checkout, live inventory, and push alerts. | Spring Boot 3, React 19, Capacitor, TiDB Cloud, Redis | [Live App](https://ms-mobiles-frontend.onrender.com/) | [GitHub](https://github.com/ManoharAkuthota/Ecommerce) |
| **APEX TRUST Core Banking Management** | Distributed core banking platform with 4-tier RBAC, real-time ledger engine, and TiDB Serverless. | Spring Boot 3 (Java 21), Angular 19, TiDB Cloud, Docker | [Live App](https://apex-trust-frontend.onrender.com/) | [GitHub](https://github.com/ManoharAkuthota/BankingApplication) |

---

## ⚡ Tech Stack & Architecture

- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide Icons
- **3D Graphics & Animations**: Three.js, React Three Fiber, Framer Motion, Canvas Particles
- **Smooth Physics Scrolling**: Lenis Scroll (with touch momentum synchronization)
- **Deployment & Hosting**: Render Static Site (with SPA rewrites)
- **Resume Distribution**: Integrated official PDF download (`/Akuthota_Manohar_Resume.pdf`)

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/ManoharAkuthota/Portfolio.git

# Navigate into directory
cd Portfolio

# Install dependencies
npm install

# Run Vite dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deploy to Render

This repository includes a `render.yaml` blueprint for zero-config static site deployment:
1. Connect this GitHub repository to [Render](https://dashboard.render.com).
2. Choose **Static Site**.
3. Set **Build Command**: `npm run build`
4. Set **Publish Directory**: `dist`
5. Add Rewrite Rule: `/* -> /index.html` (type: Rewrite).
