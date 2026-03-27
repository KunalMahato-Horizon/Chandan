"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const WorkShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const thumbnailRefs = useRef([]);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: "01",
      title: "NIKE AIR MAX",
      category: "Commercial",
      gradient: "from-red-600/20 to-orange-600/20",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070",
      thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400",
      color: "#ef4444"
    },
    {
      id: "02",
      title: "SPOTIFY WRAPPED",
      category: "Motion Design",
      gradient: "from-green-600/20 to-emerald-600/20",
      image: "https://images.unsplash.com/photo-1611339555312-b6070c4d73a4?q=80&w=2070",
      thumbnail: "https://images.unsplash.com/photo-1611339555312-b6070c4d73a4?q=80&w=400",
      color: "#10b981"
    },
    {
      id: "03",
      title: "NATIONAL GEOGRAPHIC",
      category: "Documentary",
      gradient: "from-yellow-600/20 to-amber-600/20",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400",
      color: "#eab308"
    },
    {
      id: "04",
      title: "BEATS BY DRE",
      category: "Music Video",
      gradient: "from-purple-600/20 to-pink-600/20",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074",
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400",
      color: "#a855f7"
    },
    {
      id: "05",
      title: "APPLE VISION",
      category: "Tech",
      gradient: "from-blue-600/20 to-cyan-600/20",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2070",
      thumbnail: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400",
      color: "#3b82f6"
    }
  ];

  const nextProject = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailRefs.current[activeIndex] && !isMobile) {
      thumbnailRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [activeIndex, isMobile]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? (isMobile ? 100 : 300) : (isMobile ? -100 : -300),
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? (isMobile ? 100 : 300) : (isMobile ? -100 : -300),
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="bg-black min-h-screen text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Animated Background Gradient - Responsive size */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 opacity-20 sm:opacity-30"
      >
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] rounded-full bg-gradient-to-r ${projects[activeIndex].gradient} blur-2xl sm:blur-3xl`} />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 sm:mb-16 lg:mb-20 xl:mb-24"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-zinc-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase"
              >
                Selected Projects
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mt-2 sm:mt-3"
              >
                Visual Narratives
              </motion.h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-1 sm:gap-2"
            >
              <span className="text-zinc-500 sm:text-zinc-600 font-mono text-xs sm:text-sm">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-zinc-600 sm:text-zinc-700 text-xs sm:text-sm">/</span>
              <span className="text-zinc-400 sm:text-zinc-500 font-mono text-xs sm:text-sm">
                {String(projects.length).padStart(2, '0')}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Image Section - Responsive */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden group">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative cursor-pointer"
                onClick={() => setIsFullscreen(true)}
              >
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh] object-cover"
                />
                
                {/* Gradient Overlay - Responsive */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Content Overlay - Responsive padding and text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <span 
                      className="text-[10px] sm:text-xs md:text-sm font-mono tracking-wider"
                      style={{ color: projects[activeIndex].color }}
                    >
                      {projects[activeIndex].category}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold tracking-tight mt-1 sm:mt-2 lg:mt-3">
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-zinc-400 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 font-mono">
                      {projects[activeIndex].id}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - Responsive positioning */}
            <button
              onClick={prevProject}
              className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md rounded-full p-2 sm:p-2.5 lg:p-3 hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 duration-300 border border-white/10"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md rounded-full p-2 sm:p-2.5 lg:p-3 hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 duration-300 border border-white/10"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] sm:h-[2px] bg-white/10">
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Thumbnail Strip - Responsive */}
        <div className="relative">
          <div className={`flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto pb-4 sm:pb-6 scrollbar-hide ${!isMobile ? 'justify-center lg:justify-start' : 'justify-start'}`}>
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                ref={(el) => (thumbnailRefs.current[index] = el)}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                whileHover={!isMobile ? { y: -5 } : {}}
                whileTap={{ scale: 0.98 }}
                className={`flex-shrink-0 transition-all duration-500 group ${
                  activeIndex === index 
                    ? 'opacity-100' 
                    : 'opacity-40 hover:opacity-70'
                }`}
              >
                <div className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? 'ring-2 ring-offset-1 sm:ring-offset-2 ring-offset-black' : ''
                }`}
                style={activeIndex === index ? { ringColor: project.color } : {}}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {activeIndex === index && (
                    <motion.div 
                      layoutId="activeThumbnail"
                      className="absolute inset-0 bg-white/10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
                <p className={`text-[9px] sm:text-xs text-center mt-1 sm:mt-2 font-mono transition-colors duration-300 ${
                  activeIndex === index ? 'text-white' : 'text-zinc-600'
                }`}>
                  {project.id}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Scroll Hint - Hide on mobile */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-black to-transparent w-12 sm:w-20 h-full pointer-events-none" />
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black to-transparent w-12 sm:w-20 h-full pointer-events-none" />
        </div>

        {/* Bottom Indicator - Responsive */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-white/5"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-mono">
            <span className="text-[10px] sm:text-xs">Explore the collection</span>
            <div className="flex gap-2 sm:gap-4">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-3 sm:w-4 lg:w-6 bg-white' : 'w-1.5 sm:w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>
            <span className="hidden sm:block text-[10px] sm:text-xs">Click image to expand</span>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Modal - Enhanced Responsive */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 text-white/40 hover:text-white transition-all duration-300 hover:scale-110 z-10"
            >
              <X size={20} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="max-w-full max-h-[75vh] sm:max-h-[80vh] lg:max-h-[85vh] object-contain rounded-xl sm:rounded-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
              
              {/* Modal Navigation - Responsive */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevProject();
                }}
                className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-2.5 lg:p-3 transition-all backdrop-blur-sm"
              >
                <ArrowLeft size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextProject();
                }}
                className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-2.5 lg:p-3 transition-all backdrop-blur-sm"
              >
                <ArrowRight size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
            
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0 text-center px-4">
              <p 
                className="text-[10px] sm:text-xs lg:text-sm font-mono tracking-wider"
                style={{ color: projects[activeIndex].color }}
              >
                {projects[activeIndex].category}
              </p>
              <p className="text-white text-sm sm:text-base lg:text-xl font-bold mt-1">
                {projects[activeIndex].title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default WorkShowcase;