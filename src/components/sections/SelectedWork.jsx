import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import RealProjectPreview from '../common/RealProjectPreview';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    number: '01',
    title: 'AI JOB APPLICATION BOT & ATS PLATFORM',
    italicWord: 'AI',
    subtitle: 'Full-Stack Java / React 19 • Autonomous Agent Engine',
    modelType: 'jobagent',
    liveDomain: 'manohar-ai-job-frontend.onrender.com',
    demoUrl: 'https://manohar-ai-job-frontend.onrender.com',
    githubUrl: 'https://github.com/ManoharAkuthota/ai-job-agent',
    bullets: [
      'Built an end-to-end autonomous job automation engine using Spring Boot 3, React 19, and MySQL, processing resumes with ATS semantic matching and instant PDF compilation.',
      'Integrated multi-model AI workflows (Local Ollama Llama 3 & Google Gemini) to generate personalized cover letters, tailored resumes, and 3-tier interview prep kits.',
      'Orchestrated autonomous job applications using Playwright with screenshot proof verification, cron scheduling, and automated email confirmation notifications.',
    ],
    tags: ['Spring Boot 3', 'React 19', 'MySQL', 'Local Ollama Llama 3', 'Google Gemini', 'Playwright', 'ATS Matching', 'Render'],
  },
  {
    number: '02',
    title: 'MS MOBILES — OMNICHANNEL E-COMMERCE',
    subtitle: 'Full-Stack Java / React 18 / Capacitor • Native Mobile & Web',
    modelType: 'mobile',
    liveDomain: 'ms-mobiles-frontend.onrender.com',
    demoUrl: 'https://ms-mobiles-frontend.onrender.com/',
    githubUrl: 'https://github.com/ManoharAkuthota/Ecommerce',
    bullets: [
      'Architected an enterprise-grade e-commerce ecosystem using Spring Boot 3, React 18, and TiDB Cloud (AWS MySQL), featuring stateless JWT / Spring Security 6 role-based authentication (USER / ADMIN) and dynamic multi-variant smartphone catalog management.',
      'Engineered an official PDF GST Tax Invoice generator adhering to statutory tax guidelines (HSN 8517, CGST/SGST/IGST breakdown) using jsPDF & html2canvas with desktop A4 virtual canvas cloning and an Indian Rupee number-to-words algorithm.',
      'Developed an automated real-time Stock Alert engine dispatching notifications upon administrative inventory restocks, and packaged the storefront into a native Android Application (Capacitor 8) with offline PWA support and Cloudinary media CDN integration.',
    ],
    tags: ['Spring Boot 3', 'React 18', 'TiDB Cloud (AWS MySQL)', 'Spring Security 6', 'JWT', 'Capacitor 8', 'jsPDF', 'Cloudinary CDN'],
  },
  {
    number: '03',
    title: 'APEX TRUST — CORE BANKING PLATFORM',
    subtitle: 'Full-Stack Java 21 / Angular 19 • Enterprise Core Banking & Ledger',
    modelType: 'vault',
    liveDomain: 'apex-trust-frontend.onrender.com',
    demoUrl: 'https://apex-trust-frontend.onrender.com/',
    githubUrl: 'https://github.com/ManoharAkuthota/BankingApplication',
    bullets: [
      'Architected an enterprise-grade core banking platform using Spring Boot 3 (Java 21), Angular 19, and TiDB Serverless (distributed MySQL-compatible cloud database) with automated Liquibase schema versioning and Docker containerization on Render.',
      'Engineered secure multi-tier Role-Based Access Control (RBAC) across 4 distinct user roles (Admin, Branch Manager, Teller/Employee, Customer) secured by stateless JWT authentication, BCrypt encryption, and comprehensive audit trail logging.',
      'Built a real-time transaction & ledger engine managing branch-level customer onboarding, account creation approval workflows, inter-account fund transfers, deposit/withdrawal volume analytics, and dynamic financial statement reporting.',
      'Designed a modern, glassmorphic UI dashboard featuring live operational metrics, financial volume telemetry charts, and an interactive holographic account verification vault widget with fast registry lookups.',
    ],
    tags: ['Spring Boot 3 (Java 21)', 'Angular 19', 'TiDB Serverless', 'Liquibase', 'Docker', 'JWT / RBAC', 'Render'],
  },
  {
    number: '04',
    title: 'PRODUCTION CPaaS MICROSERVICES',
    subtitle: 'Event-Driven Communications Platform (Keyanna Technologies)',
    modelType: 'cube',
    demoUrl: 'https://github.com/ManoharAkuthota',
    githubUrl: 'https://github.com/ManoharAkuthota',
    bullets: [
      'Built and maintained backend microservices for the company’s CPaaS (Communications Platform as a Service) product using Spring Boot and microservices architecture.',
      'Implemented secure authentication and authorization flows with Spring Security and JWT-based token management.',
      'Integrated Apache Kafka for real-time, event-driven messaging between services, improving reliability of communication workflows.',
    ],
    tags: ['Java', 'Spring Boot', 'Apache Kafka', 'JWT', 'Microservices', 'Spring Security'],
  },
  {
    number: '05',
    title: 'DRIVER DROWSINESS DETECTION',
    subtitle: 'Real-Time Computer Vision AI Safety Platform (Python / OpenCV)',
    modelType: 'orb',
    demoUrl: 'https://github.com/ManoharAkuthota/Drowsiness_Detection',
    githubUrl: 'https://github.com/ManoharAkuthota/Drowsiness_Detection',
    bullets: [
      'Engineered a real-time computer vision safety system detecting driver fatigue and drowsiness by monitoring facial landmarks and eye aspect ratios (EAR).',
      'Integrated deep learning classification models with sub-second response times to trigger instant audible alerts and visual warnings.',
      'Optimized performance for embedded automotive edge devices, preventing road accidents and improving operational safety.',
    ],
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Deep Learning', 'AI Safety'],
  },
];

export default function SelectedWork({ onHoverSound, onClickSound }) {
  return (
    <section
      id="work"
      className="relative w-full min-h-screen bg-black text-white pt-24 pb-16 sm:py-24 px-4 sm:px-12 select-none overflow-hidden scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section (Matching Reel Frame 8 & 9) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-14 sm:mb-20">
          {/* Left: Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white uppercase">
              SELECTED{' '}
              <span className="font-serif-italic font-normal lowercase text-zinc-300">
                work
              </span>
            </h2>
          </motion.div>

          {/* Right: Narrative + Read More Button (Matching Reel Frame 9) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col items-start lg:items-end gap-3 sm:gap-4"
          >
            <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed text-left lg:text-right">
              Computer Science (AI) graduate and Junior Java Developer building robust backend microservices, modern full-stack web applications, and autonomous AI systems.
            </p>

            <a
              href="https://github.com/ManoharAkuthota"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={onHoverSound}
              onClick={onClickSound}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#ccff00] text-black font-semibold text-xs sm:text-sm hover:bg-white hover:scale-105 transition-all duration-300"
            >
              <span>Explore All on GitHub</span>
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Alternating Project Cards (Matching Reel Frame 9 & 10) */}
        <div className="space-y-16 sm:space-y-32">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center transition-all duration-300 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Project 3D Interactive WebGL Card */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950/90 group shadow-2xl hover:border-white/20 transition-all duration-300">
                    <RealProjectPreview type={project.modelType} />
                  </div>
                </div>

                {/* Project Content & Actions */}
                <div
                  className={`lg:col-span-5 space-y-4 sm:space-y-5 ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-sm sm:text-base font-mono font-bold text-zinc-500">
                      {project.number}
                    </span>
                    {project.liveDomain && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 group max-w-full"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="truncate">{project.liveDomain}</span>
                        <ArrowUpRight size={13} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase leading-tight text-white">
                    {project.italicWord ? (
                      <>
                        {project.title.split(project.italicWord)[0]}
                        <span className="font-serif-italic font-normal lowercase text-[#ccff00]">
                          {project.italicWord}
                        </span>
                        {project.title.split(project.italicWord)[1]}
                      </>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="text-xs font-mono text-[#ccff00] uppercase tracking-wider">
                    {project.subtitle}
                  </p>

                  {project.bullets && project.bullets.length > 0 ? (
                    <ul className="space-y-2 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-1.5 shrink-0 shadow-[0_0_8px_#ccff00]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Matching Reel Frame 10) */}
                  <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={onHoverSound}
                      onClick={onClickSound}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#ccff00] text-black text-xs sm:text-sm font-semibold hover:bg-white transition-all duration-300 shadow-md hover:scale-105"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={14} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={onHoverSound}
                      onClick={onClickSound}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all duration-300"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
