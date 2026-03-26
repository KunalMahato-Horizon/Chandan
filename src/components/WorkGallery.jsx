"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink, ChevronRight, Smartphone, Mic, Film } from "lucide-react";

const WorkGallery = ({ onVideoSelect }) => {
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
          img: "https://images.unsplash.com/photo-1512428559083-a40ce903395b?q=80&w=2070", 
          id: "s1",
          duration: "0:45",
          platform: "Instagram Reels",
          views: "2.4M"
        },
        { 
          title: "Street Style", 
          desc: "Fashion week highlights", 
          img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800", 
          id: "s2",
          duration: "0:30",
          platform: "TikTok",
          views: "1.8M"
        },
        { 
          title: "Tech Unboxing", 
          desc: "Product reveal short", 
          img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800", 
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
          img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070", 
          id: "p1",
          duration: "58:22",
          platform: "Spotify/YouTube",
          guests: "3 speakers"
        },
        { 
          title: "Startup Stories", 
          desc: "Founder's journey", 
          img: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=2070", 
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
          img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059", 
          id: "d1",
          duration: "22:15",
          role: "Editor & Colorist",
          award: "Film Fest Finalist"
        },
        { 
          title: "Urban Nomads", 
          desc: "City life documentary", 
          img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070", 
          id: "d2",
          duration: "34:40",
          role: "Lead Editor",
          award: "Official Selection"
        },
      ]
    }
  ];

  return (
    <section className="bg-[#080808] py-20 lg:py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <div className="space-y-4">
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase block">Portfolio</span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-none">
              Work <br/> 
              <span className="text-transparent outline-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>Library.</span>
            </h2>
          </div>
        </div>

        {/* Sections Stacked Vertically */}
        <div className="space-y-20 lg:space-y-32">
          {sections.map((section, sectionIdx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: sectionIdx * 0.2 }}
              className="space-y-8"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                <div className={`w-1 h-8 bg-gradient-to-b ${section.color} rounded-full`} />
                <div className="flex items-center gap-3">
                  <span className={`text-${section.id === 'shorts' ? 'blue' : section.id === 'podcast' ? 'purple' : 'amber'}-400`}>
                    {section.icon}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">
                    {section.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-600 ml-auto">
                  {section.projects.length} projects
                </span>
              </div>

              {/* Section Description */}
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest pl-8">
                {section.description}
              </p>

              {/* Projects Grid */}
              <div className={`grid gap-6 mt-6 ${
                section.aspectRatio === 'portrait' 
                  ? 'grid-cols-1 md:grid-cols-3'
                  : 'grid-cols-1 md:grid-cols-2'
              }`}>
                {section.projects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`group relative rounded-3xl overflow-hidden bg-zinc-900 border ${section.borderColor} hover:border-white/20 transition-all duration-500 cursor-pointer ${
                      section.aspectRatio === 'portrait' 
                        ? 'aspect-[9/16]'
                        : 'aspect-video'
                    }`}
                    onClick={() => onVideoSelect?.(project.id, project.title)}
                  >
                    {/* Background Image - Removed grayscale filter */}
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100" 
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500`} />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                      {/* Top Bar */}
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono text-blue-400 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
                          {project.duration}
                        </span>
                        <div className="p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/10 text-white opacity-0 lg:group-hover:opacity-100 transition-opacity">
                          <ExternalLink size={14} />
                        </div>
                      </div>

                      {/* Bottom Info */}
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                            {project.title}
                          </h4>
                          <p className="text-xs text-zinc-300 font-mono">
                            {project.desc}
                          </p>
                        </div>

                        {/* Additional metadata based on section */}
                        <div className="flex items-center gap-2 text-[10px] font-mono">
                          {section.id === 'shorts' && project.views && (
                            <span className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
                              {project.views} views
                            </span>
                          )}
                          {section.id === 'podcast' && project.guests && (
                            <span className="text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
                              {project.guests}
                            </span>
                          )}
                          {section.id === 'documentary' && project.award && (
                            <span className="text-amber-400 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/20">
                              {project.award}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">
                              {project.platform || project.role}
                            </span>
                            <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                              <span>View Project</span>
                              <ChevronRight size={8} />
                            </div>
                          </div>
                          
                          <motion.div 
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white text-black rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            <Play size={16} fill="currentColor" />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Section Color Accent Line */}
                    <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${section.color} transition-all duration-500`} />
                  </motion.div>
                ))}
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
      `}</style>
    </section>
  );
};

export default WorkGallery;