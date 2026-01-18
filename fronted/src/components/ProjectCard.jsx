import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar, FaBrain } from 'react-icons/fa'
import { 
  SiReact, 
  SiTensorflow, 
  SiPytorch, 
  SiDocker,
  SiVercel 
} from 'react-icons/si'  // ✅ SiNextjs REMOVED - doesn't exist

const ProjectCard = ({ 
  imgSrc, 
  title, 
  tags, 
  projectLink,
  githubLink,
  classes = '' 
}) => {
  const getGradientByTag = (tags) => {
    if (tags.includes('AI/ML')) return 'from-emerald-500 via-cyan-500 to-purple-500'
    if (tags.includes('React')) return 'from-blue-500 via-cyan-500 to-indigo-500'
    if (tags.includes('Fullstack')) return 'from-orange-500 via-red-500 to-pink-500'
    return 'from-slate-500 via-zinc-500 to-gray-500'
  }

  return (
    <motion.a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 via-black/60 to-slate-900/80 backdrop-blur-xl p-8 shadow-2xl hover:shadow-[0_25px_100px_rgba(6,182,212,0.3)] border border-white/10 hover:border-cyan-400/50 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] min-h-[420px] ${classes}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6 }}
    >
      {/* Neural Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000" />
      
      {/* Project Thumbnail */}
      <motion.div 
        className="relative mb-8 aspect-video rounded-2xl overflow-hidden ring-4 ring-white/10 group-hover:ring-cyan-400/40 transition-all duration-700"
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src={imgSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-xl text-xs font-bold text-black opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse">
          LIVE DEMO
        </div>
      </motion.div>

      {/* Project Title */}
      <motion.h3 
        className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4 leading-tight group-hover:scale-105 transition-all duration-500"
        whileHover={{ y: -2 }}
      >
        {title}
      </motion.h3>

      {/* ✅ FIXED Tech Stack Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag, key) => {
          const iconMap = {
            'React': SiReact,
            'TensorFlow': SiTensorflow,
            'PyTorch': SiPytorch,
            'Docker': SiDocker,
            'Vercel': SiVercel,
            'AI/ML': FaBrain,
            'Fullstack': FaGithub  // ✅ Real icons only
          }
          const Icon = iconMap[tag] || null
          
          return (
            <motion.span
              key={key}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-bold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {tag}
            </motion.span>
          )
        })}
      </div>

      {/* Stats Row */}
      <div className="flex items-center justify-between mb-6 text-sm text-cyan-400/80">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 fill-yellow-400 w-4 h-4" />
            <span>4.9</span>
          </div>
          <span className="font-mono">⭐ 2.3k</span>
        </div>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 absolute bottom-8 left-8 right-8">
        <motion.a
          href={projectLink}
          target="_blank"
          className="group/btn flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Live Demo
            <FaExternalLinkAlt className="text-white text-sm" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.a>

        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            className="group/github p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-500"
            whileHover={{ scale: 1.15, rotate: 5 }}
          >
            <FaGithub className="w-6 h-6 text-white" />
          </motion.a>
        )}
      </div>

      {/* Matrix Code + Bottom Glow */}
      <div className="absolute top-4 left-4 text-xs font-mono text-cyan-400/30 mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
        [AI_ENGINE] 010101
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mx-4 rounded-b-3xl" />
    </motion.a>
  )
}

// PropTypes unchanged
ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  classes: PropTypes.string
}

ProjectCard.defaultProps = {
  githubLink: '',
  classes: ''
}

export default ProjectCard
