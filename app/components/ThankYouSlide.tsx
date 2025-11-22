'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ThankYouSlide() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-950/30 to-black">
      {/* Animated background particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-500 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay
          }}
        />
      ))}

      {/* Rotating rings */}
      <motion.div
        className="absolute w-[600px] h-[600px] border-2 border-cyan-500/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] border-2 border-purple-500/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center px-8 max-w-5xl">
        {/* Main thank you text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.h2
            className="text-8xl md:text-9xl font-black mb-8"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              background: 'linear-gradient(90deg, #00ff88, #00d4ff, #a259ff, #ff00ff, #00ff88)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            THANK YOU
          </motion.h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl text-cyan-400 mb-12 font-bold"
        >
          For Your Time & Attention
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-64 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-12"
        />

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="space-y-6 mb-12"
        >
          <motion.p
            className="text-2xl text-gray-300 leading-relaxed"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Web development is not just about code—
          </motion.p>
          <motion.p
            className="text-2xl text-gray-300 leading-relaxed"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            it&apos;s about <span className="text-cyan-400 font-bold">creating experiences</span>,
          </motion.p>
          <motion.p
            className="text-2xl text-gray-300 leading-relaxed"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <span className="text-purple-400 font-bold">solving problems</span>, and
          </motion.p>
          <motion.p
            className="text-2xl text-gray-300 leading-relaxed"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          >
            <span className="text-pink-400 font-bold">building the future</span>.
          </motion.p>
        </motion.div>

        {/* Social/Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="space-y-6"
        >
          <p className="text-xl text-gray-400">Let&apos;s Connect</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: '📧', label: 'Email', color: '#00ff88' },
              { icon: '💼', label: 'LinkedIn', color: '#00d4ff' },
              { icon: '🐙', label: 'GitHub', color: '#a259ff' },
              { icon: '🌐', label: 'Portfolio', color: '#ff00ff' }
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 2.2 + index * 0.1,
                  type: "spring"
                }}
                whileHover={{ scale: 1.2, rotateZ: 10 }}
                whileTap={{ scale: 0.9 }}
                className="relative group cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{ background: social.color }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center text-3xl border-2"
                  style={{ borderColor: social.color }}
                >
                  {social.icon}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap"
                  style={{ color: social.color }}
                >
                  {social.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-16"
        >
          <motion.div
            className="inline-block px-8 py-4 border-2 border-cyan-500/50 rounded-full"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 255, 136, 0.3)',
                '0 0 40px rgba(0, 212, 255, 0.6)',
                '0 0 20px rgba(162, 89, 255, 0.3)',
                '0 0 20px rgba(0, 255, 136, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-xl text-white font-mono">
              Questions? <span className="text-cyan-400">Let&apos;s discuss!</span> 💬
            </p>
          </motion.div>
        </motion.div>

        {/* Easter egg - press R to restart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-600 font-mono"
        >
          Press ↑↓ or scroll to navigate
        </motion.div>
      </div>

      {/* Confetti effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`confetti-${i}`}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: ['#00ff88', '#00d4ff', '#a259ff', '#ff00ff'][i % 4],
            left: `${Math.random() * 100}%`,
            top: '-5%'
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.random() * 100 - 50],
            rotateZ: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            opacity: [1, 0.8, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  )
}
