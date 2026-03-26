"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Zap, Clock, Palette, Video, Camera, Layers, PenTool, Image } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContentMarquee = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    if (isInView) controls.start("visible");
    return () => window.removeEventListener("resize", checkMobile);
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
    <section ref={containerRef} className="bg-[#050505] py-20 lg:py-32 overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Sticky Text - Skills Summary */}
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:space-y-10"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-blue-500" />
                <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">Skills & Experience</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                CREATIVE <br />
                <span className="text-transparent outline-text">TOOLKIT</span> <br />
                MASTERY.
              </h2>
            </div>

            <p className="text-zinc-400 text-base lg:text-lg max-w-sm leading-relaxed border-l-2 border-blue-500/20 pl-6">
              Professional expertise in video editing, motion graphics, and design with proven experience across multiple creative disciplines.
            </p>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8 border-y border-white/5">
              {[
                { label: "Video Editing", value: "1.5 yrs", icon: <Video size={14} /> },
                { label: "Graphic Design", value: "1.2 yrs", icon: <Palette size={14} /> },
                { label: "Skills", value: "6+", icon: <Zap size={14} /> },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-blue-500 uppercase font-mono text-[10px] tracking-widest">
                    {stat.icon} {stat.label}
                  </div>
                  <div className="text-2xl font-black italic">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Skill Categories with Icons */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full">
                <Video size={12} className="text-blue-500" />
                <span className="text-[10px] font-mono uppercase">Video Editing</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full">
                <Image size={12} className="text-green-500" />
                <span className="text-[10px] font-mono uppercase">Thumbnail Design</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full">
                <Layers size={12} className="text-purple-500" />
                <span className="text-[10px] font-mono uppercase">Motion Graphics</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full">
                <Camera size={12} className="text-amber-500" />
                <span className="text-[10px] font-mono uppercase">Photo Editing</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full">
                <PenTool size={12} className="text-cyan-500" />
                <span className="text-[10px] font-mono uppercase">Animations</span>
              </div>
            </div>

            {/* Timeline Summary */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={12} className="text-blue-500" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Experience Timeline</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-300">Video Editor</span>
                  <span className="text-[10px] font-mono text-zinc-500">Mar 2024 – Aug 2025</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-300">Graphic Designer</span>
                  <span className="text-[10px] font-mono text-zinc-500">Jun 2024 – Aug 2025</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Moving Marquee - EXACTLY THE SAME STYLE */}
          <div className="relative h-[500px] lg:h-[800px] flex gap-4 lg:gap-6 overflow-hidden rounded-3xl p-2 lg:p-4 border border-white/5 bg-white/[0.02]">
            {/* Column 1: Up */}
            <div className="w-1/2 overflow-hidden rounded-2xl">
              <motion.div 
                animate={{ y: [0, -800] }}
                transition={{ duration: isMobile ? 25 : 35, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-4 lg:gap-6"
              >
                {column1.map((item, idx) => (
                  <div key={idx} className="relative aspect-[9/16] rounded-xl lg:rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group">
                    <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-4 flex flex-col justify-end">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-blue-400">{item.icon}</span>
                        <span className="text-[9px] font-mono text-blue-500 uppercase">{item.type}</span>
                      </div>
                      <h4 className="text-xs lg:text-sm font-bold uppercase">{item.title}</h4>
                      <p className="text-[8px] font-mono text-zinc-400 mt-1 flex items-center gap-1">
                        <Clock size={8} /> {item.views} • {item.category}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Column 2: Down */}
            <div className="w-1/2 overflow-hidden rounded-2xl">
              <motion.div 
                animate={{ y: [-800, 0] }}
                transition={{ duration: isMobile ? 30 : 40, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-4 lg:gap-6"
              >
                {column2.map((item, idx) => (
                  <div key={idx} className="relative aspect-[4/3] rounded-xl lg:rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group">
                    <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-4 flex flex-col justify-end">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-amber-400">{item.icon}</span>
                        <span className="text-[9px] font-mono text-amber-500 uppercase">{item.type}</span>
                      </div>
                      <h4 className="text-xs lg:text-sm font-bold uppercase">{item.title}</h4>
                      <p className="text-[8px] font-mono text-zinc-400 mt-1 flex items-center gap-1">
                        <Zap size={8} /> {item.ctr} • {item.category}
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
      `}</style>
    </section>
  );
};

export default ContentMarquee;