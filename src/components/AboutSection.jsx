"use client";

import { motion, useScroll, useTransform, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Instagram, Twitter, Mail, Play, Sparkles, Film, Clock, GraduationCap, Heart, User, Layers, Zap, Camera, PenTool, Image, Video, Palette, Users, Star } from "lucide-react";

const AboutContact = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const marqueeControls = useAnimation();
  const isMarqueeInView = useInView(marqueeRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMarqueeInView) marqueeControls.start("visible");
  }, [isMarqueeInView, marqueeControls]);

  // Parallax movement for the big background text
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-15%" : "-30%"]);
  const textXReverse = useTransform(scrollYProgress, [0, 1], isMobile ? ["-10%", "5%"] : ["-20%", "10%"]);

  const copyEmail = () => {
    navigator.clipboard.writeText("chandaneditz396@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const socialLinks = [
    { icon: <Instagram size={18} />, label: "Instagram", url: "https://www.instagram.com/chandan.rajput.24?igsh=NXF3ZmkycGh0bXAw", color: "hover:text-[#E1306C]" },
    { icon: <Twitter size={18} />, label: "Twitter", url: "https://x.com/ChandanSin49699", color: "hover:text-[#1DA1F2]" },
    { icon: <Mail size={18} />, label: "Email", url: "mailto:chandaneditz396@gmail.com", color: "hover:text-[#EA4335]" },
  ];

  const stats = [
    { icon: <Film size={16} />, value: "280+", label: "Projects" },
    { icon: <Clock size={16} />, value: "5.6", label: "Years Editing" },
    { icon: <Layers size={16} />, value: "3.1", label: "Years Design" },
  ];

  const skills = [
    { name: "Video Editing", level: 5, icon: <Video size={12} /> },
    { name: "Motion Graphics", level: 4.5, icon: <Sparkles size={12} /> },
    { name: "Graphic Design", level: 4, icon: <Layers size={12} /> },
    { name: "Thumbnail Design", level: 4.5, icon: <Image size={12} /> },
    { name: "Photo Editing", level: 4, icon: <Camera size={12} /> },
    { name: "Animations", level: 4, icon: <PenTool size={12} /> },
  ];

  // Client data
  const clients = [
    { name: "Priya Sharma", role: "Content Creator", image: "https://randomuser.me/api/portraits/women/1.jpg", rating: 5 },
    { name: "Rajesh Mehta", role: "Marketing Director", image: "https://randomuser.me/api/portraits/men/2.jpg", rating: 5 },
    { name: "Anjali Verma", role: "Wedding Photographer", image: "https://randomuser.me/api/portraits/women/3.jpg", rating: 5 },
    { name: "Vikram Singh", role: "Music Producer", image: "https://randomuser.me/api/portraits/men/4.jpg", rating: 4 },
    { name: "Neha Gupta", role: "Digital Marketer", image: "https://randomuser.me/api/portraits/women/5.jpg", rating: 5 },
    { name: "Arjun Reddy", role: "Film Director", image: "https://randomuser.me/api/portraits/men/6.jpg", rating: 5 },
  ];

  // Marquee data
  const column1 = [
    { 
      type: "Video Editing", 
      img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000", 
      title: "Mar 2024 – Present", 
      views: "5.6 yrs", 
      category: "Post-Production",
      icon: <Video size={12} />
    },
    { 
      type: "Thumbnail Design", 
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000", 
      title: "Graphic Design", 
      views: "High CTR", 
      category: "Design",
      icon: <Image size={12} />
    },
    { 
      type: "Motion Graphics", 
      img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000", 
      title: "Animation", 
      views: "Kinetic", 
      category: "Motion",
      icon: <Layers size={12} />
    },
    // Duplicate for seamless loop
    { 
      type: "Video Editing", 
      img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000", 
      title: "Mar 2024 – Present", 
      views: "5.6 yrs", 
      category: "Post-Production",
      icon: <Video size={12} />
    },
    { 
      type: "Thumbnail Design", 
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000", 
      title: "Graphic Design", 
      views: "High CTR", 
      category: "Design",
      icon: <Image size={12} />
    },
  ];

  const column2 = [
    { 
      type: "Photo Editing", 
      img: "https://images.unsplash.com/photo-1542744173-8e7e5381be6e?q=80&w=1000", 
      title: "Retouching", 
      ctr: "Professional", 
      category: "Photo",
      icon: <Camera size={12} />
    },
    { 
      type: "Animations", 
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000", 
      title: "2D/3D", 
      ctr: "Dynamic", 
      category: "Animation",
      icon: <PenTool size={12} />
    },
    { 
      type: "Graphic Designer", 
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000", 
      title: "Jun 2024 – Present", 
      ctr: "3.1 yrs", 
      category: "Design",
      icon: <Palette size={12} />
    },
    // Duplicate for seamless loop
    { 
      type: "Photo Editing", 
      img: "https://images.unsplash.com/photo-1542744173-8e7e5381be6e?q=80&w=1000", 
      title: "Retouching", 
      ctr: "Professional", 
      category: "Photo",
      icon: <Camera size={12} />
    },
    { 
      type: "Animations", 
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000", 
      title: "2D/3D", 
      ctr: "Dynamic", 
      category: "Animation",
      icon: <PenTool size={12} />
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-[#080808] overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 xl:py-48">
      
      {/* Background Texture - Matching Hero Section */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"
        aria-hidden="true"
      />
      
      {/* Atmospheric Lighting - Matching Hero Section */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/5 blur-[100px] rounded-full"
        aria-hidden="true"
      />
      
      {/* Divider Line Between Gallery and About */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
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
                  <span className="h-px w-6 sm:w-8 bg-blue-500" aria-hidden="true" />
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

              <p className="text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-md leading-relaxed border-l-2 border-zinc-800 pl-3 sm:pl-4 md:pl-5 lg:pl-6">
                A <span className="text-white font-bold">video editor</span> with <span className="text-white font-bold">5.6 years of experience</span> and a <span className="text-white font-bold">graphic designer</span> with <span className="text-white font-bold">3.1 years of expertise</span>. 
                Professional expertise in video editing, motion graphics, and design with proven experience across multiple creative disciplines.
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
                <div key={idx} className="space-y-1 sm:space-y-1.5 md:space-y-2 text-center">
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <div className="text-blue-500">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.value}</div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Skills Section with Expanded Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Zap size={14} className="text-blue-400" />
                <span className="text-[10px] sm:text-[11px] md:text-xs font-mono text-zinc-500 uppercase tracking-wider">Core Skills</span>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {skills.slice(0, 3).map((skill, idx) => (
                  <div key={idx} className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-blue-400">{skill.icon}</span>
                        <span className="text-xs sm:text-sm font-medium text-zinc-300">{skill.name}</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">{skill.level}/5</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skill Categories with Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3"
            >
              {[
                { icon: <Video size={10} />, text: "Video Editing", color: "text-blue-500" },
                { icon: <Image size={10} />, text: "Thumbnail Design", color: "text-green-500" },
                { icon: <Layers size={10} />, text: "Motion Graphics", color: "text-purple-500" },
                { icon: <Camera size={10} />, text: "Photo Editing", color: "text-amber-500" },
                { icon: <PenTool size={10} />, text: "Animations", color: "text-cyan-500" },
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-full">
                  <span className={skill.color}>{skill.icon}</span>
                  <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-mono uppercase whitespace-nowrap">{skill.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Timeline Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 md:p-4"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5 md:mb-3">
                <Clock size={10} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-blue-500" />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Experience Timeline</span>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-0">
                  <span className="text-zinc-300 text-[10px] sm:text-xs">Video Editor</span>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-zinc-500">Mar 2021 – Present</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-0">
                  <span className="text-zinc-300 text-[10px] sm:text-xs">Graphic Designer</span>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-zinc-500">Jun 2021 – Present</span>
                </div>
              </div>
            </motion.div>

            {/* Education & Passion */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-3.5 md:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <GraduationCap size={16} className="sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-blue-400" />
                  <span className="text-xs sm:text-sm font-mono text-zinc-300">BCA Student & Creative Professional</span>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Hi! I'm Chandan Singh, a video editor with 5.6 years of experience specializing in content edits and motion graphics, 
                  and a graphic designer with 3.1 years of expertise. I'm also a BCA student, balancing my studies with my passion for visual storytelling. 
                  Let's create something amazing together!
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-zinc-500">
                  <Heart size={10} className="sm:w-2.5 sm:h-2.5 text-red-400" />
                  <span>Transforming your vision into stunning visuals</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-5 sm:space-y-6 md:space-y-8 pt-8 sm:pt-10 md:pt-12 border-t border-white/5"
            >
              <p className="text-[9px] sm:text-[10px] md:text-xs font-mono text-zinc-700 uppercase tracking-wider">Connect // Socials</p>
              <div className="flex flex-col gap-3 sm:gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
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

          {/* Right Column: Contact & Marquee Section */}
          <div className="w-full lg:w-1/2 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {/* Image Container - Fixed Head Position */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl md:rounded-[2rem] overflow-hidden group cursor-pointer border border-white/10"
            >
              <img 
                src="https://res.cloudinary.com/dla8tkflq/image/upload/v1774688372/Hero_g1szva.jpg" 
                alt="Chandan Singh - Video Editor"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                style={{ objectPosition: "center 15%", objectFit: "cover" }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
              
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
              
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 lg:top-6 lg:left-6 bg-black/60 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-white/10">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-blue-400 whitespace-nowrap">Chandan Singh • Editor</span>
              </div>
              
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 bg-black/60 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-white/10">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-amber-400 flex items-center gap-0.5 sm:gap-1">
                  <Sparkles size={8} className="sm:w-2 sm:h-2 md:w-2.5 md:h-2.5" /> 5.6 Years Experience
                </span>
              </div>
            </motion.div>

            {/* Marquee Section - Skills Showcase */}
            <div ref={marqueeRef} className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[700px] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl p-1.5 sm:p-2 md:p-3 lg:p-4 border border-white/10 bg-white/[0.02]">
              {/* Column 1: Up */}
              <div className="w-1/2 overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
                <motion.div 
                  animate={{ y: [0, -800] }}
                  transition={{ duration: isMobile ? 20 : (isTablet ? 28 : 35), repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6"
                >
                  {column1.map((item, idx) => (
                    <div key={idx} className="relative aspect-[9/16] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2.5 sm:p-3 md:p-3.5 lg:p-4 flex flex-col justify-end">
                        <div className="flex items-center gap-0.5 sm:gap-1 mb-0.5 sm:mb-1">
                          <span className="text-blue-400">{item.icon}</span>
                          <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-mono text-blue-500 uppercase truncate">{item.type}</span>
                        </div>
                        <h4 className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-bold uppercase leading-tight">{item.title}</h4>
                        <p className="text-[6px] sm:text-[7px] md:text-[8px] font-mono text-zinc-400 mt-0.5 sm:mt-1 flex items-center gap-0.5 sm:gap-1">
                          <Clock size={6} className="sm:w-1.5 sm:h-1.5" /> {item.views} • {item.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Column 2: Down */}
              <div className="w-1/2 overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
                <motion.div 
                  animate={{ y: [-800, 0] }}
                  transition={{ duration: isMobile ? 22 : (isTablet ? 32 : 40), repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6"
                >
                  {column2.map((item, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2.5 sm:p-3 md:p-3.5 lg:p-4 flex flex-col justify-end">
                        <div className="flex items-center gap-0.5 sm:gap-1 mb-0.5 sm:mb-1">
                          <span className="text-amber-400">{item.icon}</span>
                          <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-mono text-amber-500 uppercase truncate">{item.type}</span>
                        </div>
                        <h4 className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-bold uppercase leading-tight">{item.title}</h4>
                        <p className="text-[6px] sm:text-[7px] md:text-[8px] font-mono text-zinc-400 mt-0.5 sm:mt-1 flex items-center gap-0.5 sm:gap-1">
                          <Zap size={6} className="sm:w-1.5 sm:h-1.5" /> {item.ctr} • {item.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Clients Section - New */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-px w-4 sm:w-5 bg-blue-500" />
                  <Users size={14} className="text-blue-400" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Trusted By</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {clients.map((client, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 text-center group hover:border-blue-500/30 transition-all"
                  >
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2">
                      <img 
                        src={client.image} 
                        alt={client.name}
                        className="w-full h-full rounded-full object-cover border-2 border-blue-500/30 group-hover:border-blue-500 transition-all"
                      />
                      <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-0.5">
                        <Star size={6} className="text-white fill-white sm:w-2 sm:h-2" />
                      </div>
                    </div>
                    <h4 className="text-[10px] sm:text-xs font-bold text-white truncate">{client.name}</h4>
                    <p className="text-[8px] sm:text-[9px] text-zinc-500 truncate">{client.role}</p>
                    <div className="flex items-center justify-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={8} className={i < client.rating ? "text-yellow-500 fill-yellow-500" : "text-zinc-600"} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center pt-2">
                <span className="text-[7px] sm:text-[8px] text-zinc-600 font-mono">+ 50 more satisfied clients</span>
              </div>
            </motion.div>

            {/* Contact Section */}
            <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8"
              >
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <span className="h-px w-4 sm:w-5 md:w-6 bg-blue-500" />
                    <span className="text-blue-500 font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">Let's Create</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[0.95]">
                    Something <br /> 
                    <span className="text-transparent outline-text">Amazing.</span>
                  </h3>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
                    Whether it's content edits, motion graphics, or a full-length project - 
                    I'm ready to bring your vision to life.
                  </p>
                  
                  <div className="relative group pt-1 sm:pt-2">
                    <button
                      onClick={copyEmail}
                      className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 text-sm sm:text-base md:text-lg font-mono text-zinc-300 hover:text-white transition-colors"
                    >
                      <Mail size={14} className="sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-blue-400" />
                      <span className="text-xs sm:text-sm md:text-base">chandaneditz396@gmail.com</span>
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-3 sm:space-y-4"
              >
                <span className="text-[9px] sm:text-[10px] md:text-xs font-mono text-zinc-600 uppercase tracking-wider">Start a conversation</span>
                <motion.a 
                  href="mailto:chandaneditz396@gmail.com"
                  whileHover={{ scale: 1.01, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full font-black uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-zinc-200 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-500" />
                  <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 md:gap-3">
                    Work With Me
                    <Mail size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  </span>
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

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3"
              >
                <User size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-blue-400" />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-mono text-zinc-300 whitespace-nowrap">BCA Student • Video Editor (5.6y) • Graphic Designer (3.1y)</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
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
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
        }
        
        @media (max-width: 640px) {
          .outline-text {
            -webkit-text-stroke: 0.5px rgba(255,255,255,0.1);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutContact;