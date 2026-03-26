"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play, ArrowRight, Monitor, Sparkles, Scissors, ChevronRight, User } from "lucide-react";
import { useEffect, useState } from "react";

const VideoEditorHero = ({ onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeClient, setActiveClient] = useState(0);

  // Sample client data - replace with your actual clients
  const clients = [
    { 
      name: "NIKE", 
      project: "AIR MAX '24", 
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070",
      role: "Lead Editor",
      color: "from-rose-500/20"
    },
    { 
      name: "APPLE", 
      project: "VISION PRO", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070",
      role: "Colorist",
      color: "from-blue-500/20"
    },
    { 
      name: "SPOTIFY", 
      project: "WRAPPED '25", 
      image: "https://images.unsplash.com/photo-1611339555312-b6070c4d73a4?q=80&w=2070",
      role: "Motion Design",
      color: "from-green-500/20"
    },
  ];

  // Mouse Parallax Logic for the Monitor Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      x.set(moveX);
      y.set(moveY);
    };
    
    // Only add mousemove on desktop
    if (window.innerWidth > 1024) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    // Auto-cycle clients - NOW IT'S BEING USED
    const interval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clients.length);
    }, 4000);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [x, y, clients.length]); // Added clients.length to dependencies

  // Handle resize to disable parallax on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        x.set(0);
        y.set(0);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [x, y]);

  if (!mounted) return null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-white flex items-center justify-center overflow-hidden selection:bg-blue-600 pt-20 lg:pt-0">
      
      {/* Texture & Atmospheric Lighting */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-600/5 blur-[100px] rounded-full" />

      <main className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Column: Typography & Action */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex-1 w-full space-y-8 lg:space-y-10">
            <motion.div variants={item} className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-blue-500" />
                <span className="text-blue-400 font-mono text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] uppercase">
                  Chandan Singh // 2026
                </span>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black tracking-tighter leading-[0.8] mix-blend-difference">
                  VISUAL <br className="hidden xs:block" />
                  <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>STORY</span> <br />
                  ARCHITECT.
                </h1>
                <div className="flex items-center gap-3 pt-2 sm:pt-4">
                    <Sparkles size={12} className="text-blue-500 animate-pulse sm:w-4 sm:h-4" />
                    <span className="text-[8px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Precision Post-Production & Motion</span>
                </div>
              </div>
            </motion.div>

            <motion.p variants={item} className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-sm leading-relaxed border-l-2 border-zinc-800 pl-4 sm:pl-6">
              I breathe life into <span className="text-zinc-100">raw footage</span> through 
              surgical cutting, high-end grading, and immersive audio.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
              <button 
                onClick={onPlay}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex items-center gap-3 sm:gap-4 bg-white text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold overflow-hidden transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Play Showreel <Play size={14} className="sm:w-4 sm:h-4" fill="currentColor" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-blue-600"
                  initial={{ y: "100%" }}
                  animate={{ y: isHovered ? "0%" : "100%" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
              </button>
              
              <button className="group flex items-center gap-2 sm:gap-3 text-xs font-bold tracking-[0.2em] uppercase transition-all text-zinc-400 hover:text-white">
                <span className="border-b border-zinc-800 pb-1 group-hover:border-white transition-colors">Inquiry</span>
                <ArrowRight size={14} className="sm:w-4 sm:h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Tech Stack - Responsive Chips */}
            <motion.div variants={item} className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-4">
                {["PR", "AE", "DR", "C4D"].map((tool) => (
                    <span key={tool} className="text-[8px] sm:text-[9px] font-bold font-mono px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-md text-zinc-400 hover:text-white hover:border-white/30 transition-colors cursor-default">
                        {tool}
                    </span>
                ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Monitor with Editor Profile */}
          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="flex-1 relative w-full lg:max-w-[500px] mt-8 lg:mt-0"
          >
            <div className="relative group">
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 border-t-2 border-l-2 border-blue-500/30 rounded-tl-[1.5rem] sm:rounded-tl-[2rem] pointer-events-none" />
              
              <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group-hover:border-white/30 transition-all duration-700 shadow-2xl">
                {/* Editor Profile Image - Replace with your actual image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070" 
                    alt="Chandan Singh - Video Editor"
                    className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Editor Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      <User size={12} className="text-blue-400" />
                      <span className="text-[10px] font-mono text-white/90">EDITOR • CHANDAN</span>
                    </div>
                  </div>
                </div>
                
                {/* HUD Elements */}
                <div className="absolute top-6 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                      <span className="text-[9px] font-mono uppercase text-white/90">LIVE</span>
                   </div>
                   <div className="text-[10px] font-mono text-white/60 bg-black/40 backdrop-blur-md px-2 py-1.5 rounded-md border border-white/5">24.00 FPS</div>
                </div>

                {/* Editor Info Section */}
                <div className="absolute bottom-8 left-8 right-8 space-y-4">
                  {/* Editor Name and Title */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-1"
                  >
                    <h3 className="text-3xl font-black tracking-tight text-white drop-shadow-lg">
                      CHANDAN<br />SINGH
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-blue-400 tracking-wider">VIDEO EDITOR</span>
                      <ChevronRight size={12} className="text-blue-400" />
                      <span className="text-xs font-mono text-zinc-400">8+ YEARS</span>
                    </div>
                  </motion.div>
                  
                  {/* Featured Clients with Active Client Highlight */}
                  <div className="space-y-2">
                    <p className="text-[9px] font-mono text-zinc-500 tracking-wider">FEATURED CLIENTS</p>
                    <div className="flex flex-wrap gap-2">
                      {clients.map((client, index) => (
                        <motion.div 
                          key={index}
                          className={`text-[10px] font-mono px-2 py-1 border rounded transition-all cursor-default ${
                            activeClient === index 
                              ? 'bg-blue-600/20 border-blue-500 text-blue-400' 
                              : 'bg-white/5 border-white/10 text-zinc-300'
                          }`}
                          animate={{
                            scale: activeClient === index ? [1, 1.05, 1] : 1,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {client.name}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Display active client's project */}
                    <motion.div 
                      key={activeClient}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pt-2 border-t border-white/10"
                    >
                      <p className="text-[8px] font-mono text-zinc-500">CURRENT PROJECT</p>
                      <p className="text-xs font-bold text-white">{clients[activeClient].project}</p>
                      <p className="text-[9px] text-zinc-400">{clients[activeClient].role}</p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Float Badges - Editor Stats */}
              <motion.div className="absolute -right-8 top-1/4 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden lg:block">
                <Monitor size={18} className="text-blue-400 mb-2" />
                <p className="text-[9px] font-bold text-zinc-300 uppercase tracking-tighter whitespace-nowrap">Projects: 200+</p>
              </motion.div>
              
              <motion.div className="absolute -left-8 bottom-1/4 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden lg:block">
                <Scissors size={18} className="text-orange-400 mb-2" />
                <p className="text-[9px] font-bold text-zinc-300 uppercase tracking-tighter">Awards: 12</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Atmospheric Background Text */}
      <div className="absolute bottom-[-2%] right-[-2%] text-[18vw] font-black text-white/[0.015] pointer-events-none select-none uppercase tracking-tighter italic hidden sm:block">
        CHANDAN
      </div>
    </div>
  );
};

export default VideoEditorHero;