"use client";

import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, MessageCircle, Sparkles, Heart, TrendingUp, Zap, Globe, Instagram, Twitter, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TestimonialSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const categories = ["all", "Video Editing", "Motion Graphics", "Design", "Music"];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Content Creator",
      company: "Creative Studios",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
      quote: "Chandan transformed my raw footage into cinematic magic! His attention to detail and creative vision exceeded everything I imagined.",
      rating: 5,
      project: "YouTube Content Series",
      date: "March 2025",
      category: "Video Editing",
      social: "instagram",
      metrics: { views: "2.3M", engagement: "+45%" }
    },
    {
      id: 2,
      name: "Rajesh Mehta",
      role: "Marketing Director",
      company: "Digital Wave",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
      quote: "The motion graphics work was absolutely stunning! Our campaign engagement skyrocketed after working with Chandan.",
      rating: 5,
      project: "Social Media Campaign",
      date: "January 2025",
      category: "Motion Graphics",
      social: "linkedin",
      metrics: { views: "1.8M", engagement: "+67%" }
    },
    {
      id: 3,
      name: "Anjali Verma",
      role: "Wedding Photographer",
      company: "Moments by Anjali",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000",
      quote: "The wedding highlight reel brought tears to everyone's eyes. Chandan captured emotions perfectly with his editing.",
      rating: 5,
      project: "Wedding Highlight Reel",
      date: "December 2024",
      category: "Video Editing",
      social: "instagram",
      metrics: { views: "850K", engagement: "+32%" }
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Music Producer",
      company: "Beat Factory Records",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
      quote: "Perfect sync between audio and visuals! Chandan understood the music's soul and brought it to life.",
      rating: 4.5,
      project: "Music Video Production",
      date: "October 2024",
      category: "Music",
      social: "twitter",
      metrics: { views: "3.2M", engagement: "+89%" }
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "Digital Marketer",
      company: "Growth Hackers",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
      quote: "Thumbnail designs that actually convert! Our CTR improved by 78% after Chandan redesigned our thumbnails.",
      rating: 5,
      project: "Marketing Content",
      date: "August 2024",
      category: "Design",
      social: "linkedin",
      metrics: { views: "4.5M", engagement: "+78%" }
    },
    {
      id: 6,
      name: "Arjun Reddy",
      role: "Film Director",
      company: "Reddy Productions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
      quote: "Chandan brings a director's perspective to editing. His understanding of storytelling and pacing is exceptional.",
      rating: 5,
      project: "Short Film Project",
      date: "February 2025",
      category: "Video Editing",
      social: "instagram",
      metrics: { views: "1.2M", engagement: "+56%" }
    }
  ];

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const getSocialIcon = (social) => {
    switch(social) {
      case 'instagram': return <Instagram size={14} />;
      case 'twitter': return <Twitter size={14} />;
      case 'linkedin': return <Linkedin size={14} />;
      default: return <Globe size={14} />;
    }
  };

  return (
    <section className="bg-[#020202] py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden relative">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header with Magazine Style */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-white" />
            <span className="text-white font-mono text-[10px] tracking-wider uppercase">Rave Reviews</span>
          </motion.div>
          
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
              CLIENT
            </span>
            <br />
            <span className="text-white">LOVE</span>
          </h2>
          
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Don't just take my word for it — hear what my amazing clients have to say
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </motion.div>

        {/* Testimonial Grid - Masonry Style */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onHoverStart={() => setHoveredCard(testimonial.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Floating Gradient Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
        
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote size={32} />
                </div>
        
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`${i < Math.floor(testimonial.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-zinc-700'}`}
                    />
                  ))}
                  <span className="text-zinc-500 text-xs ml-2">{testimonial.rating}</span>
                </div>
        
                {/* Quote Text */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-5 line-clamp-4">
                  "{testimonial.quote}"
                </p>
        
                {/* Client Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                      {getSocialIcon(testimonial.social)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                    <p className="text-blue-400 text-[10px] font-mono">{testimonial.company}</p>
                  </div>
                </div>
        
                {/* Metrics Cards */}
                <motion.div 
                  animate={hoveredCard === testimonial.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 mt-3">
                    <div className="text-center">
                      <div className="text-xs font-bold text-blue-400">{testimonial.metrics.views}</div>
                      <div className="text-[8px] text-zinc-600 uppercase">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-bold text-green-400">{testimonial.metrics.engagement}</div>
                      <div className="text-[8px] text-zinc-600 uppercase">Engagement</div>
                    </div>
                  </div>
                </motion.div>
        
                {/* Project Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[8px] font-mono bg-white/10 px-2 py-1 rounded-full text-zinc-400">
                    {testimonial.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Impact Stats with Animated Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: <Heart size={28} />, value: 98, label: "Client Satisfaction", suffix: "%", color: "text-red-500" },
            { icon: <TrendingUp size={28} />, value: 156, label: "Projects Delivered", suffix: "+", color: "text-green-500" },
            { icon: <Star size={28} />, value: 5.0, label: "Average Rating", suffix: "", color: "text-yellow-500" },
            { icon: <Zap size={28} />, value: 24, label: "Avg. Turnaround", suffix: "hrs", color: "text-blue-500" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 text-center group"
            >
              <div className={`${stat.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - Floating Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-[2px]">
            <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Ready to create your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">success story</span>?
                  </h3>
                  <p className="text-zinc-400">Join 50+ satisfied clients who trusted me with their vision</p>
                </div>
                <a 
                  href="https://wa.me/message/M6AC7MHAMGAQH1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold transition-all hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey
                    <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;