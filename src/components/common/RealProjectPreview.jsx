import { useState } from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Smartphone, 
  CreditCard, 
  Activity, 
  Sparkles, 
  ArrowUpRight,
  Database,
  Layers,
  Lock,
  Zap,
  Eye
} from 'lucide-react';

export default function RealProjectPreview({ type = 'jobagent' }) {
  if (type === 'jobagent') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#080c14] rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl flex flex-col p-4 sm:p-5 select-none group">
        {/* Mac OS Window Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] sm:text-xs font-mono text-zinc-400 ml-2">
              job-agent.ai // ATS Orchestrator
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Playwright Headless: ACTIVE</span>
          </div>
        </div>

        {/* Real Software Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 mt-3 flex-1 min-h-0">
          {/* Left Column: Candidate & ATS Gauge */}
          <div className="sm:col-span-5 bg-zinc-950/70 rounded-xl p-3 sm:p-3.5 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Target Candidate</span>
                <span className="px-1.5 py-0.5 rounded bg-[#ccff00]/10 text-[#ccff00] text-[9px] font-mono font-bold">Llama 3 Local</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white truncate">Manohar Akuthota</h4>
              <p className="text-[10px] font-mono text-zinc-400">Java Full-Stack & AI</p>
            </div>

            {/* ATS Match Gauge */}
            <div className="my-2 p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-center">
              <span className="text-[10px] font-mono text-cyan-300 block mb-0.5">ATS Resume Score</span>
              <div className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight flex items-center justify-center gap-1">
                <span className="text-[#ccff00]">99.4</span>
                <span className="text-xs text-zinc-400 font-mono">%</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400">● 14/14 Tech Keywords Matched</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {['Spring Boot 3', 'Kafka', 'JWT', 'MySQL', 'React 19'].map((t, idx) => (
                <span key={idx} className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-zinc-300 border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Live Automation Terminal Logs */}
          <div className="sm:col-span-7 bg-[#05070d] rounded-xl p-3 sm:p-3.5 border border-cyan-500/20 flex flex-col justify-between font-mono text-[10px] sm:text-[11px] overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-white/5 text-zinc-400 text-[10px]">
              <div className="flex items-center gap-1.5">
                <Terminal size={12} className="text-cyan-400" />
                <span>Execution Telemetry Stream</span>
              </div>
              <span className="text-[#ccff00]">200 OK</span>
            </div>

            <div className="space-y-1.5 text-zinc-300 my-auto py-1">
              <div className="text-zinc-400">
                <span className="text-cyan-400">&gt;</span> <span className="text-zinc-200">Parsing job portal:</span> Senior Java Platform
              </div>
              <div>
                <span className="text-emerald-400">&gt;</span> <span className="text-[#ccff00]">Ollama LLM:</span> Generated tailored answers
              </div>
              <div>
                <span className="text-cyan-400">&gt;</span> <span className="text-zinc-200">PDF Generator:</span> Dynamic ATS resume compiled
              </div>
              <div>
                <span className="text-purple-400">&gt;</span> <span className="text-zinc-200">Playwright DOM:</span> Form submitted (0 token cost)
              </div>
              <div className="text-emerald-400 flex items-center gap-1">
                <span>&gt;</span> <CheckCircle2 size={11} className="text-emerald-400" />
                <span>Submission receipt archived in MySQL</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-zinc-500">
              <span>Auto-Submission Rate: 10x Speed</span>
              <span className="text-cyan-400">100% Data Privacy</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'mobile') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#070b14] rounded-2xl overflow-hidden border border-sky-500/20 shadow-2xl flex flex-col p-4 sm:p-5 select-none group">
        {/* Browser Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] sm:text-xs font-mono text-zinc-400 ml-2 truncate">
              ms-mobiles-frontend.onrender.com
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-[10px] font-mono text-sky-400">
            <Smartphone size={11} />
            <span>Capacitor 8 • Android PWA</span>
          </div>
        </div>

        {/* E-Commerce Product & Invoice Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 mt-3 flex-1 min-h-0">
          {/* Left Column: Flagship Product Preview Card */}
          <div className="sm:col-span-6 bg-zinc-950/80 rounded-xl p-3 sm:p-3.5 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold">
                  ● In Stock • TiDB Cloud
                </span>
                <span className="text-[9px] font-mono text-zinc-500">HSN: 8517</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Titanium Pro 5G Flagship</h4>
              <p className="text-[10px] text-zinc-400 font-mono">16GB RAM • 512GB Storage</p>
            </div>

            {/* Price & Discount */}
            <div className="my-2 p-2.5 rounded-lg bg-sky-950/30 border border-sky-500/20 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-sky-300 block">Online Exclusive Price</span>
                <div className="text-xl sm:text-2xl font-black font-display text-white">
                  ₹79,999
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] line-through text-zinc-500 block">₹89,999</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold">
                  Save ₹10,000
                </span>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="flex flex-wrap gap-1 text-[9px] font-mono text-zinc-400">
              <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-300">Spring Security 6</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-300">JWT RBAC</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-300">Cloudinary CDN</span>
            </div>
          </div>

          {/* Right Column: Statutory GST Tax Invoice Engine Preview */}
          <div className="sm:col-span-6 bg-[#040814] rounded-xl p-3 sm:p-3.5 border border-sky-500/20 flex flex-col justify-between font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-sky-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-sky-400" />
                GST Tax Invoice Generator
              </span>
              <span className="text-zinc-500 text-[9px]">jsPDF / A4 Engine</span>
            </div>

            <div className="space-y-1.5 my-auto py-1 text-zinc-300 text-[10px]">
              <div className="flex justify-between text-zinc-400">
                <span>Taxable Base Value:</span>
                <span className="text-white">₹67,795.76</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>CGST @ 9%:</span>
                <span className="text-sky-300">₹6,101.62</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>SGST @ 9%:</span>
                <span className="text-sky-300">₹6,101.62</span>
              </div>
              <div className="flex justify-between font-bold border-t border-white/10 pt-1 text-white">
                <span>Total Invoice Value:</span>
                <span className="text-[#ccff00]">₹79,999.00</span>
              </div>
              <div className="text-[9px] text-zinc-400 italic">
                Rupees Seventy-Nine Thousand Nine Hundred Ninety-Nine Only
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-zinc-500">
              <span className="text-emerald-400">● Real-Time Stock Alerts</span>
              <span>1-Click PDF Download</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'vault') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#070b12] rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl flex flex-col p-4 sm:p-5 select-none group">
        {/* Banking Platform Window Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] sm:text-xs font-mono text-zinc-400 ml-2 truncate">
              apex-trust-frontend.onrender.com
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
            <Lock size={11} />
            <span>4-Tier RBAC • 100% ACID</span>
          </div>
        </div>

        {/* Banking Dashboard Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 mt-3 flex-1 min-h-0">
          {/* Left Column: Titanium Platinum Card & Total Liquidity */}
          <div className="sm:col-span-6 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-xl p-3 sm:p-3.5 border border-white/10 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <CreditCard size={14} className="text-[#ccff00]" />
                <span className="text-[10px] font-mono font-bold text-white tracking-widest uppercase">
                  APEX TRUST
                </span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-[#ccff00]/10 text-[#ccff00] text-[9px] font-mono font-bold">
                Java 21 + Angular 19
              </span>
            </div>

            <div className="my-2">
              <span className="text-[9px] font-mono text-zinc-400 block">Total Ledger Liquidity</span>
              <div className="text-xl sm:text-2xl font-black font-display text-white tracking-tight flex items-baseline gap-1">
                <span className="text-emerald-400">₹</span>
                <span>12,48,500</span>
                <span className="text-xs text-zinc-400 font-mono">.00</span>
              </div>
              <div className="text-[9px] font-mono text-zinc-500 mt-0.5">
                Card: •••• •••• •••• 4821 | Exp: 09/29
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[9px] font-mono text-zinc-400">
              <span>TiDB Serverless Sync</span>
              <span className="text-emerald-400">Latency: 12ms</span>
            </div>
          </div>

          {/* Right Column: Real-Time ACID Ledger Stream */}
          <div className="sm:col-span-6 bg-[#040810] rounded-xl p-3 sm:p-3.5 border border-emerald-500/20 flex flex-col justify-between font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Activity size={12} />
                Real-Time Transaction Ledger
              </span>
              <span className="text-zinc-500 text-[9px]">Pessimistic Lock</span>
            </div>

            <div className="space-y-1.5 my-auto py-1 text-[10px]">
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">RTGS Inter-Account:</span>
                <span className="text-emerald-400 font-bold">+₹45,000.00</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Branch Onboarding:</span>
                <span className="text-cyan-400">Approved (KYC)</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Stateless JWT Session:</span>
                <span className="text-white">Admin Verified</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Liquibase Migration:</span>
                <span className="text-[#ccff00]">v3.2 Up-to-date</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-zinc-500">
              <span className="text-cyan-400">● 100% Audit Trail Logged</span>
              <span>Dockerized on Render</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'cube') {
    // Keyanna CPaaS Microservices
    return (
      <div className="relative w-full aspect-[16/10] bg-[#070710] rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl flex flex-col p-4 sm:p-5 select-none group">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] sm:text-xs font-mono text-zinc-400 ml-2">
              keyanna-cpaas-cluster // Telemetry
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] font-mono text-purple-300">
            <Zap size={11} className="text-[#ccff00]" />
            <span>Apache Kafka 3.6 • Event-Driven</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3 flex-1 min-h-0">
          <div className="bg-zinc-950/80 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
            <span className="text-[9px] font-mono text-zinc-400">AUTH & JWT SERVICE</span>
            <div className="text-base sm:text-lg font-bold font-display text-white">
              Spring Security 6
            </div>
            <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>99.99% Token Validation</span>
            </div>
          </div>

          <div className="bg-zinc-950/80 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
            <span className="text-[9px] font-mono text-zinc-400">KAFKA EVENT BROKER</span>
            <div className="text-base sm:text-lg font-bold font-display text-[#ccff00]">
              42,800 msg/s
            </div>
            <div className="text-[9px] font-mono text-zinc-400">
              Cluster: cpaas-telecom-01
            </div>
          </div>

          <div className="bg-zinc-950/80 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
            <span className="text-[9px] font-mono text-zinc-400">MESSAGING GATEWAY</span>
            <div className="text-base sm:text-lg font-bold font-display text-white">
              REST & Webhooks
            </div>
            <div className="text-[9px] font-mono text-cyan-400">
              P99 Latency: &lt; 24ms
            </div>
          </div>

          <div className="bg-zinc-950/80 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
            <span className="text-[9px] font-mono text-zinc-400">RELATIONAL STORAGE</span>
            <div className="text-base sm:text-lg font-bold font-display text-white">
              MySQL Cluster
            </div>
            <div className="text-[9px] font-mono text-zinc-400">
              ACID Schema Partitioning
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Driver Drowsiness Detection
  return (
    <div className="relative w-full aspect-[16/10] bg-[#050912] rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl flex flex-col p-4 sm:p-5 select-none group">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-[10px] sm:text-xs font-mono text-zinc-400 ml-2">
            vision_pipeline.py // 68-Point Facial Landmark HUD
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-400">
          <Eye size={11} />
          <span>OpenCV 4.10 + Dlib</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 mt-3 flex-1 min-h-0">
        {/* Computer Vision Frame Preview */}
        <div className="sm:col-span-7 bg-[#02050b] rounded-xl p-3 border border-cyan-500/30 relative flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>STREAM: CAMERA 0 [1080p @ 30 FPS]</span>
            <span className="text-[#ccff00] animate-pulse">● TRACKING</span>
          </div>

          {/* Simulated Facial Landmark Wireframe Box */}
          <div className="my-auto mx-auto w-32 h-28 border border-cyan-400/40 rounded-xl relative flex items-center justify-center bg-cyan-950/20 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            {/* Eyes */}
            <div className="absolute top-7 left-6 w-5 h-3 border border-emerald-400 rounded-sm flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="absolute top-7 right-6 w-5 h-3 border border-emerald-400 rounded-sm flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            {/* Mouth */}
            <div className="absolute bottom-6 w-8 h-2 border border-cyan-400/60 rounded-full" />
            <span className="text-[8px] font-mono text-cyan-300 absolute -bottom-4">Face Mesh: 68 Pts</span>
          </div>

          <div className="text-[9px] font-mono text-zinc-500 flex justify-between">
            <span>Euclidean Distance Algorithm</span>
            <span className="text-emerald-400">Sub-250ms Acoustic Alert</span>
          </div>
        </div>

        {/* Telemetry Metrics */}
        <div className="sm:col-span-5 bg-zinc-950/80 rounded-xl p-3 border border-white/5 flex flex-col justify-between font-mono text-[10px]">
          <div>
            <span className="text-[9px] text-zinc-400 block mb-1">SAFETY METRICS</span>
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <span className="text-zinc-400">EAR (Eyes):</span>
                <span className="text-emerald-400 font-bold">0.34 [Normal]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">MAR (Mouth):</span>
                <span className="text-sky-400 font-bold">0.12 [No Yawn]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Inference:</span>
                <span className="text-[#ccff00] font-bold">32 FPS</span>
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-center">
            <span className="text-[10px] font-bold text-emerald-400 block">DRIVER STATUS: SAFE</span>
            <span className="text-[8px] text-zinc-400">No Fatigue Detected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
