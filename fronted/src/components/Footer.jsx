"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaEnvelope, FaStar } from "react-icons/fa";
import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: "Home", href: "#home", icon: "🏠" },
  { label: "About", href: "#about", icon: "👨‍💻" },
  { label: "Work", href: "#work", icon: "⚡" },
  { label: "Reviews", href: "#reviews", icon: "⭐" },
  { label: "Contact", href: "#contact", icon: "📞" },
  { label: "Payment", href: "#payment", icon: "💳" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/yadavrohit0109", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rohit-yadav-14b4411b2", icon: FaLinkedin },
  { label: "Twitter / X", href: "https://x.com/rohitkumar0789", icon: FaXTwitter },
  { label: "Instagram", href: "https://www.instagram.com/_rohit_yadav_0109/", icon: FaInstagram },
];

const Footer = () => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative py-24 px-6 overflow-hidden">
      {/* Cyberpunk Neural Matrix Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black/90 to-slate-950/80" />
        
        {/* Animated neural network nodes */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 rounded-full opacity-50"
            animate={{
              x: [0, 120, -80, 0],
              y: [0, 60, -40, 0],
              scale: [1, 1.4, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{ duration: 12 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: `${5 + i * 4}%`, left: `${10 + i * 3.5}%` }}
          />
        ))}
        
        {/* Matrix scanlines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500/40 via-emerald-500/60 to-purple-500/40 animate-scanline" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-purple-500/40 via-pink-500/60 to-emerald-500/40 animate-scanline" style={{animationDelay: '4s'}} />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-emerald-500/40 via-cyan-500/60 to-purple-500/40 animate-scanline" style={{animationDelay: '8s'}} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-3 bg-emerald-500/20 backdrop-blur-xl px-6 py-4 rounded-3xl border border-emerald-500/40 mb-8 shadow-2xl"
            >
              <FaStar className="text-emerald-400 text-2xl" />
              <span className="text-emerald-300 font-mono uppercase tracking-wider text-xl font-bold">AI ENGINEER</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 bg-clip-text text-transparent leading-tight mb-6">
              Build the Future
              <motion.span 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              >
                Together 🚀
              </motion.span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-md">
              Full-stack AI/ML solutions. From neural networks to production systems.
            </p>
            
            <ButtonPrimary
              href="mailto:yadavrr9784@zohomail.in"
              label="Launch Project"
              icon="rocket_launch"
              classes="!bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-purple-500 text-white shadow-2xl hover:shadow-emerald-500/50 text-lg px-8 py-5 rounded-3xl font-black tracking-wide"
            />
          </motion.div>

          {/* Navigation & Social Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-16">
            {/* Sitemap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h4 className="text-2xl font-black text-cyan-400 mb-8 tracking-wider uppercase bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">
                Navigation
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {sitemap.map(({ label, href, icon }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    onClick={(e) => handleSmoothScroll(e, href)}
                    className="group relative flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-500 hover:translate-x-4"
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{icon}</span>
                    <span className="text-lg font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors">
                      {label}
                    </span>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h4 className="text-2xl font-black text-purple-400 mb-8 tracking-wider uppercase bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Connect Live
              </h4>
              <div className="space-y-3">
                {socials.map(({ label, href, icon: Icon }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-4 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:border-pink-400/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-700"
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <motion.div
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 group-hover:bg-white/40 transition-all duration-500"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      <Icon className="w-6 h-6 text-gray-200 group-hover:text-pink-300" />
                    </motion.div>
                    <div>
                      <span className="block text-lg font-bold text-white group-hover:text-pink-300">
                        {label}
                      </span>
                      <span className="text-sm text-gray-400">Connect Now</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-between gap-8 text-center lg:text-left"
        >
          {/* Logo & Brand */}
          <motion.div 
            className="flex items-center gap-4 mb-6 lg:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <img
                src="/assets/phoenix.png"
                width={56}
                height={56}
                alt="Rohit Yadav"
                className="drop-shadow-2xl hover:animate-spin-slow rounded-2xl ring-4 ring-cyan-500/30 hover:ring-emerald-400/50 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl opacity-0 hover:opacity-100 blur-xl transition-all duration-500" />
            </div>
            <div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text leading-tight">
                Rohit
                <span className="block text-pink-400 text-xl">Yadav</span>
              </h3>
              <p className="text-emerald-400 font-mono text-sm tracking-wider uppercase">AI Engineer</p>
            </div>
          </motion.div>

          {/* Copyright & Tech Stack */}
          <div className="flex flex-wrap items-center gap-8 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Rohit Yadav. 
              <span className="text-cyan-400 font-mono ml-2">Crafted with AI</span>
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                React 18
              </span>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                Next.js 15
              </span>
              <span className="text-xs bg-emerald-500/20 px-3 py-1 rounded-full backdrop-blur-sm border border-emerald-500/40 text-emerald-400">
                Tailwind
              </span>
            </div>
          </div>

          {/* Live Status */}
          <motion.div 
            className="flex items-center gap-2 text-emerald-400 text-sm font-mono tracking-wider animate-pulse"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
            Live & Secure
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 15s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hover\:animate-spin-slow:hover {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
