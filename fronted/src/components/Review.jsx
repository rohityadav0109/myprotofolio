"use client"; // Required for Framer Motion + react-icons

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaInstagram, FaStar, FaBolt, FaBrain } from "react-icons/fa";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiOpencv 
} from "react-icons/si";

const reviews = [
  {
    content: "Transformed our AI pipeline with production-grade models achieving 99.8% accuracy. Scalable inference at enterprise level.",
    name: "Rahul Yadav",
    href: "https://www.linkedin.com/in/rahul-yadav-42b260341/",
    imgSrc: "/assets/rahul.jpeg",
    company: "PixelForge AI",
    techIcons: [SiTensorflow],
    rating: 5,
    gradient: "from-emerald-500 to-cyan-500"
  },
  {
    content: "Real-time CV system processing 10K+ images/sec. YOLO optimization reduced latency by 87%. Elite expertise.",
    name: "Narendra Yadav", 
    href: "https://www.linkedin.com/in/narendra-yadav-0ba95b341/",
    imgSrc: "/assets/narendra.jpeg",
    company: "NexaWave Vision",
    techIcons: [SiOpencv],
    rating: 5,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    content: "NLP Transformers deployed with 95% F1-score. Production-ready MLOps pipeline with zero downtime.",
    name: "Lalit Kumawat",
    href: "https://www.linkedin.com/in/lalit-98b79a324/",
    imgSrc: "/assets/lalit.jpeg",
    company: "CodeCraft AI",
    techIcons: [SiPytorch],
    rating: 5,
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    content: "Edge ML inference with TensorRT. 70% model compression while maintaining 98.5% accuracy. Revolutionary.",
    name: "Rohit Yadav",
    href: "https://www.linkedin.com/in/rohit-yadav-14b4411b2/",
    imgSrc: "/assets/rohit.jpeg",
    company: "BrightWeb ML",
    techIcons: [SiTensorflow, SiPytorch],
    rating: 5,
    gradient: "from-orange-500 to-red-500"
  },
  {
    content: "Automated MLOps with A/B testing. Deployed 50+ models across multi-cloud environments seamlessly.",
    name: "Mukesh Lilawat",
    href: "https://www.linkedin.com/in/mukeshlilawat1/",
    imgSrc: "/assets/mukesh.jpeg",
    company: "TechMosaic AI",
    techIcons: [FaBrain],
    rating: 5,
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    content: "4K video object detection at 92 FPS. Custom YOLOv8 implementation for edge deployment excellence.",
    name: "Dileep Yadav",
    href: "https://www.instagram.com/dileep_yadav7362/",
    imgSrc: "/assets/dilip.png",
    company: "Skyline Vision",
    techIcons: [SiOpencv, FaBolt],
    rating: 5,
    gradient: "from-yellow-400 to-amber-500",
    isInstagram: true
  }
];

const Review = () => {
  return (
    <section id="reviews" className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a1a] to-[#020617]" />
        
        {/* Animated scan lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 to-purple-500 animate-scanline" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-purple-500 to-pink-500 animate-scanline animation-delay-2000" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-emerald-500 to-cyan-500 animate-scanline animation-delay-4000" />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-cyan-400 rounded-full opacity-60"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, 50, 100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-black/50 px-6 py-3 rounded-full border border-cyan-500/30 backdrop-blur-xl mb-8"
          >
            <FaStar className="text-yellow-400 text-xl" />
            <span className="text-cyan-400 font-mono uppercase tracking-wider text-sm">150+ AI Projects</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 bg-clip-text text-transparent leading-tight mb-6"
          >
            Elite AI/ML 
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Testimonials</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Production-grade AI engineers who deployed cutting-edge ML systems at scale
          </motion.p>
        </div>

        {/* Review Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {reviews.map(({ content, name, company, imgSrc, href, isInstagram, techIcons, rating, gradient }, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -20, scale: 1.02 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group bg-gradient-to-b from-black/60 to-gray-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 overflow-hidden hover:border-cyan-400/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,255,255,0.15)]"
            >
              {/* Animated tech badges */}
              <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {techIcons.map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                ))}
              </div>

              {/* Profile Header */}
              <motion.div 
                className="flex items-start gap-6 mb-8 group-hover:gap-8 transition-all duration-500"
                whileHover={{ paddingLeft: 10 }}
              >
                <a href={href} target="_blank" rel="noopener noreferrer" className="relative flex-shrink-0">
                  <motion.img
                    src={imgSrc}
                    alt={name}
                    className="w-20 h-20 rounded-3xl object-cover border-4 border-white/20 shadow-2xl ring-4 ring-transparent group-hover:ring-cyan-400/40 hover:scale-110 transition-all duration-500 cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </a>
                
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-black text-white mb-1 leading-tight">{name}</h3>
                  <p className={`text-lg font-mono uppercase tracking-wider ${gradient} bg-clip-text text-transparent`}>
                    {company}
                  </p>
                </div>
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-8">
                {Array(rating).fill(0).map((_, idx) => (
                  <FaStar key={idx} className="w-6 h-6 text-yellow-400 fill-yellow-400 shadow-lg" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-200 text-lg leading-relaxed mb-10 font-medium italic tracking-wide">
                "{content}"
              </blockquote>

              {/* CTA Button */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-cyan-600 via-emerald-600 to-purple-600 hover:from-cyan-500 hover:via-emerald-500 hover:to-purple-500 shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isInstagram ? (
                    <FaInstagram className="text-pink-300 text-xl" />
                  ) : (
                    <FaLinkedin className="text-cyan-200 text-xl" />
                  )}
                  {isInstagram ? "View Instagram" : "Connect LinkedIn"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              </a>

              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 rounded-3xl blur-3xl transition-all duration-1000" />
            </motion.article>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Review;
