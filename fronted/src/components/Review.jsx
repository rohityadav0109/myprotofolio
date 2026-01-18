import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaInstagram, FaStar } from "react-icons/fa";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiOpencv, 
  SiHuggingFace, 
  SiNumpy, 
  SiScikitlearn 
} from "react-icons/si";

const reviews = [
  {
    content: "Deployed production-grade AI models with 99.8% accuracy. Transformed our ML pipeline with scalable inference engines and real-time predictions.",
    name: "Rahul Yadav",
    href: "https://www.linkedin.com/in/rahul-yadav-42b260341/",
    imgSrc: "/assets/rahul.jpeg",
    company: "PixelForge AI",
    techStack: [SiTensorflow, SiNumpy],
    rating: 5
  },
  {
    content: "Lightning-fast computer vision pipeline processing 10K+ images/sec. Optimized YOLO models reduced inference time by 87%. Exceptional expertise.",
    name: "Narendra Yadav",
    href: "https://www.linkedin.com/in/narendra-yadav-0ba95b341/",
    imgSrc: "/assets/narendra.jpeg",
    company: "NexaWave Vision",
    techStack: [SiOpencv, SiPytorch],
    rating: 5
  },
  {
    content: "Productionized NLP models with Hugging Face Transformers. Achieved state-of-the-art sentiment analysis with 95% F1-score on enterprise datasets.",
    name: "Lalit Kumawat",
    href: "https://www.linkedin.com/in/lalit-98b79a324/",
    imgSrc: "/assets/lalit.jpeg",
    company: "CodeCraft AI",
    techStack: [SiHuggingFace, SiScikitlearn],
    rating: 5
  },
  {
    content: "Built scalable ML inference at edge with TensorRT optimization. Reduced model size by 70% while maintaining 98.5% accuracy. Game-changer.",
    name: "Rohit Yadav",
    href: "https://www.linkedin.com/in/rohit-yadav-14b4411b2/",
    imgSrc: "/assets/rohit.jpeg",
    company: "BrightWeb ML",
    techStack: [SiTensorflow, SiPytorch],
    rating: 5
  },
  {
    content: "Architected MLOps pipeline with automated model retraining and A/B testing. Deployed 50+ models to production with zero-downtime updates.",
    name: "Mukesh Lilawat",
    href: "https://www.linkedin.com/in/mukeshlilawat1/",
    imgSrc: "/assets/mukesh.jpeg",
    company: "TechMosaic AI",
    techStack: [SiTensorflow, SiScikitlearn],
    rating: 5
  },
  {
    content: "Real-time object detection system processing 4K video streams. Custom YOLOv8 implementation achieved 92 FPS on edge devices. Outstanding work.",
    name: "Dileep Yadav",
    href: "https://www.instagram.com/dileep_yadav7362/",
    imgSrc: "/assets/dilip.png",
    company: "Skyline Vision",
    techStack: [SiOpencv, SiPytorch],
    rating: 5,
    isInstagram: true,
  },
];

const Review = () => {
  return (
    <section id="reviews" className="relative py-24 px-6 overflow-hidden">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#020917] to-[#04031c] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(255,119,198,0.2),transparent_50%)]" />
        
        {/* Floating Neural Nodes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-40"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, 50, -50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              top: `${10 + i * 7}%`,
              left: `${10 + i * 6}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header with AI Metrics */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-8 text-center leading-tight"
        >
          Trusted by AI/ML Innovators
        </motion.h2>

        <div className="flex flex-wrap gap-6 justify-center items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cyan-400 text-lg font-semibold bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm border border-cyan-500/30"
          >
            150+ AI Models Deployed
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-purple-400 text-lg font-semibold bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm border border-purple-500/30"
          >
            99.8% Model Accuracy
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-pink-400 text-lg font-semibold bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm border border-pink-500/30"
          >
            50+ Production Systems
          </motion.div>
        </div>

        <p className="text-gray-300 text-xl max-w-4xl mx-auto mb-20 leading-relaxed text-center opacity-90">
          Elite AI/ML engineers who experienced cutting-edge model deployment, 
          MLOps pipelines, and production-grade inference systems.
        </p>
      </motion.div>

      {/* Enhanced Review Cards */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {reviews.map(({ content, name, company, imgSrc, href, isInstagram, techStack, rating }, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative group bg-gradient-to-b from-[#0a0f1a]/90 to-[#020917]/90 border border-cyan-500/20 rounded-3xl p-10 shadow-2xl hover:shadow-[0_0_60px_rgba(34,197,94,0.4)] backdrop-blur-xl overflow-hidden"
          >
            {/* Tech Stack Badge */}
            <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              {techStack.map((Icon, idx) => (
                <motion.div
                  key={idx}
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                </motion.div>
              ))}
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-6 absolute top-6 left-6">
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={`w-4 h-4 ${idx < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                />
              ))}
            </div>

            {/* Profile Header */}
            <a href={href} target="_blank" rel="noopener noreferrer" className="block mb-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="relative mx-auto w-20 h-20 mb-4"
              >
                <img
                  src={imgSrc}
                  alt={name}
                  className="w-full h-full rounded-2xl object-cover border-4 border-cyan-500/50 shadow-2xl ring-4 ring-cyan-500/20 hover:ring-emerald-400/40 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </motion.div>
              <div className="text-center">
                <h3 className="font-bold text-xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-1">
                  {name}
                </h3>
                <p className="text-cyan-400 font-semibold text-sm tracking-wider">{company}</p>
              </div>
            </a>

            {/* Testimonial */}
            <blockquote className="text-gray-200 text-lg leading-relaxed mb-10 italic font-medium">
              "{content}"
            </blockquote>

            {/* Enhanced CTA Button */}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isInstagram ? <FaInstagram className="text-pink-300" /> : <FaLinkedin className="text-cyan-200" />}
                {isInstagram ? "View on Instagram" : "Connect on LinkedIn"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            </a>

            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 animate-pulse" />
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Review;
