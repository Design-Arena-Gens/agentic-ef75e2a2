'use client'

import { motion } from 'framer-motion'

export default function WhatIsWebDev() {
  const features = [
    { icon: '🎨', title: 'DESIGN', desc: 'Visual aesthetics & UX' },
    { icon: '⚡', title: 'PERFORMANCE', desc: 'Speed & optimization' },
    { icon: '🔧', title: 'FUNCTIONALITY', desc: 'Logic & interaction' },
    { icon: '🌐', title: 'CONNECTIVITY', desc: 'Global accessibility' }
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-indigo-950/20 to-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-7xl md:text-8xl font-black mb-8 text-center">
            <motion.span
              className="inline-block"
              style={{
                background: 'linear-gradient(90deg, #00ff88, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              WHAT IS
            </motion.span>
            <br />
            <span className="text-white">WEB DEVELOPMENT?</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl text-center text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          The art and science of <span className="text-cyan-400 font-bold">building interactive experiences</span> that live on the internet.
          It&apos;s where <span className="text-purple-400 font-bold">creativity meets code</span>, transforming ideas into reality.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.6,
                type: "spring"
              }}
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 text-center h-full">
                <motion.div
                  className="text-5xl mb-4"
                  animate={{
                    rotateY: [0, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2 tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative">
            <motion.div
              className="absolute inset-0 bg-cyan-500/20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="relative text-xl text-white font-mono px-8 py-4 border border-cyan-500/50 rounded-full">
              &quot;Building the digital world, one line at a time&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
