import React from 'react'
import PropTypes from 'prop-types'

const ratings = new Array(5).fill({
  icon: 'star',
  style: {
    fontVariationSettings: '"FILL" 1',
    fontSize: '20px'
  }
})

const ReviewCard = ({ content, name, company, imgSrc }) => {
  return (
    <div className='relative bg-gradient-to-b from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl p-8 rounded-3xl min-w-[340px] lg:min-w-[420px] flex flex-col border border-cyan-500/20 shadow-2xl hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] group hover:-translate-y-2 transition-all duration-500 overflow-hidden'>
      
      {/* Neural Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
      
      {/* Tech Stack Badge - AI/ML Focus */}
      <div className='absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500'>
        <span className='material-symbols-rounded text-cyan-400 p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-lg'>
          neural_network
        </span>
        <span className='material-symbols-rounded text-purple-400 p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-lg'>
          settings_input_composite
        </span>
      </div>

      {/* 5-Star Rating */}
      <div className='flex items-center gap-1 mb-6 relative z-10 pt-4'>
        {ratings.map(({ icon, style }, key) => (
          <span 
            key={key} 
            className='material-symbols-rounded text-yellow-400 text-[20px] drop-shadow-lg' 
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Testimonial Content */}
      <p className='text-zinc-300 mb-8 leading-relaxed text-lg relative z-10 italic font-medium tracking-wide'>
        "{content}"
      </p>

      {/* Profile Footer */}
      <div className='flex items-center gap-4 mt-auto relative z-10'>
        {imgSrc && (
          <div className='relative'>
            <img 
              src={imgSrc}
              alt={name}
              className='w-14 h-14 rounded-2xl object-cover border-3 border-cyan-500/50 shadow-xl ring-3 ring-cyan-500/30 hover:ring-emerald-400/40 transition-all duration-500 cursor-pointer group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm' />
          </div>
        )}
        
        <div className='min-w-0 flex-1'>
          <p className='text-white font-bold text-lg leading-tight truncate'>
            {name}
          </p>
          <p className='text-xs text-cyan-400 font-semibold tracking-widest uppercase bg-black/30 px-3 py-1 rounded-full inline-block backdrop-blur-sm border border-cyan-500/30'>
            {company}
          </p>
        </div>
      </div>

      {/* AI Metrics Badge */}
      <div className='absolute bottom-4 left-4 text-xs text-emerald-400 font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500'>
        AI/ML Expert
      </div>
    </div>
  )
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
}

ReviewCard.defaultProps = {
  imgSrc: ''
}

export default ReviewCard
