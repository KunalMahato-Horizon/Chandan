"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, ChevronRight, Mic, Film, X, 
  Eye, Heart, Music, Zap, Clock, Award, Sparkles, TrendingUp, 
  Volume2, Flame, ChevronLeft,
} from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

const WorkGallery = ({ onVideoSelect }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [hoveredThumb, setHoveredThumb] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);

  // Function to close modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, closeModal]);

  const reelsData = [
    {
      id: 1,
      title: "Gym Hook Reel",
      desc: "60s transformation teaser | From flab to fab in 60 seconds",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      duration: "0:45",
      views: "2.4M",
      likes: "245K",
      music: "Phoenix - Netam",
      category: "fitness",
      engagement: "89%"
    },
    {
      id: 2,
      title: "Street Style",
      desc: "Fashion week highlights | Runway moments captured",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      duration: "0:30",
      views: "1.8M",
      likes: "178K",
      music: "Runway - DJ Khaled",
      category: "fashion",
      engagement: "76%"
    },
    {
      id: 3,
      title: "Tech Unboxing",
      desc: "Product reveal short | Latest tech unboxed",
      thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
      duration: "0:55",
      views: "3.1M",
      likes: "234K",
      music: "Tech House - Synthwave",
      category: "tech",
      engagement: "82%"
    }
  ];

  // Autoplay carousel - FIXED: added reelsData.length to dependencies
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveReelIndex((prev) => (prev + 1) % reelsData.length);
      }, 5000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, reelsData.length]);

  const sections = [
    {
      id: "shorts",
      title: "Shorts & Reels",
      icon: <Zap size={18} />,
      description: "High-retention vertical content for social platforms",
      color: "from-blue-500/20",
      borderColor: "border-blue-500/20",
      aspectRatio: "portrait",
      projects: reelsData
    },
    {
      id: "podcast",
      title: "Podcast Edits",
      icon: <Mic size={18} />,
      description: "Multi-cam podcast editing with audio mastering",
      color: "from-purple-500/20",
      borderColor: "border-purple-500/20",
      aspectRatio: "landscape",
      projects: [
        { 
          title: "Tech Talk Weekly", 
          desc: "Episode #42 - AI Revolution", 
          youtubeUrl: "https://www.youtube.com/watch?v=J0Aq44Pze-w",
          thumbnail: "https://img.youtube.com/vi/J0Aq44Pze-w/maxresdefault.jpg",
          id: "p1",
          duration: "58:22",
          platform: "Spotify/YouTube",
          guests: "3 speakers"
        },
        { 
          title: "Startup Stories", 
          desc: "Founder's journey", 
          youtubeUrl: "https://www.youtube.com/watch?v=ZXsQAXx_ao0",
          thumbnail: "https://img.youtube.com/vi/ZXsQAXx_ao0/maxresdefault.jpg",
          id: "p2",
          duration: "1:12:45",
          platform: "Apple Podcasts",
          guests: "2 speakers"
        },
      ]
    },
    {
      id: "documentary",
      title: "Documentary Edits",
      icon: <Film size={18} />,
      description: "Cinematic long-form storytelling",
      color: "from-amber-500/20",
      borderColor: "border-amber-500/20",
      aspectRatio: "landscape",
      projects: [
        { 
          title: "The Alpine Doc", 
          desc: "Mountain expedition film", 
          youtubeUrl: "https://www.youtube.com/watch?v=PpA9t6tqVTI",
          thumbnail: "https://img.youtube.com/vi/PpA9t6tqVTI/maxresdefault.jpg",
          id: "d1",
          duration: "22:15",
          role: "Editor & Colorist",
          award: "Film Fest Finalist"
        },
        { 
          title: "Urban Nomads", 
          desc: "City life documentary", 
          youtubeUrl: "https://www.youtube.com/watch?v=WUe9dz9X7R4",
          thumbnail: "https://img.youtube.com/vi/WUe9dz9X7R4/maxresdefault.jpg",
          id: "d2",
          duration: "34:40",
          role: "Lead Editor",
          award: "Official Selection"
        },
      ]
    }
  ];

  const currentReel = reelsData[activeReelIndex];

  const nextReel = () => {
    setAutoplay(false);
    setActiveReelIndex((prev) => (prev + 1) % reelsData.length);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const prevReel = () => {
    setAutoplay(false);
    setActiveReelIndex((prev) => (prev - 1 + reelsData.length) % reelsData.length);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const selectReel = (index) => {
    setAutoplay(false);
    setActiveReelIndex(index);
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Function to open video modal
  const openVideoModal = (project) => {
    setSelectedVideo(project);
    setIsModalOpen(true);
    if (onVideoSelect) {
      onVideoSelect(project.id, project.title);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-[#030303] to-[#0a0a0a] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full mb-4"
            >
              <Flame size={14} className="text-orange-500" />
              <span className="text-orange-400 text-xs tracking-wider">VIRAL CONTENT</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-none">
              Work <br/> 
              <span className="bg-gradient-to-r from-white via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Library.
              </span>
            </h2>
            <p className="text-zinc-500 text-sm mt-4 max-w-2xl mx-auto">
              Curated collection of viral content, cinematic edits, and creative storytelling
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
            {sections.map((section, sectionIdx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
                className="space-y-6 sm:space-y-7 md:space-y-8"
              >
                {/* Section Header */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-white/5">
                  <div className={`w-1 h-6 sm:h-7 md:h-8 bg-gradient-to-b ${section.color} rounded-full`} />
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className={`text-${section.id === 'shorts' ? 'blue' : section.id === 'podcast' ? 'purple' : 'amber'}-400`}>
                      {section.icon}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight">
                      {section.title}
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-600 ml-auto">
                    {section.projects.length} projects
                  </span>
                </div>

                {/* Section Description */}
                <p className="text-zinc-500 text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-wider sm:tracking-widest pl-6 sm:pl-7 md:pl-8">
                  {section.description}
                </p>

                {/* Premium Reel Section for Shorts */}
                {section.id === "shorts" ? (
                  <div className="mt-6">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                      
                      {/* Left Side - Thumbnail Strip */}
                      <div className="lg:w-80 order-2 lg:order-1">
                        <div className="sticky top-24 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Sparkles size={14} className="text-purple-400" />
                              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Quick Access</h3>
                            </div>
                            <button 
                              onClick={() => setAutoplay(!autoplay)}
                              className={`text-[10px] px-2 py-1 rounded-full transition ${
                                autoplay ? 'bg-purple-500/20 text-purple-400' : 'bg-white/10 text-zinc-400'
                              }`}
                            >
                              {autoplay ? '● AUTOPLAY' : '○ AUTOPLAY'}
                            </button>
                          </div>
                          
                          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                            {reelsData.map((reel, idx) => {
                              const videoId = getYouTubeId(reel.youtubeUrl);
                              const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : reel.thumbnail;
                              
                              return (
                                <motion.button
                                  key={reel.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  whileHover={{ scale: 1.02, x: 4 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => selectReel(idx)}
                                  onMouseEnter={() => setHoveredThumb(idx)}
                                  onMouseLeave={() => setHoveredThumb(null)}
                                  className={`w-full group relative rounded-xl overflow-hidden transition-all duration-300 ${
                                    activeReelIndex === idx 
                                      ? 'ring-2 ring-purple-500 shadow-lg shadow-purple-500/25' 
                                      : 'opacity-60 hover:opacity-100'
                                  }`}
                                >
                                  <div className="flex gap-3">
                                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                      <img 
                                        src={thumbnailUrl}
                                        alt={reel.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                          if (videoId) {
                                            e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                          }
                                        }}
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                      
                                      <div className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-sm px-1 py-0.5 rounded text-[8px] text-white">
                                        {reel.duration}
                                      </div>
                                    </div>
                                    
                                    <div className="flex-1 text-left py-1">
                                      <p className="text-sm font-bold text-white truncate">{reel.title}</p>
                                      <div className="flex items-center gap-2 mt-1">
                                        <div className="flex items-center gap-0.5">
                                          <Eye size={10} className="text-blue-400" />
                                          <span className="text-[10px] text-zinc-400">{reel.views}</span>
                                        </div>
                                        <div className="flex items-center gap-0.5">
                                          <Heart size={10} className="text-pink-400" />
                                          <span className="text-[10px] text-zinc-400">{reel.likes}</span>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-1 mt-1">
                                        <Music size={8} className="text-purple-400" />
                                        <span className="text-[9px] text-zinc-500 truncate">{reel.music}</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {activeReelIndex === idx && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500" />
                                  )}
                                  
                                  <AnimatePresence>
                                    {hoveredThumb === idx && activeReelIndex !== idx && (
                                      <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                                      >
                                        <div className="bg-white/20 rounded-full p-2">
                                          <Play size={16} className="text-white" fill="white" />
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.button>
                              );
                            })}
                          </div>
                          
                          <div className="pt-4 mt-2 border-t border-white/10">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="text-center">
                                <div className="text-lg font-bold text-white">16.2M</div>
                                <div className="text-[8px] text-zinc-500 uppercase">Total Views</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-white">94%</div>
                                <div className="text-[8px] text-zinc-500 uppercase">Viral Rate</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Side - Main Reel Player */}
                      <div className="flex-1 order-1 lg:order-2">
                        <div className="relative">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeReelIndex}
                              initial={{ opacity: 0, scale: 0.98, x: 20 }}
                              animate={{ opacity: 1, scale: 1, x: 0 }}
                              exit={{ opacity: 0, scale: 0.98, x: -20 }}
                              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                              className="relative group"
                            >
                              <div className={`relative rounded-2xl overflow-hidden shadow-2xl`}>
                                <div className="relative aspect-[9/16] max-w-md mx-auto">
                                  <img 
                                    src={currentReel.thumbnail}
                                    alt={currentReel.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      const videoId = getYouTubeId(currentReel.youtubeUrl);
                                      if (videoId) {
                                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                      }
                                    }}
                                  />
                                  
                                  {/* Plain dark gradient overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                  
                                  {/* Category Badge */}
                                  <div className="absolute top-4 left-4">
                                    <div className="backdrop-blur-xl bg-white/10 rounded-full px-3 py-1.5 border border-white/20">
                                      <span className="text-[10px] font-mono text-white uppercase tracking-wider">
                                        {currentReel.category}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  {/* Duration Badge */}
                                  <div className="absolute top-4 right-4 backdrop-blur-xl bg-black/60 rounded-full px-3 py-1.5">
                                    <div className="flex items-center gap-1">
                                      <Clock size={10} className="text-white/80" />
                                      <span className="text-xs text-white">{currentReel.duration}</span>
                                    </div>
                                  </div>
                                  
                                  {/* Music Info */}
                                  <div className="absolute bottom-28 left-4 right-4">
                                    <div className="flex items-center gap-2 text-white/80 backdrop-blur-sm bg-black/50 rounded-full px-3 py-1.5 w-fit">
                                      <Music size={12} />
                                      <span className="text-xs">{currentReel.music}</span>
                                    </div>
                                  </div>
                                  
                                  {/* Title & Actions */}
                                  <div className="absolute bottom-4 left-4 right-4">
                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                                      {currentReel.title}
                                    </h2>
                                    <p className="text-xs text-white/80 mb-3 line-clamp-2">
                                      {currentReel.desc}
                                    </p>
                                    
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                          <Eye size={12} className="text-white/60" />
                                          <span className="text-xs text-white/80">{currentReel.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                          <Heart size={12} className="text-white/60" />
                                          <span className="text-xs text-white/80">{currentReel.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                          <TrendingUp size={12} className="text-green-400" />
                                          <span className="text-xs text-green-400">{currentReel.engagement}</span>
                                        </div>
                                      </div>
                                      
                                      <button
                                        onClick={() => openVideoModal(currentReel)}
                                        className="group/btn relative overflow-hidden bg-white text-black px-4 py-2 rounded-full font-bold text-xs"
                                      >
                                        <span className="relative z-10 flex items-center gap-1">
                                          <Play size={10} fill="black" />
                                          Watch Now
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                          
                          <button
                            onClick={prevReel}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all lg:hidden"
                          >
                            <ChevronLeft size={16} className="text-white" />
                          </button>
                          <button
                            onClick={nextReel}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all lg:hidden"
                          >
                            <ChevronRight size={16} className="text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Trending Audio Strip */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="mt-8 pt-4 border-t border-white/5"
                    >
                      <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                          <Volume2 size={14} className="text-purple-400" />
                          <span className="text-xs text-zinc-500 uppercase tracking-wider">Trending Sounds</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["Phoenix", "Runway", "Tech House", "Kitchen Beats", "Workout Anthem", "Sunset Dreams"].map((sound, idx) => (
                            <motion.span
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              className="text-xs px-3 py-1.5 bg-white/5 rounded-full text-zinc-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all cursor-pointer"
                            >
                              #{sound.replace(/\s/g, '')}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  // Grid Layout for Podcast and Documentary sections
                  <div className={`grid gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-5 md:mt-6 ${
                    section.aspectRatio === 'portrait' 
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      : 'grid-cols-1 lg:grid-cols-2'
                  }`}>
                    {section.projects.map((project, idx) => {
                      const videoId = getYouTubeId(project.youtubeUrl);
                      const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : project.thumbnail;
                      
                      return (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className={`group relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-zinc-900 border ${section.borderColor} hover:border-white/20 transition-all duration-500 cursor-pointer ${
                            section.aspectRatio === 'portrait' 
                              ? 'aspect-[9/16]'
                              : 'aspect-video'
                          }`}
                          onClick={() => openVideoModal(project)}
                        >
                          <img 
                            src={thumbnailUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100" 
                            onError={(e) => {
                              if (videoId) {
                                e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                              }
                            }}
                          />
                          
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-red-600 rounded-full p-3 sm:p-4 md:p-5 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                              <Play size={24} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="white" />
                            </div>
                          </div>
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100" />
                          
                          <div className="absolute inset-0 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-white bg-black/60 backdrop-blur-sm px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
                                {project.duration}
                              </span>
                            </div>

                            <div>
                              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                                {project.title}
                              </h4>
                              <div className="flex items-center gap-2 mt-1 text-[8px] sm:text-[9px] md:text-[10px] text-zinc-400">
                                {project.guests && (
                                  <>
                                    <Mic size={8} />
                                    <span>{project.guests}</span>
                                  </>
                                )}
                                {project.award && (
                                  <>
                                    <Award size={8} />
                                    <span className="text-amber-400">{project.award}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${section.color} transition-all duration-500`} />
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

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
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 3px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
            border-radius: 10px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(139,92,246,0.5);
            border-radius: 10px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(139,92,246,0.8);
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 sm:-right-12 sm:top-0 p-2 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="mb-4 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedVideo.title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{selectedVideo.desc}</p>
            </div>

            <div className="relative w-full bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.youtubeUrl)}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="text-zinc-400">Duration: {selectedVideo.duration}</span>
              {selectedVideo.views && (
                <span className="text-zinc-400">Views: {selectedVideo.views}</span>
              )}
              {selectedVideo.platform && (
                <span className="text-zinc-400">Platform: {selectedVideo.platform}</span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default WorkGallery;