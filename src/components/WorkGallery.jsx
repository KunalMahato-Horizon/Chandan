"use client";

import { motion } from "framer-motion";
import { Play, Smartphone, Mic, Film, X, ChevronLeft, ChevronRight as ChevronRightIcon, Award, Loader2 } from "lucide-react";
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

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Function to extract Vimeo video ID from URL
  const getVimeoId = (url) => {
    const regExp = /vimeo\.com\/(?:video\/)?(\d+)(?:\?.*)?$/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  // Function to get embed URL based on video platform
  const getEmbedUrl = (url, autoplay = true, muted = true) => {
    const youtubeId = getYouTubeId(url);
    if (youtubeId) {
      return `https://www.youtube.com/embed/${youtubeId}?autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&rel=0&enablejsapi=1`;
    }
    
    const vimeoId = getVimeoId(url);
    if (vimeoId) {
      return `https://player.vimeo.com/video/${vimeoId}?autoplay=${autoplay ? 1 : 0}&muted=${muted ? 1 : 0}&loop=1&controls=0&title=0&byline=0&portrait=0&background=1&dnt=1`;
    }
    
    return null;
  };

  const sections = [
    {
      id: "shorts",
      title: "Shorts & Reels",
      icon: <Smartphone size={18} />,
      description: "Curated vertical content for social platforms",
      color: "from-blue-500/20",
      borderColor: "border-blue-500/20",
      accentColor: "blue",
      aspectRatio: "portrait",
      layout: "scroll",
      projects: [
        { 
          title: "New Portfolio Reel", 
          desc: "Latest showcase edit", 
          videoUrl: "https://drive.google.com/file/d/1MBzi7sjmJIC1gECDIn61YD64YsCu7Z10/view?usp=sharing",
          id: "v1",
        },
        { 
          title: "Science Space Edit", 
          desc: "A cosmic journey through science and space visuals", 
          videoUrl: "https://vimeo.com/1064950967?fl=ip&fe=ec",
          id: "v2",
        },
        { 
          title: "The Story of Malla", 
          desc: "A compelling narrative about Malla's journey", 
          videoUrl: "https://vimeo.com/1064718151?fl=ip&fe=ec",
          id: "v3",
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
          videoUrl: "https://youtu.be/SrUJ4hiGYtQ?si=QjR_by7jxtc-j_7e",
          thumbnail: "https://img.youtube.com/vi/SrUJ4hiGYtQ/maxresdefault.jpg",
          id: "p1",
          duration: "15:30",
          platform: "YouTube",
        },
        { 
          title: "96 Rules of Eating", 
          videoUrl: "https://youtu.be/6PiQF6p8mV0?si=P5sZ88g6O5lwTqK4",
          thumbnail: "https://img.youtube.com/vi/6PiQF6p8mV0/maxresdefault.jpg",
          id: "p2",
          duration: "22:45",
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
          videoUrl: "https://youtu.be/drqDLNmihkw?si=_viJ9ITFGZg7r89B",
          thumbnail: "https://img.youtube.com/vi/drqDLNmihkw/maxresdefault.jpg",
          id: "d1",
          duration: "22:15",
          role: "Editor & Colorist",
          award: "Film Fest Finalist"
        },
        { 
          title: "Urban Nomads", 
          desc: "City life documentary", 
          videoUrl: "https://youtu.be/ezYCsECGbG0?si=KF2X2rp-prYK4SeN",
          thumbnail: "https://img.youtube.com/vi/ezYCsECGbG0/maxresdefault.jpg",
          id: "d2",
          duration: "34:40",
          role: "Lead Editor",
          award: "Official Selection"
        },
      ]
    }
  ];

  // Function to open video modal
  const openVideoModal = (project) => {
    setSelectedVideo(project);
    setIsModalOpen(true);
    if (onVideoSelect) {
      onVideoSelect(project.id, project.title);
    }
  };

  // Component for Reels with lazy loading and loading states
  const ReelVideo = ({ project, section, onClick }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    
    // Intersection Observer for lazy loading
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1, rootMargin: "200px" }
      );
      
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      
      return () => observer.disconnect();
    }, []);
    
    useEffect(() => {
      if (videoRef.current && isPlaying && isIframeLoaded) {
        videoRef.current.contentWindow?.postMessage('{"method":"play"}', '*');
      } else if (videoRef.current && !isPlaying && isIframeLoaded) {
        videoRef.current.contentWindow?.postMessage('{"method":"pause"}', '*');
      }
    }, [isPlaying, isIframeLoaded]);
    
    const handleIframeLoad = () => {
      setIsIframeLoaded(true);
    };
    
    const handleMouseEnter = () => {
      if (isIframeLoaded) {
        setIsPlaying(true);
      }
    };
    
    return (
      <div 
        ref={containerRef}
        className={`group relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border ${section.borderColor} hover:border-white/30 transition-all duration-500 cursor-pointer aspect-[9/16]`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsPlaying(false)}
        onClick={onClick}
      >
        {/* Loading State */}
        {!isIframeLoaded && isInView && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-black z-10">
            <Loader2 size={32} className="text-blue-500 animate-spin mb-3" />
            <p className="text-zinc-500 text-xs font-mono">Loading video...</p>
          </div>
        )}
        
        {/* Thumbnail Placeholder */}
        {!isIframeLoaded && !isInView && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
            <Play size={32} className="text-white/40" />
          </div>
        )}
        
        {/* Lazy-loaded Iframe */}
        {isInView && (
          <iframe
            ref={videoRef}
            src={getEmbedUrl(project.videoUrl, true, true)}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={project.title}
            onLoad={handleIframeLoad}
            loading="lazy"
          />
        )}
        
        {/* Overlay with Title (visible on hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20" />
        
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
          <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-white">
            {project.title}
          </h4>
          <p className="text-[10px] sm:text-xs text-zinc-300 mt-1 font-mono">
            {project.desc}
          </p>
        </div>
        
        {/* Play Button Overlay on Click */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 z-20">
          <div className="bg-red-600 rounded-full p-3 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
            <Play size={24} className="text-white" fill="white" />
          </div>
        </div>
        
        <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${section.color} transition-all duration-500 z-20`} />
      </div>
    );
  };

  // Component for regular video thumbnails (podcast, documentary)
  const VideoThumbnail = ({ project, section, onClick }) => {
    const [imgError, setImgError] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const videoId = getYouTubeId(project.videoUrl) || getVimeoId(project.videoUrl);
    const fallbackUrl = project.thumbnail || (videoId ? `https://via.placeholder.com/300x400?text=${encodeURIComponent(project.title)}` : null);
    
    return (
      <div className={`group relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border ${section.borderColor} hover:border-white/30 transition-all duration-500 cursor-pointer hover:shadow-2xl ${
        section.aspectRatio === 'portrait' 
          ? 'aspect-[9/16]'
          : 'aspect-video'
      }`} onClick={onClick}>
        {/* Loading State for Image */}
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
            <Loader2 size={24} className="text-blue-500 animate-spin" />
          </div>
        )}
        
        <img 
          src={!imgError ? (project.thumbnail || fallbackUrl) : fallbackUrl}
          alt={project.title}
          className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onError={() => setImgError(true)}
          onLoad={() => setIsImageLoaded(true)}
          loading="lazy"
        />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40">
          <div className="bg-red-600 rounded-full p-3 sm:p-4 md:p-5 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
            <Play size={24} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="white" />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100" />
        
        <div className="absolute inset-0 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            {project.duration && (
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-white bg-black/60 backdrop-blur-sm px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
                {project.duration}
              </span>
            )}
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
              {project.platform && (
                <span className="text-zinc-500">{project.platform}</span>
              )}
            </div>
          </div>
        </div>

        <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${section.color} transition-all duration-500`} />
      </div>
    );
  };

  return (
    <>
      <section className="relative bg-[#080808] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
        {/* Background Elements */}
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
        
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          
          {/* Header */}
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

          {/* Sections */}
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

                {/* Different Layout for Shorts/Reels - Horizontal Scroll with Actual Videos */}
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
                        {section.projects.map((project, idx) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px]"
                          >
                            <ReelVideo 
                              project={project}
                              section={section}
                              onClick={() => openVideoModal(project)}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Grid Layout for Podcast and Documentary sections
                  <div className={`grid gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-5 md:mt-6 ${
                    section.aspectRatio === 'portrait' 
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      : 'grid-cols-1 lg:grid-cols-2'
                  }`}>
                    {section.projects.map((project, idx) => (
                      <VideoThumbnail 
                        key={project.id}
                        project={project}
                        section={section}
                        onClick={() => openVideoModal(project)}
                      />
                    ))}
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
                  src={getEmbedUrl(selectedVideo.videoUrl, true, false)}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
              {selectedVideo.duration && (
                <span className="text-zinc-400">Duration: {selectedVideo.duration}</span>
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