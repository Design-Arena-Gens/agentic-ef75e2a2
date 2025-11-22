'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ParticleField from './ParticleField'

export default function IntroSlide() {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black">
      <ParticleField />

      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 136, .05) 25%, rgba(0, 255, 136, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 136, .05) 75%, rgba(0, 255, 136, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 136, .05) 25%, rgba(0, 255, 136, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 136, .05) 75%, rgba(0, 255, 136, .05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated rings */}
      <motion.div
        className="absolute w-96 h-96 rounded-full border-2 border-cyan-500/30"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full border-2 border-purple-500/20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.05, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center px-8">
        {/* Main title with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <motion.h1
            className={`text-8xl md:text-9xl font-black mb-6 tracking-tight ${glitchActive ? 'glitch' : ''}`}
            style={{
              background: 'linear-gradient(45deg, #00ff88, #00d4ff, #a259ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(0, 255, 136, 0.5)'
            }}
            animate={{
              textShadow: [
                '0 0 80px rgba(0, 255, 136, 0.5)',
                '0 0 120px rgba(0, 212, 255, 0.6)',
                '0 0 80px rgba(162, 89, 255, 0.5)',
                '0 0 80px rgba(0, 255, 136, 0.5)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            WEB DEV
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-cyan-400 mb-8 tracking-widest">
            THE FUTURE OF DIGITAL CREATION
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.div
            className="w-20 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-purple-500"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-xl text-gray-400 font-mono">A Cinematic Journey</p>
          <motion.div
            className="w-20 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-transparent"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-cyan-400 text-sm font-mono"
          >
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full mx-auto mb-2 flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            SCROLL
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .glitch {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both;
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </div>
  )
}
