"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Twitter, ArrowUpRight, Clock, MapPin, ArrowUp, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState("");
  const [isHovered, setIsHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const options = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true,
        hourCycle: 'h23'
      };
      const timeString = new Intl.DateTimeFormat('en-IN', options).format(new Date());
      setTime(timeString.toUpperCase());
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      color: "hover:text-[#E1306C]",
      url: "https://www.instagram.com/chandan.rajput.24?igsh=NXF3ZmkycGh0bXAw"
    },
    { 
      name: "Twitter", 
      icon: <Twitter size={20} />, 
      color: "hover:text-[#1DA1F2]",
      url: "https://x.com/ChandanSin49699"
    },
    { 
      name: "WhatsApp", 
      icon: <MessageCircle size={20} />, 
      color: "hover:text-[#25D366]",
      url: "https://wa.me/message/M6AC7MHAMGAQH1"
    },
  ];

  return (
    <footer className="relative bg-[#080808] text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      
      {/* Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow Effects - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-0 left-1/4 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-30 blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
        <div className="hidden md:block absolute top-1/2 right-0 w-[200px] sm:w-[250px] lg:w-[300px] h-[200px] sm:h-[250px] lg:h-[300px] bg-gradient-radial from-purple-500/5 via-transparent to-transparent blur-[60px] sm:blur-[80px]" />
        
        {/* Grid Overlay - Hide on mobile */}
        <div className="hidden md:block absolute inset-0 opacity-[0.015]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`grid-${i}`}
              className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent"
              style={{ left: `${i * 8.33}%` }}
            />
          ))}
        </div>
      </div>

      {/* Vertical Brand Sidebar - Hide on mobile/tablet */}
      <div className="absolute left-3 lg:left-6 xl:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-20 xl:w-24 hidden lg:flex items-center justify-center pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.02, x: 0 }}
          className="text-[5vh] lg:text-[6vh] xl:text-[7vh] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] select-none"
        >
          CHANDAN SINGH
        </motion.h2>
      </div>

      <div className="container mx-auto lg:pl-16 xl:pl-32 relative z-10">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 sm:gap-20 md:gap-24 lg:gap-32 xl:gap-40">
          
          {/* Left Column: Brand & Contact - Responsive */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:max-w-2xl space-y-12 sm:space-y-16 md:space-y-20"
          >
            {/* Brand Statement - Responsive */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-500"
                  />
                  <span className="text-blue-500 font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em]">
                    Let's Connect // 2026
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] sm:leading-[0.88] md:leading-[0.86] lg:leading-[0.85]">
                  VISUAL <br /> 
                  <span className="italic text-transparent outline-text relative">
                    ARCHITECT
                    <motion.span 
                      className="absolute -right-3 sm:-right-4 md:-right-6 lg:-right-8 top-0 text-blue-500 text-3xl sm:text-4xl md:text-5xl"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      .
                    </motion.span>
                  </span>
                </h2>
              </div>

              <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-md leading-relaxed pl-3 sm:pl-4 md:pl-5 lg:pl-6 border-l-2 border-white/10">
                Based in India, creating visual stories that resonate. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Location & Time - Responsive */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <div className="flex flex-wrap gap-8 sm:gap-10 md:gap-12">
                <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <MapPin size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-blue-500" />
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase text-zinc-600">Based</p>
                  </div>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider">India</p>
                </div>
                <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-blue-500" />
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase text-zinc-600">Local_Time</p>
                  </div>
                  <motion.div
                    key={time}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-500 font-mono"
                  >
                    {time || "LOADING..."} IST
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Social Links - Responsive */}
          <div className="w-full flex flex-col justify-end gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            <div className="space-y-5 sm:space-y-6 md:space-y-8 text-left lg:text-right">
              <p className="text-[9px] sm:text-[10px] md:text-xs font-mono uppercase text-zinc-600 tracking-[0.15em] sm:tracking-[0.2em]">
                Connect
              </p>
              <nav>
                <ul className="space-y-4 sm:space-y-5 md:space-y-6">
                  {socialLinks.map((social, idx) => (
                    <motion.li 
                      key={social.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="group relative"
                    >
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter transition-all duration-300 flex items-center justify-start lg:justify-end gap-2 sm:gap-3 md:gap-4 ${social.color} relative z-10`}
                        onMouseEnter={() => setIsHovered(idx)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        <span className="text-zinc-800 group-hover:text-white transition-colors text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                          {social.name}
                        </span>
                        <motion.div
                          animate={isHovered === idx ? { rotate: 45, x: 3 } : { rotate: 0, x: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="text-blue-500"
                        >
                          <ArrowUpRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </motion.div>
                      </a>
                      {/* Glow Effect - Hidden on mobile */}
                      <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -mx-4 pointer-events-none" />
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Metadata - Responsive */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 sm:mt-28 md:mt-32 lg:mt-36 xl:mt-40 pt-8 sm:pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8"
        >
          {/* Brand Mark - Responsive */}
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.div 
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center"
            >
              <span className="font-black italic text-blue-400 text-base sm:text-lg md:text-xl">C</span>
            </motion.div>
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[9px] sm:text-[10px] md:text-xs font-mono text-zinc-600 uppercase tracking-wider italic">
                Chandan Singh
              </span>
              <span className="text-[7px] sm:text-[8px] md:text-[9px] font-mono text-zinc-700 uppercase tracking-wider block sm:hidden md:block">
                Video Editor
              </span>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 sm:gap-8 text-[9px] sm:text-[10px] md:text-xs font-mono text-zinc-600 uppercase tracking-wider">
            <span className="hover:text-white transition-colors cursor-pointer">
              © 2026 CHANDAN SINGH
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button - Responsive */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center z-50 group hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-white group-hover:-translate-y-1 transition-all" />
            <motion.div 
              className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Global CSS */}
      <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.1);
        }
        
        @media (max-width: 640px) {
          .outline-text {
            -webkit-text-stroke: 0.5px rgba(255,255,255,0.1);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;