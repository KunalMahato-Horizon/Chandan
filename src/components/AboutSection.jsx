"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Instagram, Twitter, Mail, Linkedin, Play, Sparkles, Film, Clock, MapPin, GraduationCap, Heart, User } from "lucide-react";

const AboutContact = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax movement for the big background text
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-15%" : "-30%"]);
  const textXReverse = useTransform(scrollYProgress, [0, 1], isMobile ? ["-10%", "5%"] : ["-20%", "10%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const copyEmail = () => {
    navigator.clipboard.writeText("chandan@visualarchitect.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const socialLinks = [
    { icon: <Instagram size={18} />, label: "Instagram", url: "https://instagram.com/chandan.edits", color: "hover:text-[#E1306C]" },
    { icon: <Twitter size={18} />, label: "Twitter", url: "https://twitter.com/chandan_edits", color: "hover:text-[#1DA1F2]" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", url: "https://linkedin.com/in/chandansingh", color: "hover:text-[#0A66C2]" },
  ];

  const stats = [
    { icon: <Film size={16} />, value: "50+", label: "Projects" },
    { icon: <Clock size={16} />, value: "1,500+", label: "Hours" },
    { icon: <MapPin size={16} />, value: "India", label: "Based" },
  ];

  return (
    <section ref={containerRef} className="bg-[#050505] relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 xl:py-48">
      
      {/* Background Text Layer - Responsive */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-[0.02] sm:opacity-[0.03] select-none whitespace-nowrap overflow-hidden">
        <motion.h2 style={{ x: textX }} className="text-[15vw] sm:text-[20vw] lg:text-[25vw] font-black italic leading-none uppercase tracking-tighter">
          Chandan Singh
        </motion.h2>
        <motion.h2 style={{ x: textXReverse }} className="text-[15vw] sm:text-[20vw] lg:text-[25vw] font-black leading-none uppercase outline-text">
          Video Editor
        </motion.h2>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] h-[90%] sm:h-[80%] bg-gradient-radial from-blue-500/5 via-transparent to-transparent opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-32 items-start">
          
          {/* Left Column: Philosophy - Responsive */}
          <div className="w-full lg:w-1/2 space-y-16 sm:space-y-20 md:space-y-24 lg:sticky lg:top-24">
            {/* Main Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 sm:space-y-8 md:space-y-10"
            >
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="w-6 sm:w-8 md:w-10 h-px bg-gradient-to-r from-blue-500 to-transparent" />
                  <span className="text-blue-500 font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">
                    The Persona
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] sm:leading-[0.88] md:leading-[0.86] lg:leading-[0.85]">
                  Hi! I'm <br /> 
                  <span className="text-blue-500">Chandan</span> <br />
                  <span className="text-transparent outline-text relative">
                    Singh
                    <motion.span 
                      className="absolute -right-4 sm:-right-6 md:-right-8 top-0 text-blue-500"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      .
                    </motion.span>
                  </span>
                </h2>
              </div>

              <p className="text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-md leading-relaxed pl-3 sm:pl-4 md:pl-5 lg:pl-6 border-l-2 border-white/10">
                A video editor with <span className="text-white font-bold">one year of experience</span> and a 
                master in content creation. I blend technical precision with creative storytelling.
              </p>
            </motion.div>

            {/* Stats - Responsive Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 pt-8 sm:pt-10 md:pt-12 border-t border-white/5"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1 sm:space-y-1.5 md:space-y-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="text-blue-500">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.value}</div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Education & Passion - Responsive */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 sm:space-y-5 md:space-y-6 pt-6 sm:pt-7 md:pt-8"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-3.5 md:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <GraduationCap size={16} className="sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-blue-400" />
                  <span className="text-xs sm:text-sm font-mono text-zinc-300">BCA Student</span>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Balancing my studies with my passion for video editing. 
                  Currently pursuing Bachelor of Computer Applications while creating visual stories.
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-zinc-500">
                  <Heart size={10} className="sm:w-2.5 sm:h-2.5 text-red-400" />
                  <span>Passion meets profession</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links - Responsive */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-5 sm:space-y-6 md:space-y-8 pt-8 sm:pt-10 md:pt-12 border-t border-white/5"
            >
              <p className="text-[9px] sm:text-[10px] md:text-xs font-mono text-zinc-700 uppercase tracking-wider">Connect // Socials</p>
              <div className="flex flex-col gap-3 sm:gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="group flex items-center justify-between text-xs sm:text-sm font-medium uppercase tracking-wider py-2 sm:py-3 border-b border-white/5"
                  >
                    <span className="text-zinc-400 group-hover:text-white transition-colors text-[10px] sm:text-xs">{social.label}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className={`text-zinc-700 ${social.color} transition-colors`}>
                        {social.icon}
                      </span>
                      <ArrowUpRight size={12} className="sm:w-3 sm:h-3 text-zinc-700 group-hover:text-white transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact & Image - Responsive */}
          <div className="w-full lg:w-1/2 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 lg:pt-24">
            {/* Image Container - Responsive */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl md:rounded-[2rem] overflow-hidden group cursor-pointer"
            >
              <motion.img 
                style={{ y: imageY }}
                src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070" 
                alt="Chandan Singh - Video Editor"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
              
              {/* Play Button Overlay - Responsive */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white/30 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                >
                  <Play size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 ml-0.5 sm:ml-1" fill="white" />
                  <motion.div 
                    className="absolute inset-0 border-2 border-blue-500/50 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>
              
              {/* Image Label - Responsive */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 lg:top-6 lg:left-6 bg-black/60 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-white/10">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-blue-400 whitespace-nowrap">Chandan Singh • Editor</span>
              </div>
              
              {/* Experience Badge - Responsive */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 bg-black/60 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-white/10">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-amber-400 flex items-center gap-0.5 sm:gap-1">
                  <Sparkles size={8} className="sm:w-2 sm:h-2 md:w-2.5 md:h-2.5" /> 1 Year Experience
                </span>
              </div>
            </motion.div>

            {/* Contact Section - Responsive */}
            <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8"
              >
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-4 sm:w-5 md:w-6 h-px bg-gradient-to-r from-blue-500 to-transparent" />
                    <span className="text-blue-500 font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">Let's Create</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[0.95]">
                    Something <br /> 
                    <span className="text-transparent outline-text">Amazing.</span>
                  </h3>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
                    Whether it's a short reel, a commercial, or a full-length project - 
                    I'm ready to bring your vision to life.
                  </p>
                  
                  {/* Email with Copy Function - Responsive */}
                  <div className="relative group pt-1 sm:pt-2">
                    <button
                      onClick={copyEmail}
                      className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 text-sm sm:text-base md:text-lg font-mono text-zinc-300 hover:text-white transition-colors"
                    >
                      <Mail size={14} className="sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-blue-400" />
                      <span className="text-xs sm:text-sm md:text-base">chandan@visualarchitect.com</span>
                      <span className="text-[8px] sm:text-[9px] md:text-[10px] text-zinc-600 group-hover:text-blue-400 transition-colors">
                        {emailCopied ? "✓ Copied" : "Click to copy"}
                      </span>
                    </button>
                    <AnimatePresence>
                      {emailCopied && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute -top-5 sm:-top-6 left-0 text-[9px] sm:text-[10px] text-green-500 font-mono whitespace-nowrap"
                        >
                          Email copied to clipboard!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button - Responsive */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-3 sm:space-y-4"
              >
                <span className="text-[9px] sm:text-[10px] md:text-xs font-mono text-zinc-600 uppercase tracking-wider">Start a conversation</span>
                <motion.a 
                  href="mailto:chandan@visualarchitect.com"
                  whileHover={{ scale: 1.01, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full font-black uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg shadow-2xl overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-zinc-200 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-500" />
                  
                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 md:gap-3">
                    Work With Me
                    <Mail size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  </span>
                  
                  {/* Sparkle Effect */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute -right-1 -top-1 sm:-right-2 sm:-top-2"
                      >
                        <Sparkles size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 text-blue-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.a>
              </motion.div>

              {/* Student Editor Badge - Responsive */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3"
              >
                <User size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-blue-400" />
                <span className="text-[9px] sm:text-[10px] md:text-xs font-mono text-zinc-300 whitespace-nowrap">BCA Student • Video Editor • Creator</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge - Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 xl:bottom-12 xl:right-12 hidden md:block"
      >
        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full">
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-blue-400 whitespace-nowrap">Based in India • Open to Work</span>
        </div>
      </motion.div>

      <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.12);
          color: transparent;
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.1);
        }
        
        @media (max-width: 640px) {
          .outline-text {
            -webkit-text-stroke: 0.5px rgba(255,255,255,0.12);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutContact;