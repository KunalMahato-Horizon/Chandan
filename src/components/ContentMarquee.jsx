"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Zap, Clock, Palette, Video, Camera, Layers, PenTool, Image } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContentMarquee = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    if (isInView) controls.start("visible");
    return () => window.removeEventListener("resize", checkDevice);
  }, [isInView, controls]);

  // Skills data based on your client's info
  const column1 = [
    { 
      type: "Video Editing", 
      img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000", 
      title: "March 2024 – Aug 2025", 
      views: "1.5 yrs", 
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
      title: "March 2024 – Aug 2025", 
      views: "1.5 yrs", 
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
      title: "June 2024 – Aug 2025", 
      ctr: "1.2 yrs", 
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
    <section ref={containerRef} className="bg-[#050505] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* Left Side: Sticky Text - Skills Summary - Responsive */}
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="w-full lg:sticky lg:top-24 lg:w-1/2 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10"
          >
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-6 sm:w-8 md:w-10 h-px bg-blue-500" />
                <span className="text-blue-500 font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">
                  Skills & Experience
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tighter uppercase leading-[0.9] sm:leading-[0.88] md:leading-[0.86] lg:leading-[0.85]">
                CREATIVE <br />
                <span className="text-transparent outline-text">TOOLKIT</span> <br />
                MASTERY.
              </h2>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-sm leading-relaxed border-l-2 border-blue-500/20 pl-4 sm:pl-5 md:pl-6">
              Professional expertise in video editing, motion graphics, and design with proven experience across multiple creative disciplines.
            </p>

            {/* Experience Stats - Responsive Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 py-4 sm:py-5 md:py-6 lg:py-8 border-y border-white/5">
              {[
                { label: "Video Editing", value: "1.5 yrs", icon: <Video size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" /> },
                { label: "Graphic Design", value: "1.2 yrs", icon: <Palette size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" /> },
                { label: "Skills", value: "6+", icon: <Zap size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" /> },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-0.5 sm:space-y-1">
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-blue-500 uppercase font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-wider">
                    {stat.icon} <span className="truncate">{stat.label}</span>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-black italic">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Skill Categories with Icons - Responsive */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
              {[
                { icon: <Video size={10} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />, text: "Video Editing", color: "text-blue-500" },
                { icon: <Image size={10} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />, text: "Thumbnail Design", color: "text-green-500" },
                { icon: <Layers size={10} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />, text: "Motion Graphics", color: "text-purple-500" },
                { icon: <Camera size={10} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />, text: "Photo Editing", color: "text-amber-500" },
                { icon: <PenTool size={10} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />, text: "Animations", color: "text-cyan-500" },
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-full">
                  <span className={skill.color}>{skill.icon}</span>
                  <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-mono uppercase whitespace-nowrap">{skill.text}</span>
                </div>
              ))}
            </div>

            {/* Timeline Summary - Responsive */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5 md:p-4">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5 md:mb-3">
                <Clock size={10} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-blue-500" />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Experience Timeline</span>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-0">
                  <span className="text-zinc-300 text-[10px] sm:text-xs">Video Editor</span>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-zinc-500">Mar 2024 – Aug 2025</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-0">
                  <span className="text-zinc-300 text-[10px] sm:text-xs">Graphic Designer</span>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-zinc-500">Jun 2024 – Aug 2025</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Moving Marquee - Responsive */}
          <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[700px] xl:h-[800px] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl p-1.5 sm:p-2 md:p-3 lg:p-4 border border-white/5 bg-white/[0.02]">
            {/* Column 1: Up */}
            <div className="w-1/2 overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
              <motion.div 
                animate={{ y: [0, -800] }}
                transition={{ duration: isMobile ? 20 : (isTablet ? 28 : 35), repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6"
              >
                {column1.map((item, idx) => (
                  <div key={idx} className="relative aspect-[9/16] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group">
                    <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-2.5 sm:p-3 md:p-3.5 lg:p-4 flex flex-col justify-end">
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
                    <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-2.5 sm:p-3 md:p-3.5 lg:p-4 flex flex-col justify-end">
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
        </div>
      </div>

      <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.08);
          color: transparent;
        }
        
        @media (max-width: 640px) {
          .outline-text {
            -webkit-text-stroke: 0.5px rgba(255,255,255,0.08);
          }
        }
      `}</style>
    </section>
  );
};

export default ContentMarquee;