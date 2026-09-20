import { ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const BarcodeSvg = ({ className = "h-5 w-auto text-zinc-400" }) => (
  <svg className={className} viewBox="0 0 120 28" fill="currentColor" aria-hidden="true">
    <rect x="0" y="0" width="3" height="28" />
    <rect x="5" y="0" width="1.5" height="28" />
    <rect x="8" y="0" width="4" height="28" />
    <rect x="14" y="0" width="2" height="28" />
    <rect x="18" y="0" width="1" height="28" />
    <rect x="21" y="0" width="5" height="28" />
    <rect x="28" y="0" width="2" height="28" />
    <rect x="32" y="0" width="1" height="28" />
    <rect x="35" y="0" width="3.5" height="28" />
    <rect x="41" y="0" width="4" height="28" />
    <rect x="47" y="0" width="2" height="28" />
    <rect x="51" y="0" width="1" height="28" />
    <rect x="54" y="0" width="4" height="28" />
    <rect x="60" y="0" width="2.5" height="28" />
    <rect x="65" y="0" width="5" height="28" />
    <rect x="72" y="0" width="1" height="28" />
    <rect x="75" y="0" width="3" height="28" />
    <rect x="80" y="0" width="2" height="28" />
    <rect x="84" y="0" width="4" height="28" />
    <rect x="90" y="0" width="1.5" height="28" />
    <rect x="94" y="0" width="3" height="28" />
    <rect x="99" y="0" width="2" height="28" />
    <rect x="103" y="0" width="4" height="28" />
    <rect x="110" y="0" width="2.5" height="28" />
    <rect x="115" y="0" width="4" height="28" />
  </svg>
);

const projects = [
  {
    number: '01',
    title: 'AI JOB APPLICATION BOT & ATS PLATFORM',
    italicWord: 'AI',
    subtitle: 'Full-Stack Java / React 19 • Autonomous Agent Engine',
    badge: 'AUTONOMOUS AGENT ENGINE',
    image: '/assets/project_jobagent.jpg',
    liveDomain: 'manohar-ai-job-frontend.onrender.com',
    demoUrl: 'https://manohar-ai-job-frontend.onrender.com',
    githubUrl: 'https://github.com/ManoharAkuthota/ai-job-agent',
    leadQuote: 'An autonomous full-stack intelligence engine orchestrating private local LLMs with Playwright to achieve 99.4% ATS precision at zero token cost.',
    specs: {
      'Core Architecture': 'Spring Boot 3 • Java 21',
      'Client Interface': 'React 19 • Tailwind CSS',
      'Agent Engine': 'Ollama Llama 3 • Playwright',
      'Database & Cache': 'MySQL Cloud • Redis Queue',
    },
    bullets: [
      'Orchestrated end-to-end headless browser automation using Playwright with screenshot verification, cron scheduling, and dynamic form adaptation.',
      'Integrated local Ollama LLMs to generate context-aware cover letters and tailored resumes with semantic keyword matching.',
      'Architected Spring Boot REST endpoints managing job queues, application state history, and candidate credentials securely.',
    ],
    tags: ['Spring Boot 3', 'React 19', 'MySQL', 'Local Ollama Llama 3', 'Google Gemini', 'Playwright', 'ATS Matching', 'Render'],
  },
  {
    number: '02',
    title: 'MS MOBILES — OMNICHANNEL E-COMMERCE',
    italicWord: 'MOBILES',
    subtitle: 'Full-Stack Java / React 18 / Capacitor • Native Mobile & Web',
    badge: 'COMMERCE & STATUTORY FINTECH',
    image: '/assets/project_msmobiles.jpg',
    liveDomain: 'ms-mobiles-frontend.onrender.com',
    demoUrl: 'https://ms-mobiles-frontend.onrender.com/',
    githubUrl: 'https://github.com/ManoharAkuthota/Ecommerce',
    leadQuote: 'Enterprise smartphone retail ecosystem pairing modern capacitive mobile experiences with statutory Indian GST tax invoice computation.',
    specs: {
      'Enterprise Core': 'Spring Boot 3 • Spring Security 6',
      'Client Platform': 'React 18 • Capacitor 8 Native',
      'Tax Computation': 'HSN 8517 • CGST/SGST 9%',
      'Cloud Storage': 'TiDB Cloud AWS • Cloudinary CDN',
    },
    bullets: [
      'Architected stateless JWT role-based security (USER / ADMIN) managing multi-variant catalog hierarchies and instant checkout sessions.',
      'Engineered automated PDF GST Tax Invoice generator adhering to statutory tax guidelines with Rupee number-to-words conversion.',
      'Packaged the storefront into a native Android app via Capacitor 8 with offline PWA caching and Cloudinary CDN optimization.',
    ],
    tags: ['Spring Boot 3', 'React 18', 'TiDB Cloud (AWS MySQL)', 'Spring Security 6', 'JWT', 'Capacitor 8', 'jsPDF', 'Cloudinary CDN'],
  },
  {
    number: '03',
    title: 'APEX TRUST — CORE BANKING PLATFORM',
    italicWord: 'TRUST',
    subtitle: 'Full-Stack Java 21 / Angular 19 • Enterprise Core Banking & Ledger',
    badge: 'ENTERPRISE BANKING ENGINE',
    image: '/assets/project_banking.jpg',
    liveDomain: 'apex-trust-frontend.onrender.com',
    demoUrl: 'https://apex-trust-frontend.onrender.com/',
    githubUrl: 'https://github.com/ManoharAkuthota/BankingApplication',
    leadQuote: 'Mission-critical FinTech banking platform built with dual-entry ledger precision, BCrypt encryption, and 4-tier Role-Based Access Control.',
    specs: {
      'Banking Core': 'Spring Boot 3 • Java 21',
      'Operations UI': 'Angular 19 • Glassmorphism',
      'Access Control': '4-Tier RBAC • BCrypt • JWT',
      'Database Schema': 'Liquibase • TiDB Serverless',
    },
    bullets: [
      'Engineered multi-tier Role-Based Access Control across 4 user tiers (Admin, Branch Manager, Teller, Customer) with audit trail logging.',
      'Built real-time transaction engine managing branch-level customer onboarding, account approval workflows, and inter-account fund transfers.',
      'Designed glassmorphic operations dashboard featuring live financial volume charts and holographic vault verification.',
    ],
    tags: ['Spring Boot 3 (Java 21)', 'Angular 19', 'TiDB Serverless', 'Liquibase', 'Docker', 'JWT / RBAC', 'Render'],
  },
  {
    number: '04',
    title: 'PRODUCTION CPaaS MICROSERVICES',
    italicWord: 'CPaaS',
    subtitle: 'Event-Driven Communications Platform (Keyanna Technologies)',
    badge: 'TELECOM & EVENT-DRIVEN CLUSTER',
    image: '/assets/project_cpaas.jpg',
    demoUrl: 'https://github.com/ManoharAkuthota',
    githubUrl: 'https://github.com/ManoharAkuthota',
    leadQuote: 'High-throughput Communications Platform as a Service backend streaming real-time SMS & WhatsApp events across Kafka clusters.',
    specs: {
      'Organization': 'Keyanna Technologies',
      'Architecture': 'Spring Boot Microservices',
      'Event Stream': 'Apache Kafka Event Bus',
      'Throughput SLA': 'Sub-12ms Latency • 99.99% Up',
    },
    bullets: [
      'Engineered production microservices handling high-volume SMS and WhatsApp communication dispatches with sub-12ms response times.',
      'Integrated Apache Kafka for fault-tolerant, event-driven messaging between distributed services, preventing message loss.',
      'Implemented secure token authorization flows with Spring Security and JWT-based authentication.',
    ],
    tags: ['Java', 'Spring Boot', 'Apache Kafka', 'JWT', 'Microservices', 'Spring Security', 'REST APIs'],
  },
  {
    number: '05',
    title: 'DRIVER DROWSINESS DETECTION',
    italicWord: 'DROWSINESS',
    subtitle: 'Real-Time Computer Vision AI Safety Platform (Python / OpenCV)',
    badge: 'EDGE VISION & AI SAFETY',
    image: '/assets/project_drowsiness.jpg',
    demoUrl: 'https://github.com/ManoharAkuthota/Drowsiness_Detection',
    githubUrl: 'https://github.com/ManoharAkuthota/Drowsiness_Detection',
    leadQuote: 'Real-time edge computer vision safety system tracking 68 ocular facial landmarks to compute Eye Aspect Ratio and prevent micro-sleep.',
    specs: {
      'Vision Pipeline': 'OpenCV • Python • Dlib',
      'Landmark Tracking': '68-Point Facial Mesh',
      'Sampling Rate': '60 FPS Real-Time Feed',
      'Accuracy Score': '98.7% Fatigue Detection',
    },
    bullets: [
      'Tracked 68 facial landmarks via Dlib shape predictor to dynamically compute Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR).',
      'Implemented instant acoustic alert triggers and visual warnings whenever ocular closure exceeds safety thresholds.',
      'Optimized for low-latency embedded automotive edge hardware, operating consistently at 60 FPS.',
    ],
    tags: ['Python', 'OpenCV', 'Dlib', 'Computer Vision', 'Deep Learning', 'AI Safety', 'NumPy'],
  },
];

export default function SelectedWork({ onHoverSound, onClickSound }) {
  return (
    <section
      id="work"
      className="relative w-full min-h-screen bg-black text-white pt-24 pb-16 sm:py-28 px-4 sm:px-12 select-none overflow-hidden scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Magazine Masthead Section Header */}
        <div className="border-b border-zinc-800 pb-10 sm:pb-14 mb-14 sm:mb-24">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              <span className="text-zinc-300 font-bold">EDITORIAL ARCHIVE</span>
              <span>//</span>
              <span>VOL. 2026</span>
            </div>
            <div className="hidden sm:block">
              CURATED PRODUCTION SYSTEMS • 05 EDITIONS
            </div>
            <div>
              ISSN 2026-MA
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mt-4">
            {/* Left: Section Title */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white uppercase leading-none">
                SELECTED{' '}
                <span className="font-serif-italic font-normal lowercase text-zinc-300">
                  work
                </span>
              </h2>
            </div>

            {/* Right: Narrative + Read More Button */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-3 sm:gap-4">
              <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed text-left lg:text-right">
                A curated editorial catalogue of production microservices, full-stack ecosystems, and autonomous artificial intelligence engines engineered by Manohar Akuthota.
              </p>

              <a
                href="https://github.com/ManoharAkuthota"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={onHoverSound}
                onClick={onClickSound}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ccff00] text-black font-semibold text-xs sm:text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-md"
              >
                <span>View Full Index on GitHub</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Magazine Editorial Spreads */}
        <div className="space-y-20 sm:space-y-36">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Magazine Visual Plate Card */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-[#0a0a0d] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
                    {/* Magazine Print Registration Crosshairs */}
                    <span className="absolute top-1.5 left-2 text-[10px] font-mono text-zinc-600 select-none pointer-events-none group-hover:text-[#ccff00] transition-colors">+</span>
                    <span className="absolute top-1.5 right-2 text-[10px] font-mono text-zinc-600 select-none pointer-events-none group-hover:text-[#ccff00] transition-colors">+</span>
                    <span className="absolute bottom-1.5 left-2 text-[10px] font-mono text-zinc-600 select-none pointer-events-none group-hover:text-[#ccff00] transition-colors">+</span>
                    <span className="absolute bottom-1.5 right-2 text-[10px] font-mono text-zinc-600 select-none pointer-events-none group-hover:text-[#ccff00] transition-colors">+</span>

                    {/* Top Editorial Plate Header */}
                    <div className="flex items-center justify-between px-2 pb-2.5 sm:pb-3 border-b border-white/10 text-[10px] sm:text-[11px] font-mono text-zinc-400">
                      <div className="flex items-center gap-2">
                        <span className="text-[#ccff00] font-bold">VOL. 2026</span>
                        <span className="text-zinc-600">//</span>
                        <span>ISSUE {project.number}</span>
                      </div>
                      <div className="hidden sm:block text-[9px] uppercase tracking-widest text-zinc-500">
                        MANOHAR AKUTHOTA ARCHIVE
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500">PLATE</span>
                        <span className="text-white font-bold">{project.number} / 05</span>
                      </div>
                    </div>

                    {/* Inner Framed Photographic Showcase */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={onHoverSound}
                      onClick={onClickSound}
                      className="block relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-zinc-950 mt-3 sm:mt-3.5 cursor-pointer"
                    >
                      {/* High-Resolution Enhanced Photograph */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-[1.03] brightness-[0.98]"
                        loading="lazy"
                      />

                      {/* Glossy Magazine Paper Sheen Reflection */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />

                      {/* Top Badge Overlay */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 border border-white/15 backdrop-blur-md shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-wider">
                          {project.badge}
                        </span>
                      </div>

                      {/* Bottom Magazine Inset Caption & Barcode */}
                      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-end justify-between gap-4 pointer-events-none">
                        <div className="min-w-0">
                          <span className="text-[10px] font-mono text-[#ccff00] uppercase tracking-wider block">
                            FIG. {project.number} // ARCHITECTURAL SPEC
                          </span>
                          <p className="text-xs sm:text-sm font-serif-italic text-zinc-200 truncate">
                            {project.subtitle}
                          </p>
                        </div>
                        <div className="shrink-0 hidden sm:flex flex-col items-end">
                          <BarcodeSvg className="h-5 w-auto text-zinc-400" />
                          <span className="text-[8px] font-mono text-zinc-500 mt-0.5 tracking-tighter">
                            CATALOGUE #{project.number}
                          </span>
                        </div>
                      </div>
                    </a>

                    {/* Bottom Editorial Colophon Strip */}
                    <div className="flex items-center justify-between px-2 pt-3 sm:pt-3.5 border-t border-white/10 text-[10px] font-mono text-zinc-500 mt-3 sm:mt-3.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-zinc-300">CLOUD PRODUCTION VERIFIED</span>
                      </div>
                      <div className="text-zinc-500 uppercase">
                        CURATED ARCHIVE 2026
                      </div>
                    </div>
                  </div>
                </div>

                {/* Magazine Editorial Narrative (Article Column) */}
                <div
                  className={`lg:col-span-5 space-y-4 sm:space-y-6 ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  {/* Article Issue Header Bar */}
                  <div className="flex items-center justify-between flex-wrap gap-2 border-b border-zinc-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-black text-[#ccff00]">
                        N° {project.number}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
                        FEATURE STORY
                      </span>
                    </div>

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

                  {/* Editorial Article Headline */}
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

                  {/* Editorial Pull-Quote */}
                  <div className="border-l-2 border-[#ccff00] pl-4 py-1 italic font-serif text-zinc-300 text-sm sm:text-base leading-relaxed">
                    "{project.leadQuote}"
                  </div>

                  {/* Technical Spec Sheet Grid */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 sm:p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800 text-[11px] font-mono">
                    {Object.entries(project.specs).map(([key, val], sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">
                          {key}
                        </span>
                        <span className="text-zinc-200 font-semibold block truncate">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Numbered Engineering Highlights */}
                  <div className="space-y-2.5 pt-1">
                    {project.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <span className="text-[11px] font-mono font-bold text-[#ccff00] mt-0.5 shrink-0">
                          0{bIdx + 1}
                        </span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:border-[#ccff00]/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Magazine Action Buttons */}
                  <div className="flex items-center gap-2.5 sm:gap-3 pt-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={onHoverSound}
                      onClick={onClickSound}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#ccff00] text-black text-xs sm:text-sm font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:scale-105"
                    >
                      <span>Explore Live Build</span>
                      <ArrowUpRight size={14} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={onHoverSound}
                      onClick={onClickSound}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all duration-300"
                    >
                      <GithubIcon size={14} />
                      <span>Technical Repository</span>
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

