'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const technologies = [
    {
      name: 'HTML5',
      color: '#E34F26',
      desc: 'Structure & Content',
      icon: '📄'
    },
    {
      name: 'CSS3',
      color: '#1572B6',
      desc: 'Styling & Animations',
      icon: '🎨'
    },
    {
      name: 'JavaScript',
      color: '#F7DF1E',
      desc: 'Dynamic Interactions',
      icon: '⚡'
    },
    {
      name: 'React',
      color: '#61DAFB',
      desc: 'UI Components',
      icon: '⚛️'
    },
    {
      name: 'Node.js',
      color: '#339933',
      desc: 'Backend Runtime',
      icon: '🟢'
    },
    {
      name: 'APIs',
      color: '#FF6B6B',
      desc: 'Data Integration',
      icon: '🔌'
    }
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* Animated circuit board background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="none" stroke="#00ff88" strokeWidth="1" />
              <circle cx="10" cy="10" r="3" fill="#00ff88" />
              <circle cx="90" cy="10" r="3" fill="#00ff88" />
              <circle cx="90" cy="90" r="3" fill="#00ff88" />
              <circle cx="10" cy="90" r="3" fill="#00ff88" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-8xl font-black mb-6"
            animate={{
              textShadow: [
                '0 0 20px rgba(0, 255, 136, 0.5)',
                '0 0 40px rgba(0, 212, 255, 0.5)',
                '0 0 20px rgba(162, 89, 255, 0.5)',
                '0 0 20px rgba(0, 255, 136, 0.5)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              TECH STACK
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-gray-400"
          >
            The weapons of modern web development
          </motion.p>
        </motion.div>

        {/* Hexagonal tech grid */}
        <div className="flex flex-wrap justify-center gap-8 items-center max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative group cursor-pointer"
            >
              <motion.div
                animate={{
                  rotateZ: hoveredTech === tech.name ? 360 : 0,
                  scale: hoveredTech === tech.name ? 1.15 : 1
                }}
                transition={{ duration: 0.5 }}
                className="relative w-40 h-40 flex items-center justify-center"
              >
                {/* Hexagon shape */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}10)`,
                    border: `2px solid ${tech.color}`,
                  }}
                />

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    background: tech.color,
                    filter: 'blur(20px)',
                  }}
                  animate={{
                    opacity: hoveredTech === tech.name ? 0.4 : 0.1
                  }}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-5xl mb-2"
                    animate={{
                      rotateY: hoveredTech === tech.name ? [0, 360] : 0
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                </div>

                {/* Description on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredTech === tech.name ? 1 : 0,
                    y: hoveredTech === tech.name ? 0 : 10
                  }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                  <p
                    className="text-sm font-semibold px-4 py-2 rounded-full"
                    style={{
                      background: `${tech.color}20`,
                      border: `1px solid ${tech.color}`,
                      color: tech.color
                    }}
                  >
                    {tech.desc}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Connecting lines animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4">
            <motion.div
              className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-purple-500"
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xl text-cyan-400 font-mono">POWERING MODERN WEB</span>
            <motion.div
              className="w-16 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-transparent"
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
