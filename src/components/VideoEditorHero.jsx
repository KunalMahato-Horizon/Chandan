"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play, Monitor, Sparkles, Scissors, ChevronRight, ChevronDown } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";

const VideoEditorHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);

  // Mouse Parallax Logic for the Monitor Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  // Handle WhatsApp button click
  const handleWhatsApp = useCallback(() => {
    const whatsappUrl = "https://wa.me/message/M6AC7MHAMGAQH1";
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }, []);

  // Handle scroll to next section
  const scrollToNext = useCallback(() => {
    const nextSection = document.getElementById('portfolio');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Debounced resize handler
  useEffect(() => {
    let timeoutId;
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };
    
    checkMobile();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Mouse move handler with throttling for performance
  useEffect(() => {
    if (!mounted) return;
    
    let rafId;
    const handleMouseMove = (e) => {
      if (isMobile) return;
      
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        x.set(moveX);
        y.set(moveY);
      });
    };
    
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [x, y, isMobile, mounted]);

  // Reset parallax on resize to mobile
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

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const currentYear = new Date().getFullYear();

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-[#080808] text-white flex items-center justify-center overflow-hidden selection:bg-blue-600 pt-20 lg:pt-0"
    >
      {/* Texture & Atmospheric Lighting */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"
        aria-hidden="true"
      />
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-600/5 blur-[100px] rounded-full"
        aria-hidden="true"
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-8 sm:py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Column: Typography & Action */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="show" 
            className="flex-1 w-full space-y-6 sm:space-y-8 lg:space-y-10"
          >
            <motion.div variants={item} className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="h-px w-6 sm:w-8 bg-blue-500" aria-hidden="true" />
                <span className="text-blue-400 font-mono text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] uppercase">
                  Chandan Singh // {currentYear}
                </span>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[9rem] font-black tracking-tighter leading-[0.9] sm:leading-[0.85] lg:leading-[0.8]">
                  VISUAL <br className="hidden xs:block" />
                  <span 
                    className="text-transparent" 
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
                  >
                    STORY
                  </span>{" "}
                  <br />
                  ARCHITECT.
                </h1>
                <div className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-4">
                  <Sparkles 
                    size={10} 
                    className="text-blue-500 animate-pulse sm:w-3 sm:h-3 lg:w-4 lg:h-4" 
                    aria-hidden="true"
                  />
                  <span className="text-[7px] sm:text-[8px] lg:text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    Precision Post-Production & Motion
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.p 
              variants={item} 
              className="text-zinc-400 text-sm sm:text-base lg:text-lg xl:text-xl max-w-sm leading-relaxed border-l-2 border-zinc-800 pl-3 sm:pl-4 lg:pl-6"
            >
              I breathe life into <span className="text-zinc-100">raw footage</span> through 
              surgical cutting, high-end grading, and immersive audio.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4">
              <button 
                onClick={handleWhatsApp}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onKeyDown={(e) => e.key === 'Enter' && handleWhatsApp()}
                aria-label="Contact on WhatsApp"
                className="group relative flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 bg-white text-black px-5 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 rounded-full font-bold overflow-hidden transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] text-xs sm:text-sm lg:text-base cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact on WhatsApp <Play size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4" fill="currentColor" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-green-600"
                  initial={{ y: "100%" }}
                  animate={{ y: isHovered ? "0%" : "100%" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  aria-hidden="true"
                />
              </button>
            </motion.div>

            {/* Tech Stack - Responsive Chips */}
            <motion.div variants={item} className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-4">
              {["PR", "AE", "DR", "C4D"].map((tool) => (
                <span 
                  key={tool} 
                  className="text-[7px] sm:text-[8px] lg:text-[9px] font-bold font-mono px-1.5 sm:px-2 lg:px-3 py-1 bg-white/5 border border-white/10 rounded-md text-zinc-400 hover:text-white hover:border-white/30 transition-colors cursor-default"
                  aria-label={`Tool: ${tool}`}
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Simple Image Card - Responsive */}
          <motion.div
            style={!isMobile ? { rotateX, rotateY, perspective: 1000 } : {}}
            className="flex-1 relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[500px] mt-8 sm:mt-10 lg:mt-0"
          >
            <div className="relative group">
              {/* Corner Decoration - Hidden on mobile */}
              <div 
                className="hidden sm:block absolute -top-3 sm:-top-4 lg:-top-6 -left-3 sm:-left-4 lg:-left-6 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 border-t-2 border-l-2 border-blue-500/30 rounded-tl-[1rem] sm:rounded-tl-[1.5rem] lg:rounded-tl-[2rem] pointer-events-none"
                aria-hidden="true"
              />
              
              <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group-hover:border-white/30 transition-all duration-700 shadow-xl sm:shadow-2xl">
                {/* Loading Skeleton */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 animate-pulse" />
                )}
                
                {/* Editor Profile Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://res.cloudinary.com/dla8tkflq/image/upload/v1774688372/Hero_g1szva.jpg" 
                    alt="Chandan Singh - Professional Video Editor with 5+ years of experience in post-production and motion graphics"
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ objectPosition: "center 15%" }}
                    onLoad={() => setImageLoaded(true)}
                    loading="eager"
                    fetchPriority="high"
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                
                {/* Editor Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-0.5 sm:space-y-1"
                  >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
                      CHANDAN<br />SINGH
                    </h3>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-[9px] sm:text-[10px] lg:text-xs font-mono text-blue-400 tracking-wider">VIDEO EDITOR</span>
                      <ChevronRight size={8} className="sm:w-2 sm:h-2 lg:w-3 lg:h-3 text-blue-400" aria-hidden="true" />
                      <span className="text-[8px] sm:text-[9px] lg:text-xs font-mono text-zinc-400">5.6+ YEARS</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Float Badges - Desktop only */}
              <div className="hidden lg:block">
                <motion.div 
                  className="absolute -right-6 xl:-right-8 top-1/4 bg-black/40 backdrop-blur-xl border border-white/10 p-3 xl:p-4 rounded-xl xl:rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Monitor size={14} className="xl:w-4 xl:h-4 text-blue-400 mb-1.5 xl:mb-2" aria-hidden="true" />
                  <p className="text-[7px] xl:text-[9px] font-bold text-zinc-300 uppercase tracking-tighter whitespace-nowrap">50+ Projects</p>
                </motion.div>
                
                <motion.div 
                  className="absolute -left-6 xl:-left-8 bottom-1/4 bg-black/40 backdrop-blur-xl border border-white/10 p-3 xl:p-4 rounded-xl xl:rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Scissors size={14} className="xl:w-4 xl:h-4 text-orange-400 mb-1.5 xl:mb-2" aria-hidden="true" />
                  <p className="text-[7px] xl:text-[9px] font-bold text-zinc-300 uppercase tracking-tighter">5.6 Years</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={scrollToNext}
        onKeyDown={(e) => e.key === 'Enter' && scrollToNext()}
        role="button"
        tabIndex={0}
        aria-label="Scroll to portfolio section"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <ChevronDown size={14} className="text-white/40 mt-2" aria-hidden="true" />
        </div>
      </motion.div>

      {/* Atmospheric Background Text */}
      <div 
        className="absolute bottom-[-2%] right-[-2%] text-[15vw] sm:text-[18vw] font-black text-white/[0.015] pointer-events-none select-none uppercase tracking-tighter italic hidden md:block"
        aria-hidden="true"
      >
        CHANDAN
      </div>
    </div>
  );
};

export default VideoEditorHero;