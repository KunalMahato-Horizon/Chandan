"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink, ChevronRight, Smartphone, Mic, Film, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const WorkGallery = ({ onVideoSelect }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const sections = [
    {
      id: "shorts",
      title: "Shorts",
      icon: <Smartphone size={18} />,
      description: "High-retention vertical content for social platforms",
      color: "from-blue-500/20",
      borderColor: "border-blue-500/20",
      aspectRatio: "portrait",
      projects: [
        { 
          title: "Gym Hook Reel", 
          desc: "60s transformation teaser", 
          youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          id: "s1",
          duration: "0:45",
          platform: "Instagram Reels",
          views: "2.4M"
        },
        { 
          title: "Street Style", 
          desc: "Fashion week highlights", 
          youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
          thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
          id: "s2",
          duration: "0:30",
          platform: "TikTok",
          views: "1.8M"
        },
        { 
          title: "Tech Unboxing", 
          desc: "Product reveal short", 
          youtubeUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
          thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
          id: "s3",
          duration: "0:55",
          platform: "YouTube Shorts",
          views: "3.1M"
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

  // Function to extract YouTube video ID from URL - Fixed regex
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
      <section className="bg-[#080808] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header - Responsive */}
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <span className="text-blue-500 font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase block">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none">
                Work <br/> 
                <span className="text-transparent outline-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
                  Library.
                </span>
              </h2>
            </div>
          </div>

          {/* Sections Stacked Vertically - Responsive spacing */}
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
                {/* Section Header - Responsive */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-white/5">
                  <div className={`w-1 h-6 sm:h-7 md:h-8 bg-gradient-to-b ${section.color} rounded-full`} />
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className={`text-${section.id === 'shorts' ? 'blue' : section.id === 'podcast' ? 'purple' : 'amber'}-400`}>
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

                {/* Section Description - Responsive */}
                <p className="text-zinc-500 text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-wider sm:tracking-widest pl-6 sm:pl-7 md:pl-8">
                  {section.description}
                </p>

                {/* Projects Grid - Responsive */}
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
                        {/* YouTube Thumbnail */}
                        <img 
                          src={thumbnailUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100" 
                          onError={(e) => {
                            // Fallback to lower quality thumbnail if maxresdefault fails
                            if (videoId) {
                              e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                            }
                          }}
                        />
                        
                        {/* YouTube Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="bg-red-600 rounded-full p-3 sm:p-4 md:p-5 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                            <Play size={24} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="white" />
                          </div>
                        </div>
                        
                        {/* Gradient Overlay - Responsive opacity */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500`} />
                        
                        {/* Content Overlay - Responsive padding */}
                        <div className="absolute inset-0 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col justify-between">
                          {/* Top Bar - Responsive */}
                          <div className="flex justify-between items-start">
                            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-blue-400 bg-black/60 backdrop-blur-sm px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
                              {project.duration}
                            </span>
                            <div className="p-1.5 sm:p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/10 text-white opacity-0 md:group-hover:opacity-100 transition-opacity">
                              <ExternalLink size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                            </div>
                          </div>

                          {/* Bottom Info - Responsive */}
                          <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                            <div className="space-y-0.5 sm:space-y-1">
                              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                                {project.title}
                              </h4>
                              <p className="text-[10px] sm:text-[11px] md:text-xs text-zinc-300 font-mono">
                                {project.desc}
                              </p>
                            </div>

                            {/* Additional metadata - Responsive */}
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[9px] md:text-[10px] font-mono">
                              {section.id === 'shorts' && project.views && (
                                <span className="text-blue-400 bg-blue-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-blue-500/20">
                                  {project.views} views
                                </span>
                              )}
                              {section.id === 'podcast' && project.guests && (
                                <span className="text-purple-400 bg-purple-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-purple-500/20">
                                  {project.guests}
                                </span>
                              )}
                              {section.id === 'documentary' && project.award && (
                                <span className="text-amber-400 bg-amber-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-amber-500/20">
                                  {project.award}
                                </span>
                              )}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5 sm:space-y-1">
                                <span className="text-[7px] sm:text-[8px] md:text-[8px] font-mono text-zinc-500 uppercase tracking-wider block">
                                  {project.platform || project.role}
                                </span>
                                <div className="flex items-center gap-1 text-[8px] sm:text-[9px] md:text-[10px] font-mono text-zinc-400">
                                  <span className="hidden sm:inline">Play Video</span>
                                  <span className="sm:hidden">Play</span>
                                  <ChevronRight size={6} className="sm:w-2 sm:h-2" />
                                </div>
                              </div>
                              
                              <motion.div 
                                whileTap={{ scale: 0.9 }}
                                className="p-2 sm:p-2.5 md:p-3 bg-red-600 text-white rounded-full shadow-xl hover:bg-red-700 transition-colors"
                              >
                                <Play size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4" fill="currentColor" />
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        {/* Section Color Accent Line */}
                        <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${section.color} transition-all duration-500`} />
                      </motion.div>
                    );
                  })}
                </div>
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
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 sm:-right-12 sm:top-0 p-2 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Video Title */}
            <div className="mb-4 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedVideo.title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{selectedVideo.desc}</p>
            </div>

            {/* Video Player */}
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

            {/* Video Info */}
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