"use client";

import { motion } from "framer-motion";
import { Play, Smartphone, Mic, Film, X, ChevronLeft, ChevronRight as ChevronRightIcon, Award } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

const WorkGallery = ({ onVideoSelect }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const sections = [
    {
      id: "shorts",
      title: "Shorts & Reels",
      icon: <Smartphone size={18} />,
      description: "High-retention vertical content for social platforms",
      color: "from-blue-500/20",
      borderColor: "border-blue-500/20",
      accentColor: "blue",
      aspectRatio: "portrait",
      layout: "scroll",
      projects: [
        { 
          title: "Gym Hook Reel", 
          desc: "60s transformation teaser", 
          youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          id: "s1",
          duration: "0:45",
          platform: "Instagram Reels"
        },
        { 
          title: "Street Style", 
          desc: "Fashion week highlights", 
          youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
          thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
          id: "s2",
          duration: "0:30",
          platform: "TikTok"
        },
        { 
          title: "Tech Unboxing", 
          desc: "Product reveal short", 
          youtubeUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
          thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
          id: "s3",
          duration: "0:55",
          platform: "YouTube Shorts"
        },
        { 
          title: "Food Vibes", 
          desc: "Mouth-watering cooking reel", 
          youtubeUrl: "https://www.youtube.com/watch?v=J0Aq44Pze-w",
          thumbnail: "https://img.youtube.com/vi/J0Aq44Pze-w/maxresdefault.jpg",
          id: "s4",
          duration: "0:25",
          platform: "Instagram Reels"
        },
        { 
          title: "Fitness Journey", 
          desc: "Transformation story", 
          youtubeUrl: "https://www.youtube.com/watch?v=ZXsQAXx_ao0",
          thumbnail: "https://img.youtube.com/vi/ZXsQAXx_ao0/maxresdefault.jpg",
          id: "s5",
          duration: "0:35",
          platform: "YouTube Shorts"
        },
        { 
          title: "Travel Diaries", 
          desc: "Cinematic travel reel", 
          youtubeUrl: "https://www.youtube.com/watch?v=PpA9t6tqVTI",
          thumbnail: "https://img.youtube.com/vi/PpA9t6tqVTI/maxresdefault.jpg",
          id: "s6",
          duration: "0:28",
          platform: "Instagram Reels"
        },
      ]
    },
    {
      id: "podcast",
      title: "Podcast Edits",
      icon: <Mic size={18} />,
      description: "Multi-cam podcast editing with audio mastering",
      color: "from-purple-500/20",
      borderColor: "border-purple-500/20",
      accentColor: "purple",
      aspectRatio: "landscape",
      layout: "grid",
      projects: [
        { 
          title: "Vastu For Home",
          youtubeUrl: "https://youtu.be/SrUJ4hiGYtQ?si=QjR_by7jxtc-j_7e",
          thumbnail: "https://img.youtube.com/vi/J0Aq44Pze-w/maxresdefault.jpg",
          id: "p1",
          platform: "YouTube",
        },
        { 
          title: "96 Rules of Eating", 
          youtubeUrl: "https://youtu.be/6PiQF6p8mV0?si=P5sZ88g6O5lwTqK4",
          thumbnail: "https://img.youtube.com/vi/ZXsQAXx_ao0/maxresdefault.jpg",
          id: "p2",
          platform: "YouTube",
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
      accentColor: "amber",
      aspectRatio: "landscape",
      layout: "grid",
      projects: [
        { 
          title: "The Alpine Doc", 
          desc: "Mountain expedition film", 
          youtubeUrl: "https://youtu.be/drqDLNmihkw?si=_viJ9ITFGZg7r89B",
          thumbnail: "https://img.youtube.com/vi/PpA9t6tqVTI/maxresdefault.jpg",
          id: "d1",
          duration: "22:15",
          role: "Editor & Colorist",
          award: "Film Fest Finalist"
        },
        { 
          title: "Urban Nomads", 
          desc: "City life documentary", 
          youtubeUrl: "https://youtu.be/ezYCsECGbG0?si=KF2X2rp-prYK4SeN",
          thumbnail: "https://img.youtube.com/vi/WUe9dz9X7R4/maxresdefault.jpg",
          id: "d2",
          duration: "34:40",
          role: "Lead Editor",
          award: "Official Selection"
        },
      ]
    }
  ];

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
      <section className="relative bg-[#080808] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
        {/* Background Elements - Matching Hero Section */}
        <div 
          className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"
          aria-hidden="true"
        />
        <div 
          className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full"
          aria-hidden="true"
        />
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-600/5 blur-[100px] rounded-full"
          aria-hidden="true"
        />
        
        {/* Divider Line Between Hero and Gallery */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          
          {/* Header - Responsive */}
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="h-px w-6 sm:w-8 bg-blue-500" aria-hidden="true" />
                <span className="text-blue-400 font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase">
                  Featured Work
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none">
                Work <br/> 
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
                  Library.
                </span>
              </h2>
            </div>
          </div>

          {/* Sections Stacked Vertically */}
          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32">
            {sections.map((section, sectionIdx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: sectionIdx * 0.2 }}
                className="space-y-6 sm:space-y-7 md:space-y-8"
              >
                {/* Section Header */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-white/5">
                  <div className={`w-1 h-6 sm:h-7 md:h-8 bg-gradient-to-b ${section.color} rounded-full`} />
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className={`text-${section.accentColor}-400`}>
                      {section.icon}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-black uppercase tracking-tight">
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

                {/* Different Layout for Shorts/Reels - Horizontal Scroll */}
                {section.id === "shorts" && section.layout === "scroll" ? (
                  <div className="relative mt-6">
                    {/* Scroll Buttons */}
                    <button
                      onClick={scrollLeft}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft size={18} className="text-white" />
                    </button>
                    <button
                      onClick={scrollRight}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                      aria-label="Scroll right"
                    >
                      <ChevronRightIcon size={18} className="text-white" />
                    </button>

                    {/* Horizontal Scroll Container */}
                    <div
                      ref={scrollContainerRef}
                      className="overflow-x-auto scrollbar-hide pb-4"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      <div className="flex gap-5 sm:gap-6 md:gap-7">
                        {section.projects.map((project, idx) => {
                          const videoId = getYouTubeId(project.youtubeUrl);
                          const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : project.thumbnail;
                          
                          return (
                            <motion.div
                              key={project.id}
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              className="group relative flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] cursor-pointer"
                              onClick={() => openVideoModal(project)}
                            >
                              <div className={`relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border ${section.borderColor} hover:border-white/30 transition-all duration-500 hover:shadow-2xl`}>
                                <div className="relative aspect-[9/16]">
                                  <img 
                                    src={thumbnailUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                                    onError={(e) => {
                                      if (videoId) {
                                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                      }
                                    }}
                                  />
                                  
                                  {/* Play Button Overlay */}
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40">
                                    <div className="bg-red-600 rounded-full p-3 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                                      <Play size={20} className="text-white" fill="white" />
                                    </div>
                                  </div>
                                  
                                  {/* Gradient Overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100" />
                                  
                                  {/* Content Overlay */}
                                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                    {/* Top Bar */}
                                    <div className="flex justify-between items-start">
                                      <span className="text-[8px] sm:text-[9px] font-mono text-blue-400 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                                        {project.duration}
                                      </span>
                                    </div>

                                    {/* Bottom Info */}
                                    <div className="space-y-2">
                                      <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-white drop-shadow-lg">
                                        {project.title}
                                      </h4>
                                      <p className="text-[9px] sm:text-[10px] text-zinc-300 font-mono line-clamp-2">
                                        {project.desc}
                                      </p>
                                      <div className="flex items-center justify-between">
                                        <span className="text-[7px] sm:text-[8px] font-mono text-zinc-500 uppercase tracking-wider">
                                          {project.platform}
                                        </span>
                                        <motion.div 
                                          whileTap={{ scale: 0.9 }}
                                          className="p-1.5 sm:p-2 bg-red-600 text-white rounded-full shadow-xl"
                                        >
                                          <Play size={10} className="sm:w-3 sm:h-3" fill="currentColor" />
                                        </motion.div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Section Color Accent Line */}
                                  <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${section.color} transition-all duration-500`} />
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center gap-1 mt-4">
                      <div className="w-16 h-0.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-blue-500 rounded-full" />
                      </div>
                      <span className="text-[8px] text-zinc-500 font-mono">Scroll →</span>
                    </div>
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
                          className={`group relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-zinc-900 border ${section.borderColor} hover:border-white/30 transition-all duration-500 cursor-pointer hover:shadow-2xl ${
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
                          
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40">
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
                              {project.award && (
                                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-amber-400 bg-black/60 backdrop-blur-sm px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full border border-amber-500/20 flex items-center gap-1">
                                  <Award size={10} />
                                  {project.award}
                                </span>
                              )}
                            </div>

                            <div>
                              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                                {project.title}
                              </h4>
                              <p className="text-[10px] sm:text-xs text-zinc-300 mt-1 font-mono">
                                {project.desc}
                              </p>
                              <div className="flex items-center gap-2 mt-2 text-[8px] sm:text-[9px] md:text-[10px] text-zinc-400">
                                {project.guests && (
                                  <>
                                    <Mic size={10} />
                                    <span>{project.guests}</span>
                                  </>
                                )}
                                {project.role && (
                                  <span className="text-zinc-500">{project.role}</span>
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
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
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
              aria-label="Close modal"
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