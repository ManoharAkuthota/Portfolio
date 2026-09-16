export const defaultGreeting = 
  "Hi! I'm Manohar's AI Assistant. Ask me anything about his Java Spring Boot microservices, React frontends, or Computer Vision & AI projects!";

export const suggestedPrompts = [
  "What is Manohar's core tech stack?",
  "Tell me about the AI Job Application Bot",
  "How does the Driver Drowsiness Detection work?",
  "Explain the Enterprise Banking project",
  "What is his experience as an Assistant Professor?",
  "How can I contact or interview Manohar?",
];

export const aiKnowledgeBase = [
  {
    keywords: ["stack", "skills", "tech", "technologies", "languages", "tools"],
    reply: "Manohar specializes in **Java Spring Boot**, **Hibernate ORM**, **REST APIs**, **JWT Authentication**, and **MySQL** on the backend, alongside modern **React**, **Tailwind CSS**, and **Framer Motion** on the frontend. He also builds AI systems using **Python**, **OpenCV**, and **Ollama (Local LLMs)**.",
  },
  {
    keywords: ["job bot", "application bot", "playwright", "ollama", "resume bot"],
    reply: "The **AI Job Application Bot** is an autonomous agent combining **Spring Boot**, **React**, **Playwright**, and **Ollama**. It parses resumes, contextually answers bespoke employer screening questions via local LLMs without token costs, and handles automated submissions at 10x speed with 99.4% form accuracy.",
  },
  {
    keywords: ["drowsiness", "driver", "opencv", "dlib", "deepface", "vision", "fatigue"],
    reply: "The **Driver Drowsiness Detection** system processes live video streams at 30+ FPS using **Python**, **OpenCV**, and **Dlib 68-point facial landmarks**. By calculating Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) in real-time, it triggers instant acoustic alarms to save lives on the road.",
  },
  {
    keywords: ["banking", "bank", "apex", "trust", "ledger", "financial", "security", "jwt", "rbac", "angular", "tidb"],
    reply: "**APEX TRUST** is an enterprise-grade core banking platform built with **Spring Boot 3 (Java 21)**, **Angular 19**, and **TiDB Serverless** on Render. It features 4-tier Role-Based Access Control (Admin, Branch Manager, Teller, Customer), stateless JWT security, real-time transaction & ledger engine, and an interactive holographic account verification vault widget.",
  },
  {
    keywords: ["professor", "mba", "teaching", "academic", "experience", "leadership"],
    reply: "Manohar has served as an **Assistant Professor in the MBA program**, instructing quantitative and information systems modules, mentoring 200+ postgraduate students, and bridging deep technical engineering with high-level business strategy and leadership.",
  },
  {
    keywords: ["spring", "java", "backend", "microservices", "hibernate"],
    reply: "Manohar has deep expertise in enterprise **Java (Core & 17+)**, **Spring Boot 3**, **Spring Security**, **Hibernate/JPA**, and relational database architecture. He designs stateless, resilient microservices with sub-second response times and complete test coverage.",
  },
  {
    keywords: ["react", "frontend", "ui", "design", "framer"],
    reply: "On the frontend, Manohar creates cinematic, Apple-grade user interfaces using **React**, **Tailwind CSS**, **Framer Motion**, and **Three.js**. He focuses on 60 FPS animations, accessibility, and micro-interactions.",
  },
  {
    keywords: ["contact", "email", "hire", "interview", "resume", "reach"],
    reply: "You can reach Manohar directly via email at **manohar.akuthota@example.com**, connect on [LinkedIn](https://linkedin.com/in/manohar-akuthota), explore his code on [GitHub](https://github.com/manohar-akuthota), or scroll down to the Contact section to send a direct message!",
  },
];

export function getAIResponse(userMessage) {
  const query = userMessage.toLowerCase().trim();
  
  for (const entry of aiKnowledgeBase) {
    if (entry.keywords.some((kw) => query.includes(kw))) {
      return entry.reply;
    }
  }

  return `Thanks for asking! Manohar is a versatile engineer with deep expertise across Java Spring Boot, React, and applied AI systems. Feel free to explore his featured projects above or reach out to him directly at **manohar.akuthota@example.com**!`;
}
