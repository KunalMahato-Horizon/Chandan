"use client";

import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, MessageCircle, Heart, TrendingUp, Zap, Globe, Instagram, Twitter, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TestimonialSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const categories = ["all", "Video Editing", "Motion Graphics"];

  const testimonials = [
    {
      id: 1,
      name: "Anamika",
      role: "Client",
      company: "",
      image: "https://res.cloudinary.com/dla8tkflq/image/upload/q_auto/f_auto/v1774861175/Anamika_celokx.jpg",
      quote: "Working with Chandan has been an absolute pleasure. He has a remarkable ability to understand client requirements and consistently delivers high-quality work, even under tight deadlines. His editing is sharp, creative, and always aligned with the vision.",
      rating: 5,
      project: "Video Editing Project",
      date: "2024",
      category: "Video Editing",
      social: "instagram",
      metrics: { views: "", engagement: "" }
    },
    {
      id: 2,
      name: "Siddharth",
      role: "Client",
      company: "",
      image: "https://res.cloudinary.com/dla8tkflq/image/upload/q_auto/f_auto/v1774861175/Siddharth_mmoffa.jpg",
      quote: "Impressed by Chandan's motion graphics and editing skills. He delivers sharp, engaging finance content with a professional touch and strong attention to detail.",
      rating: 5,
      project: "Motion Graphics Project",
      date: "2024",
      category: "Motion Graphics",
      social: "linkedin",
      metrics: { views: "", engagement: "" }
    }
  ];

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const getSocialIcon = (social) => {
    switch(social) {
      case 'instagram': return <Instagram size={12} />;
      case 'twitter': return <Twitter size={12} />;
      case 'linkedin': return <Linkedin size={12} />;
      default: return <Globe size={12} />;
    }
  };

  return (
    <section className="relative bg-[#080808] py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden">
      
      {/* Background Texture - Matching Hero Section */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"
        aria-hidden="true"
      />
      
      {/* Atmospheric Lighting - Matching Hero Section */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-600/5 blur-[100px] rounded-full"
        aria-hidden="true"
      />
      
      {/* Divider Line Between About and Testimonials */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Animated Background Blobs - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header with Consistent Styling */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="h-px w-6 sm:w-8 bg-blue-500" aria-hidden="true" />
            <span className="text-blue-500 font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              Rave Reviews
            </span>
            <span className="h-px w-6 sm:w-8 bg-blue-500" aria-hidden="true" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-4 sm:mb-6">
            <span className="text-white">CLIENT</span>
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
              LOVE
            </span>
          </h2>
          
          <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
            Don't just take my word for it — hear what my amazing clients have to say
          </p>
        </motion.div>

        {/* Category Filters - Consistent Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 justify-items-center max-w-4xl mx-auto"
        >
          <AnimatePresence>
            {filteredTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 w-full"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote size={24} className="sm:w-6 sm:h-6" />
                </div>
        
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      className={`${i < Math.floor(testimonial.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-zinc-700'}`}
                    />
                  ))}
                  <span className="text-zinc-500 text-[10px] sm:text-xs ml-2">{testimonial.rating}</span>
                </div>
        
                {/* Quote Text */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  "{testimonial.quote}"
                </p>
        
                {/* Client Info */}
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-blue-500/30">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-0.5 sm:p-1">
                      {getSocialIcon(testimonial.social)}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-bold text-xs sm:text-sm truncate">{testimonial.name}</h4>
                    <p className="text-zinc-500 text-[10px] sm:text-xs truncate">{testimonial.role}</p>
                    {testimonial.company && (
                      <p className="text-blue-400 text-[8px] sm:text-[9px] font-mono truncate">{testimonial.company}</p>
                    )}
                  </div>
                </div>
        
                {/* Project Tag */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <span className="text-[7px] sm:text-[8px] font-mono bg-white/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-zinc-400 truncate max-w-[120px] sm:max-w-none inline-block">
                    {testimonial.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Impact Stats with Consistent Styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { icon: <Heart size={20} className="sm:w-6 sm:h-6" />, value: 98, label: "Client Satisfaction", suffix: "%", color: "text-red-500" },
            { icon: <TrendingUp size={20} className="sm:w-6 sm:h-6" />, value: 156, label: "Projects Delivered", suffix: "+", color: "text-green-500" },
            { icon: <Star size={20} className="sm:w-6 sm:h-6" />, value: 5.0, label: "Average Rating", suffix: "", color: "text-yellow-500" },
            { icon: <Zap size={20} className="sm:w-6 sm:h-6" />, value: 24, label: "Avg. Turnaround", suffix: "hrs", color: "text-blue-500" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -3 }}
              className="relative overflow-hidden bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center group"
            >
              <div className={`${stat.color} mb-2 sm:mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-0.5 sm:mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-[8px] sm:text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - Consistent with Hero Section Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-6 sm:p-8 md:p-10">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                  Ready to create your <span className="text-blue-400">success story</span>?
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm">Join 50+ satisfied clients who trusted me with their vision</p>
              </div>
              <a 
                href="https://wa.me/message/M6AC7MHAMGAQH1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 bg-white text-black px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <MessageCircle size={14} className="sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" />
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
      `}</style>
    </section>
  );
};

export default TestimonialSection;