'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectShowcase() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-950/30 to-black">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-7xl md:text-8xl font-black mb-6"
            style={{
              background: 'linear-gradient(45deg, #00ff88, #00d4ff, #a259ff, #ff00ff)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            MY PROJECT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl text-cyan-400 font-bold mb-2"
          >
            🎵 MUSIC PLAYER
          </motion.p>
          <p className="text-xl text-gray-400">A fully functional web-based music streaming application</p>
        </motion.div>

        {/* Project showcase with mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative max-w-5xl mx-auto"
          style={{ perspective: '2000px' }}
        >
          <motion.div
            animate={{
              rotateY: isHovered ? 5 : 0,
              rotateX: isHovered ? -5 : 0,
              z: isHovered ? 50 : 0
            }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Browser chrome */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-cyan-500/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4 bg-gray-700 rounded px-4 py-1 text-sm text-gray-400 font-mono">
                https://my-music-player.vercel.app
              </div>
            </div>

            {/* Project screenshot placeholder with dynamic content */}
            <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 via-gray-900 to-cyan-900/50 p-8">
              {/* Music player UI mockup */}
              <div className="h-full flex flex-col items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-48 h-48 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mb-8 flex items-center justify-center shadow-2xl"
                >
                  <span className="text-7xl">🎵</span>
                </motion.div>

                <div className="w-full max-w-md space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Currently Playing</h3>
                    <p className="text-cyan-400">Electronic Vibes Mix</p>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                      animate={{ width: ['0%', '100%'] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-6 text-white">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-3xl"
                    >
                      ⏮️
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-3xl shadow-lg"
                    >
                      ▶️
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-3xl"
                    >
                      ⏭️
                    </motion.button>
                  </div>

                  {/* Social links */}
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
                    >
                      f
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center"
                    >
                      📷
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center"
                    >
                      🐦
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 255, 136, 0.3)',
                  '0 0 40px rgba(0, 212, 255, 0.5)',
                  '0 0 20px rgba(162, 89, 255, 0.3)',
                  '0 0 20px rgba(0, 255, 136, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {['Audio Playback', 'Playlist Management', 'Social Integration', 'Responsive Design'].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-full text-white font-semibold"
            >
              ✨ {feature}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
