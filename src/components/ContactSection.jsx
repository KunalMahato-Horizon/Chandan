"use client";

import { motion } from "framer-motion";
import { Send, ArrowUpRight, Mail, Clock, MapPin, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("hello@framelevel.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactInfo = [
    { icon: <Mail size={16} />, text: "hello@framelevel.com", action: copyEmailToClipboard },
    { icon: <Clock size={16} />, text: "Response: 12-24h" },
    { icon: <MapPin size={16} />, text: "Available Worldwide" },
  ];

  return (
    <section id="contact" className="bg-[#050505] py-16 sm:py-20 md:py-24 lg:py-32 xl:py-56 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
      
      {/* 1. Background Ambiance - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-blue-600/5 blur-[80px] sm:blur-[100px] lg:blur-[120px] rounded-full" />
        
        {/* Subtle Vertical Grid Lines - Hide on mobile */}
        <div className="hidden md:block absolute inset-0 opacity-[0.02]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent"
              style={{ left: `${i * 9.09}%` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        
        {/* 2. Headline & Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
        >
          {/* Status Badge - Responsive */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-500 font-mono text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase whitespace-nowrap">
              Project Openings Available
            </span>
          </div>

          {/* Impact Heading - Responsive */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] font-black uppercase tracking-tighter leading-[1] sm:leading-[0.95] md:leading-[0.9] lg:leading-[0.85] italic">
              LETS CREATE <br />
              <span className="text-transparent outline-text">TOGETHER.</span>
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed px-4 sm:px-6">
              Ready to elevate your narrative? Reach out for a custom quote or to discuss your visual goals.
            </p>
          </div>

          {/* Interactive Buttons - Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6">
            <motion.a
              href="mailto:hello@framelevel.com"
              whileHover={!isMobile ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4 bg-white text-black px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-full font-black uppercase tracking-wider text-[10px] sm:text-[11px] md:text-xs overflow-hidden w-full sm:w-auto"
            >
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 md:gap-3">
                Start a Project <Send size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <motion.div 
                className="absolute inset-0 bg-blue-600"
                initial={{ y: "100%" }}
                animate={{ y: isHovered ? "0%" : "100%" }}
              />
              {isHovered && <Sparkles size={12} className="sm:w-3 sm:h-3 absolute right-2 sm:right-3 md:right-4 top-2 sm:top-3 md:top-4 text-white z-20" />}
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={!isMobile ? { x: 3 } : {}}
              className="flex items-center gap-1.5 sm:gap-2 text-zinc-500 hover:text-white transition-colors text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em]"
            >
              View Full Portfolio <ArrowUpRight size={10} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
            </motion.a>
          </div>
        </motion.div>

        {/* 3. Dynamic Info Grid - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-3xl mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24"
        >
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              onClick={info.action}
              className={`bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center transition-all ${
                info.action ? 'cursor-pointer hover:border-blue-500/30 group active:scale-98' : ''
              }`}
            >
              <div className="text-blue-500 flex justify-center mb-2 sm:mb-2.5 md:mb-3">
                {info.icon}
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-tight break-words">
                {info.text}
              </p>
              {info.action && (
                <span className="text-[7px] sm:text-[8px] md:text-[9px] font-mono text-zinc-600 uppercase mt-1.5 sm:mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                  {emailCopied ? 'Copied to Clipboard' : 'Click to Copy'}
                </span>
              )}
            </div>
          ))}
        </motion.div>
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
        
        .active\\:scale-98:active {
          transform: scale(0.98);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;