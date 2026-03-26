"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Clock, Award, Eye, ChevronRight, Film, Camera, Music, Globe } from "lucide-react";

const WorkShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const projects = [
    {
      id: "01",
      title: "NIKE AIR MAX",
      category: "Commercial",
      year: "2024",
      role: "Lead Editor / Colorist",
      duration: "60s",
      client: "Nike",
      description: "High-energy commercial blending urban culture with athletic performance. Featured in global campaign launch.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070",
      video: "https://player.vimeo.com/video/123456789",
      awards: ["AICP Award Nominee", "Shots Finalist"],
      metrics: { views: "2.4M", engagement: "89%" },
      technologies: ["Davinci Resolve", "After Effects", "Fusion"]
    },
    {
      id: "02",
      title: "SPOTIFY WRAPPED",
      category: "Motion Design",
      year: "2024",
      role: "Motion Designer",
      duration: "45s",
      client: "Spotify",
      description: "Dynamic data visualization bringing user listening habits to life through kinetic typography and fluid animations.",
      image: "https://images.unsplash.com/photo-1611339555312-b6070c4d73a4?q=80&w=2070",
      video: "https://player.vimeo.com/video/123456790",
      awards: ["Webby Winner", "ADC Merit"],
      metrics: { views: "5.1M", engagement: "94%" },
      technologies: ["Cinema 4D", "Octane", "After Effects"]
    },
    {
      id: "03",
      title: "NATIONAL GEOGRAPHIC",
      category: "Documentary",
      year: "2023",
      role: "Editor / Sound Designer",
      duration: "22min",
      client: "Nat Geo",
      description: "Cinematic documentary exploring deep ocean ecosystems. Mastered in Dolby Atmos for immersive experience.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059",
      video: "https://player.vimeo.com/video/123456791",
      awards: ["Emmy Nomination", "IDA Award"],
      metrics: { views: "890K", engagement: "92%" },
      technologies: ["Premiere Pro", "Pro Tools", "Resolve"]
    },
    {
      id: "04",
      title: "BEATS BY DRE",
      category: "Music Video",
      year: "2023",
      role: "Colorist / VFX",
      duration: "3:24",
      client: "Apple",
      description: "Psychedelic visual journey synchronized with original soundtrack. Pushed color grading boundaries.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074",
      video: "https://player.vimeo.com/video/123456792",
      awards: ["Cannes Lion", "D&AD Pencil"],
      metrics: { views: "8.2M", engagement: "96%" },
      technologies: ["Flame", "Baselight", "Nuke"]
    }
  ];

  // Mouse position for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const moveX = e.clientX - rect.left - rect.width / 2;
      const moveY = e.clientY - rect.top - rect.height / 2;
      x.set(moveX / 10);
      y.set(moveY / 10);
    }
  };

  return (
    <section className="bg-[#080808] min-h-screen text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-blue-500" />
            <span className="text-blue-400 font-mono text-[10px] tracking-[0.4em] uppercase">
              PORTFOLIO // 2024
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
          >
            Featured <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
              Work.
            </span>
          </motion.h2>
        </div>

        {/* Main Showcase */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative mb-16 lg:mb-24"
        >
          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column - Featured Project */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24 lg:max-h-[600px]"
            >
              <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden group">
                {/* Background Image with Parallax */}
                <motion.div
                  style={{
                    x: useTransform(mouseX, [-20, 20], [-10, 10]),
                    y: useTransform(mouseY, [-20, 20], [-10, 10]),
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-mono text-sm">{projects[activeProject].id}</span>
                      <span className="w-8 h-px bg-blue-400/50" />
                      <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                        {projects[activeProject].category}
                      </span>
                    </div>

                    <h3 className="text-4xl lg:text-5xl font-black tracking-tight uppercase">
                      {projects[activeProject].title}
                    </h3>

                    <p className="text-zinc-300 max-w-md text-sm lg:text-base">
                      {projects[activeProject].description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <button className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">
                        <Play size={16} fill="currentColor" /> Watch Preview
                      </button>
                      <button className="group flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-sm font-bold hover:border-white/50 transition-all">
                        View Case Study <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Metrics Overlay */}
                <div className="absolute top-6 right-6 flex gap-3">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                    <Eye size={14} className="text-blue-400 mb-1" />
                    <span className="text-xs font-bold">{projects[activeProject].metrics.views}</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                    <Award size={14} className="text-yellow-400 mb-1" />
                    <span className="text-xs font-bold">{projects[activeProject].awards.length} Awards</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Project List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveProject(index)}
                  className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
                    activeProject === index 
                      ? 'lg:scale-105 z-10 shadow-2xl shadow-blue-600/20' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="relative h-32 lg:h-40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    
                    <div className="absolute inset-0 p-6 flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400 font-mono text-xs">{project.id}</span>
                          <span className="text-zinc-500 text-xs">|</span>
                          <span className="text-zinc-400 font-mono text-xs">{project.category}</span>
                        </div>
                        <h4 className="text-xl font-black tracking-tight uppercase">
                          {project.title}
                        </h4>
                        <div className="flex items-center gap-4 text-xs text-zinc-400">
                          <span className="flex items-center gap-1"><Clock size={12} /> {project.duration}</span>
                          <span>{project.year}</span>
                        </div>
                      </div>

                      <motion.div
                        animate={{ x: hoveredIndex === index ? 0 : 20, opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight size={20} className="text-blue-400" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Awards Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-8 lg:pt-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <span className="text-zinc-500 font-mono text-xs tracking-wider">RECOGNITION</span>
              <div className="flex gap-4">
                {["AICP", "WEBBY", "CANNES LIONS", "D&AD"].map((award) => (
                  <span key={award} className="text-sm font-bold text-zinc-400 hover:text-white transition-colors cursor-default">
                    {award}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:border-white/30 hover:text-white transition-all">
                <Film size={14} />
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:border-white/30 hover:text-white transition-all">
                <Camera size={14} />
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:border-white/30 hover:text-white transition-all">
                <Music size={14} />
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:border-white/30 hover:text-white transition-all">
                <Globe size={14} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkShowcase;