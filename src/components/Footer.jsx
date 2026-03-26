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
      url: "https://www.instagram.com/chandan__rajput__24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    { 
      name: "Twitter", 
      icon: <Twitter size={20} />, 
      color: "hover:text-[#1DA1F2]",
      url: "https://x.com/RajputChan34300/status/1899084754949173256"
    },
    { 
      name: "WhatsApp", 
      icon: <MessageCircle size={20} />, 
      color: "hover:text-[#25D366]",
      url: "https://t.ly/bTRbq" // Replace with your actual WhatsApp number
    },
  ];

  return (
    <footer className="relative bg-[#080808] text-white pt-40 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow Effects */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-30 blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-radial from-purple-500/5 via-transparent to-transparent blur-[80px]" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.015]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`grid-${i}`}
              className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent"
              style={{ left: `${i * 8.33}%` }}
            />
          ))}
        </div>
      </div>

      {/* Vertical Brand Sidebar */}
      <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
      <div className="absolute left-0 top-0 bottom-0 w-24 hidden lg:flex items-center justify-center pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.03, x: 0 }}
          className="text-[7vh] font-black uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] select-none"
        >
          CHANDAN SINGH
        </motion.h2>
      </div>

      <div className="container mx-auto lg:pl-32 relative z-10">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-24">
          
          {/* Left Column: Brand & Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-20"
          >
            {/* Brand Statement */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-2 rounded-full bg-blue-500"
                  />
                  <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em]">
                    Let's Connect // 2026
                  </span>
                </div>
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                  VISUAL <br /> 
                  <span className="italic text-transparent outline-text relative">
                    ARCHITECT
                    <motion.span 
                      className="absolute -right-8 top-0 text-blue-500"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      .
                    </motion.span>
                  </span>
                </h2>
              </div>

              <p className="text-zinc-400 text-lg max-w-md leading-relaxed pl-6 border-l-2 border-white/10">
                Based in India, creating visual stories that resonate. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Location & Time */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-12">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-blue-500" />
                    <p className="text-[10px] font-mono uppercase text-zinc-600">Based</p>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest">India</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-blue-500" />
                    <p className="text-[10px] font-mono uppercase text-zinc-600">Local_Time</p>
                  </div>
                  <motion.div
                    key={time}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-bold uppercase tracking-widest text-blue-500 font-mono"
                  >
                    {time} IST
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Social Links */}
          <div className="flex flex-col justify-end gap-24">
            {/* Social Links */}
            <div className="space-y-8 text-right">
              <p className="text-xs font-mono uppercase text-zinc-600 tracking-[0.2em]">
                Connect
              </p>
              <nav>
                <ul className="space-y-6">
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
                        className={`text-4xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-300 flex items-center justify-end gap-4 ${social.color} relative z-10`}
                        onMouseEnter={() => setIsHovered(idx)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        <span className="text-zinc-800 group-hover:text-white transition-colors">
                          {social.name}
                        </span>
                        <motion.div
                          animate={isHovered === idx ? { rotate: 45 } : { rotate: 0 }}
                          transition={{ type: "spring" }}
                          className="text-blue-500"
                        >
                          <ArrowUpRight size={24} />
                        </motion.div>
                      </a>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -mx-4 pointer-events-none" />
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Brand Mark */}
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center"
            >
              <span className="font-black italic text-blue-400 text-lg">C</span>
            </motion.div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest italic">
                Chandan Singh
              </span>
              <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
                Video Editor
              </span>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-8 text-xs font-mono text-zinc-600 uppercase tracking-widest">
            <span className="hover:text-white transition-colors cursor-pointer">
              © 2026 CHANDAN SINGH
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-14 h-14 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center z-50 group hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} className="text-zinc-400 group-hover:text-white group-hover:-translate-y-1 transition-all" />
            <motion.div 
              className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
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
      `}</style>
    </footer>
  );
};

export default Footer;