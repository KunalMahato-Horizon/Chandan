"use client";

import { motion } from "framer-motion";
import { Play, Smartphone, Mic, Film, ChevronLeft, ChevronRight as ChevronRightIcon, Award, Loader2, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const WorkGallery = ({ onVideoSelect }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});
  const scrollContainerRef = useRef(null);
  const videoRefs = useRef({});

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

  // Get Cloudinary thumbnail URL
  const getCloudinaryThumbnail = (videoUrl) => {
    if (!videoUrl) return '';
    return videoUrl.replace(/\.mp4$/, '.jpg').replace('/video/upload/', '/video/upload/');
  };

  // Toggle mute for a specific video
  const toggleMute = (videoId, e) => {
    e.stopPropagation();
    setMutedVideos(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  // Updated shorts/reels with new Cloudinary URLs and Vimeo video

  const shortsProjects = [
    { 
      title: "True Cost of Support Roles", 
      desc: "An insightful look into the real impact of support positions", 
      videoUrl: "https://res.cloudinary.com/dkbp9awk3/video/upload/q_auto/f_auto/v1777429295/The_True_Cost_of_Support_Roles_ciwdrj.mp4",
      id: "v1",
      type: "cloudinary"
    },
    { 
      title: "Why Dubai is Rich", 
      desc: "A cinematic journey through Dubai's wealth and prosperity", 
      videoUrl: "https://res.cloudinary.com/dkbp9awk3/video/upload/q_auto/f_auto/v1777429204/Why_Dubai_is_Rich_n0pkjw.mp4",
      id: "v2",
      type: "cloudinary"
    },
    { 
      title: "Zepto Stories", 
      desc: "Quick commerce revolution in modern India", 
      videoUrl: "https://res.cloudinary.com/dkbp9awk3/video/upload/q_auto/f_auto/v1777441899/Zepto_ca4c5z.mp4",
      id: "v3",
      type: "cloudinary"
    },
    { 
      title: "INDIGO 5", 
      desc: "A visual journey through India's vibrant culture and colors", 
      videoUrl: "https://res.cloudinary.com/dkbp9awk3/video/upload/q_auto/f_auto/v1777442436/INDIGO_5_o4lizq.mp4",
      id: "v4",
      type: "cloudinary"
    },
    { 
      title: "NCERT Insights", 
      desc: "Educational content reimagined for modern learners", 
      videoUrl: "https://res.cloudinary.com/dkbp9awk3/video/upload/q_auto/f_auto/v1777442337/_NCERT_2_x0fguv.mp4",
      id: "v5",
      type: "cloudinary"
    },
    { 
      title: "Snoring Solutions", 
      desc: "Medical awareness content with engaging visualization", 
      videoUrl: "https://res.cloudinary.com/dkbp9awk3/video/upload/q_auto/f_auto/v1777442232/Snoring_final_video_vslifz.mp4",
      id: "v6",
      type: "cloudinary"
    },
    { 
      title: "Garba Nights", 
      desc: "Celebrating the vibrant tradition of Garba dance", 
      videoUrl: "https://res.cloudinary.com/dkbp9awk3/video/upload/q_auto/f_auto/v1777442055/Garba_npfwje.mp4",
      id: "v7",
      type: "cloudinary"
    },
    { 
      title: "Vimeo Showcase", 
      desc: "Exclusive content from Vimeo", 
      videoUrl: "https://vimeo.com/1064950967",
      embedUrl: "https://player.vimeo.com/video/1064950967",
      thumbnail: "https://vumbnail.com/1064950967.jpg",
      id: "v8",
      type: "vimeo"
    },
  ];

  // New Long Form video
  const longFormProjects = [
    { 
      title: "The Future of Everything",
      desc: "A deep dive into emerging technologies and their impact on society",
      embedUrl: "https://www.youtube-nocookie.com/embed/vi1IMVtFcBw?si=wn_dOLXQ0TuRbziF&controls=0&start=1",
      thumbnail: "https://img.youtube.com/vi/vi1IMVtFcBw/maxresdefault.jpg",
      id: "l1",
      duration: "45:22",
      role: "Lead Editor & Producer",
      award: "Best Documentary 2024",
      type: "youtube"
    }
  ];

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
      projects: shortsProjects
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
          videoUrl: "https://youtu.be/SrUJ4hiGYtQ",
          embedUrl: "https://www.youtube-nocookie.com/embed/SrUJ4hiGYtQ?si=MzCHYdCcQ1OSN_Ck",
          thumbnail: "https://img.youtube.com/vi/SrUJ4hiGYtQ/maxresdefault.jpg",
          id: "p1",
          duration: "15:30",
          platform: "YouTube",
          type: "youtube"
        },
        { 
          title: "96 Rules of Eating", 
          videoUrl: "https://youtu.be/6PiQF6p8mV0",
          embedUrl: "https://www.youtube-nocookie.com/embed/6PiQF6p8mV0?si=3rwsFs1lUKJ4bzdI",
          thumbnail: "https://img.youtube.com/vi/6PiQF6p8mV0/maxresdefault.jpg",
          id: "p2",
          duration: "22:45",
          platform: "YouTube",
          type: "youtube"
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
          videoUrl: "https://youtu.be/drqDLNmihkw",
          embedUrl: "https://www.youtube-nocookie.com/embed/drqDLNmihkw?si=csHLcoe2VveCKy42&start=4",
          thumbnail: "https://img.youtube.com/vi/drqDLNmihkw/maxresdefault.jpg",
          id: "d1",
          duration: "22:15",
          role: "Editor & Colorist",
          award: "Film Fest Finalist",
          type: "youtube"
        },
        { 
          title: "Urban Nomads", 
          desc: "City life documentary", 
          videoUrl: "https://youtu.be/ezYCsECGbG0",
          embedUrl: "https://www.youtube-nocookie.com/embed/ezYCsECGbG0?si=PIS1KtlLURk22XQR",
          thumbnail: "https://img.youtube.com/vi/ezYCsECGbG0/maxresdefault.jpg",
          id: "d2",
          duration: "34:40",
          role: "Lead Editor",
          award: "Official Selection",
          type: "youtube"
        },
      ]
    },
    {
      id: "longform",
      title: "Long Form",
      icon: <Film size={18} />,
      description: "In-depth cinematic features and documentary series",
      color: "from-emerald-500/20",
      borderColor: "border-emerald-500/20",
      accentColor: "emerald",
      aspectRatio: "landscape",
      layout: "grid",
      projects: longFormProjects
    }
  ];

  const handleVideoClick = (projectId, type) => {
    if (playingVideoId === projectId) {
      // If same video is clicked, stop it
      if (type === 'cloudinary' && videoRefs.current[projectId]) {
        videoRefs.current[projectId].pause();
      }
      setPlayingVideoId(null);
    } else {
      // Stop any currently playing video
      if (playingVideoId && videoRefs.current[playingVideoId]) {
        if (sections.some(s => s.projects.find(p => p.id === playingVideoId && p.type === 'cloudinary'))) {
          videoRefs.current[playingVideoId].pause();
        }
      }
      setPlayingVideoId(projectId);
    }
  };

  // Cloudinary Video Component (Autoplay on scroll)
  const CloudinaryVideo = ({ project, section, isPlaying, onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    
    const isMuted = mutedVideos[project.id] !== undefined ? mutedVideos[project.id] : true;
    
    // Store video ref in parent ref object
    useEffect(() => {
      if (videoRef.current) {
        videoRefs.current[project.id] = videoRef.current;
      }
      return () => {
        delete videoRefs.current[project.id];
      };
    }, [project.id]);
    
    // Handle autoplay when video comes into view
    useEffect(() => {
      if (isInView && videoRef.current && !hasError && !isPlaying) {
        videoRef.current.muted = isMuted;
        videoRef.current.play()
          .then(() => {
            setIsAutoPlaying(true);
          })
          .catch(e => console.log("Autoplay prevented:", e));
      } else if (!isInView && videoRef.current && isAutoPlaying && !isPlaying) {
        videoRef.current.pause();
        setIsAutoPlaying(false);
      }
    }, [isInView, hasError, isPlaying, isMuted, isAutoPlaying]);
    
    // Handle playing state (when clicked)
    useEffect(() => {
      if (isPlaying && videoRef.current && !hasError) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(e => console.log("Play prevented:", e));
        setIsAutoPlaying(false);
      } else if (!isPlaying && videoRef.current && !isAutoPlaying) {
        videoRef.current.pause();
      }
    }, [isPlaying, hasError, isAutoPlaying]);
    
    // Update mute state
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.muted = isMuted;
      }
    }, [isMuted]);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        },
        { threshold: 0.5, rootMargin: "50px" }
      );
      
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, []);
    
    const handleVideoError = () => {
      setHasError(true);
      setIsLoaded(true);
    };
    
    const thumbnailUrl = getCloudinaryThumbnail(project.videoUrl);
    
    return (
      <div 
        ref={containerRef}
        className={`group relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border ${section.borderColor} hover:border-white/30 transition-all duration-500 cursor-pointer aspect-[9/16]`}
        onClick={() => onClick(project.id, project.type)}
      >
        {(!isLoaded || !isInView) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <Loader2 size={32} className="text-blue-500 animate-spin" />
          </div>
        )}
        
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 z-10">
            <Film size={32} className="text-zinc-600 mb-2" />
            <p className="text-xs text-zinc-500">Video unavailable</p>
          </div>
        )}
        
        {isInView && !hasError && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            poster={thumbnailUrl}
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            onLoadedData={() => setIsLoaded(true)}
            onError={handleVideoError}
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        )}
        
        {/* Mute/Unmute button */}
        {isInView && !hasError && (
          <button
            onClick={(e) => toggleMute(project.id, e)}
            className="absolute bottom-4 right-4 z-30 p-2 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={16} className="text-white" /> : <Volume2 size={16} className="text-white" />}
          </button>
        )}
        
        {/* Overlay gradients and play button - only show when not playing */}
        {!isPlaying && !isAutoPlaying && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20" />
            
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
              <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-white">{project.title}</h4>
              <p className="text-[10px] sm:text-xs text-zinc-300 mt-1 font-mono">{project.desc}</p>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 z-20">
              <div className="bg-red-600 rounded-full p-3 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Play size={24} className="text-white" fill="white" />
              </div>
            </div>
          </>
        )}
        
        {/* Show controls when playing */}
        {isPlaying && !hasError && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            controls
            autoPlay
            playsInline
            poster={thumbnailUrl}
            onError={handleVideoError}
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        )}
        
        <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${section.color} transition-all duration-500 z-20`} />
      </div>
    );
  };

  // Vimeo Video Component (Autoplay on scroll)
  const VimeoVideo = ({ project, section, isPlaying, onClick }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);
    const iframeRef = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          setIsInView(entries[0].isIntersecting);
        },
        { threshold: 0.5, rootMargin: "50px" }
      );
      
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, []);
    
    return (
      <div 
        ref={containerRef}
        className={`group relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border ${section.borderColor} hover:border-white/30 transition-all duration-500 cursor-pointer hover:shadow-2xl aspect-[9/16]`} 
        onClick={() => onClick(project.id, project.type)}
      >
        {!isPlaying && !isInView && (
          <>
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
                <Loader2 size={24} className="text-blue-500 animate-spin" />
              </div>
            )}
            
            <img 
              src={project.thumbnail}
              alt={project.title}
              className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIsImageLoaded(true)}
              loading="lazy"
            />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40">
              <div className="bg-red-600 rounded-full p-3 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Play size={24} className="text-white" fill="white" />
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100" />
            
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
              <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-white">{project.title}</h4>
              <p className="text-[10px] sm:text-xs text-zinc-300 mt-1 font-mono">{project.desc}</p>
            </div>
          </>
        )}
        
        {(isPlaying || isInView) && (
          <iframe
            ref={iframeRef}
            className="absolute inset-0 w-full h-full"
            src={`${project.embedUrl}?autoplay=${isInView && !isPlaying ? '1' : isPlaying ? '1' : '0'}&muted=1&title=0&byline=0&portrait=0&badge=0&loop=1`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
        
        <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${section.color} transition-all duration-500 z-20`} />
      </div>
    );
  };

  // YouTube Video Component (No autoplay for YouTube - click to play)
  const YouTubeVideo = ({ project, section, isPlaying, onClick }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    
    return (
      <div 
        className={`group relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border ${section.borderColor} hover:border-white/30 transition-all duration-500 cursor-pointer hover:shadow-2xl aspect-video`} 
        onClick={() => onClick(project.id, project.type)}
      >
        {!isPlaying ? (
          <>
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
                <Loader2 size={24} className="text-blue-500 animate-spin" />
              </div>
            )}
            
            <img 
              src={project.thumbnail}
              alt={project.title}
              className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIsImageLoaded(true)}
              loading="lazy"
            />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40">
              <div className="bg-red-600 rounded-full p-3 sm:p-4 md:p-5 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Play size={24} className="text-white" fill="white" />
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100" />
            
            <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                {project.duration && (
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-white bg-black/60 backdrop-blur-sm px-2 sm:px-2.5 md:px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                    {project.duration}
                  </span>
                )}
                {project.award && (
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-amber-400 bg-black/60 backdrop-blur-sm px-2 sm:px-2.5 md:px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1">
                    <Award size={10} />
                    {project.award}
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight text-white drop-shadow-lg">
                  {project.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-zinc-300 mt-1 font-mono">{project.desc}</p>
                {project.role && (
                  <div className="flex items-center gap-2 mt-2 text-[8px] sm:text-[9px] text-zinc-400">
                    <span className="text-zinc-500">{project.role}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`${project.embedUrl}?autoplay=1&rel=0&modestbranding=1`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
        
        <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${section.color} transition-all duration-500`} />
      </div>
    );
  };

  return (
    <>
      <section className="relative bg-[#080808] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
        <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-600/5 blur-[100px] rounded-full" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          
          {/* Header */}
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="h-px w-6 sm:w-8 bg-blue-500" />
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
                    <span className={`text-${section.accentColor}-400`}>{section.icon}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-black uppercase tracking-tight">
                      {section.title}
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-600 ml-auto">
                    {section.projects.length} projects
                  </span>
                </div>

                <p className="text-zinc-500 text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-wider sm:tracking-widest pl-6 sm:pl-7 md:pl-8">
                  {section.description}
                </p>

                {section.id === "shorts" ? (
                  <div className="relative mt-6">
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

                    <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                      <div className="flex gap-5 sm:gap-6 md:gap-7">
                        {section.projects.map((project) => (
                          <div key={project.id} className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px]">
                            {project.type === 'vimeo' ? (
                              <VimeoVideo 
                                project={project} 
                                section={section} 
                                isPlaying={playingVideoId === project.id}
                                onClick={handleVideoClick}
                              />
                            ) : (
                              <CloudinaryVideo 
                                project={project} 
                                section={section} 
                                isPlaying={playingVideoId === project.id}
                                onClick={handleVideoClick}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`grid gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-5 md:mt-6 grid-cols-1 lg:grid-cols-2`}>
                    {section.projects.map((project) => (
                      <YouTubeVideo 
                        key={project.id} 
                        project={project} 
                        section={section} 
                        isPlaying={playingVideoId === project.id}
                        onClick={handleVideoClick}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>
    </>
  );
};

export default WorkGallery;