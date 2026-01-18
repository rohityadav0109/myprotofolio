"use client"; // Required for useState

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLock, FaCreditCard, FaMobileAlt, FaCheckCircle } from "react-icons/fa";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const paymentLink = "https://razorpay.me/@rohityadav5155";
      window.location.href = paymentLink;
    }, 1500);
  };

  return (
    <section id="payment" className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
      {/* Cyberpunk Neural Matrix Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black/80 to-slate-950/90" />
        
        {/* Animated neural nodes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-40"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, 50, -30, 0],
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 10 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: `${10 + i * 6}%`, left: `${15 + i * 5}%` }}
          />
        ))}
        
        {/* Matrix scanlines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500/30 via-emerald-500/50 to-purple-500/30 animate-scanline" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-purple-500/30 via-pink-500/50 to-emerald-500/30 animate-scanline" style={{animationDelay: '3s'}} />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-emerald-500/30 via-cyan-500/50 to-purple-500/30 animate-scanline" style={{animationDelay: '6s'}} />
      </div>

      {/* Main Payment Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-4xl mx-auto bg-gradient-to-b from-slate-900/95 via-black/70 to-slate-900/80 backdrop-blur-3xl border border-cyan-500/20 rounded-4xl shadow-2xl hover:shadow-[0_0_100px_rgba(6,182,212,0.3)] p-12 transition-all duration-700"
      >
        {/* Header with AI Payment Badge */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-3 bg-emerald-500/20 backdrop-blur-sm px-6 py-3 rounded-3xl border border-emerald-500/40 mb-8 shadow-lg"
          >
            <FaLock className="text-emerald-400 text-xl" />
            <span className="text-emerald-400 font-mono uppercase tracking-wider text-sm font-bold">SECURE AI PAYMENT</span>
            <FaCheckCircle className="text-emerald-400 text-xl" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 bg-clip-text text-transparent leading-tight mb-4"
          >
            Secure Payment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Professional AI/ML Development Services - Enterprise Grade Solutions
          </motion.p>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name & Mobile Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <label htmlFor="name" className="block text-sm font-bold text-cyan-300 mb-3 absolute -top-8 left-3 bg-black/80 px-3 py-1 rounded-xl backdrop-blur-sm">
                <FaCreditCard className="inline-block w-4 h-4 mr-2" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full h-16 bg-black/50 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl px-6 py-4 text-lg text-white font-medium focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/30 transition-all duration-500 placeholder-gray-500 group-hover:border-cyan-400/60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 pointer-events-none" />
            </motion.div>

            {/* Mobile Field */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative group"
            >
              <label htmlFor="mobile" className="block text-sm font-bold text-emerald-300 mb-3 absolute -top-8 left-3 bg-black/80 px-3 py-1 rounded-xl backdrop-blur-sm">
                <FaMobileAlt className="inline-block w-4 h-4 mr-2" />
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full h-16 bg-black/50 backdrop-blur-xl border-2 border-emerald-500/30 rounded-3xl px-6 py-4 text-lg text-white font-medium focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/30 transition-all duration-500 placeholder-gray-500 group-hover:border-emerald-400/60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </div>

          {/* Description Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative group"
          >
            <label htmlFor="description" className="block text-sm font-bold text-purple-300 mb-3 absolute -top-8 left-3 bg-black/80 px-3 py-1 rounded-xl backdrop-blur-sm">
              Project Details
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="Website development, AI/ML model deployment, Fullstack application..."
              className="w-full bg-black/50 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl px-6 py-5 text-lg text-white font-medium focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/30 transition-all duration-500 resize-vertical placeholder-gray-500 group-hover:border-purple-400/60 min-h-[140px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 pointer-events-none" />
          </motion.div>

          {/* Payment Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full h-20 bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-purple-500 text-white font-black text-xl rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-3"
                >
                  <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing Payment...
                </motion.div>
              ) : (
                <motion.div
                  key="ready"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-3"
                >
                  <FaLock className="text-xl" />
                  Proceed to Secure Payment 🚀
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          </motion.button>
        </form>

        {/* Security Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono">
            <FaLock className="w-4 h-4" />
            256-bit SSL Encrypted
          </div>
          <div className="w-px h-6 bg-gradient-to-b from-cyan-400 to-purple-400 mx-4" />
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono">
            <span>Powered by</span>
            <span className="font-black text-lg">RAZORPAY</span>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Payment;
