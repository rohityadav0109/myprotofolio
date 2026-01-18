import React from 'react'
import PropTypes from 'prop-types'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { 
  SiTensorflow, 
  SiPytorch, 
  SiOpencv 
} from 'react-icons/si'

const ratings = new Array(5).fill({
  icon: '★',
  className: 'text-yellow-400 drop-shadow-lg'
})

const ReviewCard = ({ 
  content, 
  name, 
  company, 
  imgSrc, 
  href,
  isInstagram = false,
  techIcons = ['neural_network']
}) => {
  return (
    <div className='relative group bg-gradient-to-b from-slate-900/95 via-black/70 to-slate-900/60 backdrop-blur-2xl p-10 rounded-3xl min-w-[360px] lg:min-w-[440px] flex flex-col border border-white/10 hover:border-cyan-400/60 shadow-2xl hover:shadow-[0_25px_80px_rgba(6,182,212,0.25)] hover:-translate-y-3 transition-all duration-700 overflow-hidden hover:bg-slate-900/90'>
      
      {/* Animated Neural Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/8 via-purple-500/8 to-emerald-500/8 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-1000 animate-pulse" />
      
      {/* Dynamic Tech Stack Badges */}
      <div className='absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700'>
        {techIcons.includes('tensorflow') && (
          <motion.div 
            className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-cyan-400/30 hover:bg-cyan-500/20"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <SiTensorflow className="w-5 h-5 text-cyan-400" />
          </motion.div>
        )}
        {techIcons.includes('pytorch') && (
          <motion.div 
            className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-purple-400/30 hover:bg-purple-500/20"
            whileHover={{ scale: 1.2, rotate: -5 }}
          >
            <SiPytorch className="w-5 h-5 text-purple-400" />
          </motion.div>
        )}
        {techIcons.includes('opencv') && (
          <motion.div 
            className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-emerald-400/30 hover:bg-emerald-500/20"
            whileHover={{ scale: 1.2, rotate: 3 }}
          >
            <SiOpencv className="w-5 h-5 text-emerald-400" />
          </motion.div>
        )}
      </div>

      {/* 3D Star Rating */}
      <div className='flex items-center gap-1 mb-8 relative z-10 pt-3'>
        {ratings.map(({ icon, className }, key) => (
          <motion.span 
            key={key} 
            className={`${className} text-xl shadow-lg`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: key * 0.1 }}
          >
            {icon}
          </motion.span>
        ))}
        <span className="ml-2 text-xs text-cyan-400 font-mono tracking-wider">(5.0)</span>
      </div>

      {/* Enhanced Testimonial */}
      <blockquote className='text-gray-100 mb-10 leading-[1.7] text-xl relative z-10 font-light italic tracking-wide flex-1'>
        <span className="relative">
          "{content}"
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-700" />
        </span>
      </blockquote>

      {/* Premium Profile Section */}
      <div className='relative z-10 flex items-center gap-6 pb-6'>
        {/* Glowing Profile Image */}
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group/profile"
        >
          {imgSrc ? (
            <img 
              src={imgSrc}
              alt={name}
              className='w-20 h-20 rounded-3xl object-cover border-4 border-white/20 shadow-2xl ring-4 ring-transparent group-hover:ring-cyan-400/50 hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-1'
            />
          ) : (
            <div className='w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border-4 border-white/20 shadow-2xl flex items-center justify-center font-bold text-white text-lg animate-pulse'>
              {name.charAt(0)}
            </div>
          )}
          {/* Profile glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-white/20 to-emerald-400/30 opacity-0 group-hover/profile:opacity-100 blur-xl transition-opacity duration-500" />
        </a>
        
        {/* Profile Info */}
        <div className='flex-1 min-w-0'>
          <h4 className='text-2xl font-black text-white mb-1 leading-tight truncate bg-gradient-to-r from-white to-gray-200 bg-clip-text'>
            {name}
          </h4>
          <div className='flex items-center gap-2'>
            <p className='text-cyan-400 font-bold text-sm uppercase tracking-widest bg-gradient-to-r from-black/40 to-transparent px-4 py-2 rounded-full backdrop-blur-sm border border-cyan-500/40'>
              {company}
            </p>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
          </div>
        </div>
      </div>

      {/* Premium CTA Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group/btn relative inline-flex items-center gap-3 px-8 py-4 mt-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 shadow-2xl hover:shadow-emerald-500/40 transform hover:-translate-y-1 transition-all duration-500 overflow-hidden z-10"
      >
        <span className="relative z-10 flex items-center gap-2">
          {isInstagram ? (
            <FaInstagram className="text-pink-300 text-xl" />
          ) : (
            <FaLinkedin className="text-cyan-200 text-xl" />
          )}
          {isInstagram ? "View Profile" : "Connect Now"}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-sm" />
      </a>

      {/* AI Certification Badge */}
      <div className='absolute bottom-6 left-6 text-xs text-emerald-400 font-mono font-bold bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-emerald-500/40 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center gap-2'>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        Certified AI/ML Engineer
      </div>

      {/* Floating Matrix Code Effect */}
      <div className="absolute top-4 left-4 text-xs font-mono text-cyan-400/30 mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        010101 ML-ENGINE 010101
      </div>
    </div>
  )
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  href: PropTypes.string,
  isInstagram: PropTypes.bool,
  techIcons: PropTypes.arrayOf(PropTypes.string)
}

ReviewCard.defaultProps = {
  imgSrc: '',
  href: '#',
  isInstagram: false,
  techIcons: ['neural_network']
}

export default ReviewCard
