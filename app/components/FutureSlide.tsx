'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#00d4ff"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  )
}

export default function FutureSlide() {
  const futureFeatures = [
    { icon: '🤖', text: 'AI-Powered Recommendations' },
    { icon: '🎯', text: 'Smart Playlists' },
    { icon: '🔊', text: 'Audio Visualization' },
    { icon: '☁️', text: 'Cloud Sync' },
    { icon: '🎙️', text: 'Podcast Integration' },
    { icon: '🌍', text: 'Multi-language Support' }
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50" style={{
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 70%)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-8xl md:text-9xl font-black mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              background: 'linear-gradient(90deg, #00ff88, #00d4ff, #a259ff, #ff00ff, #00ff88)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            THE FUTURE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl text-cyan-400 font-bold"
          >
            What&apos;s Next?
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <motion.div
            className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Feature items */}
          <div className="space-y-8">
            {futureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: 0.7 + index * 0.15,
                  duration: 0.8,
                  type: "spring"
                }}
                className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: index % 2 === 0 ? 2 : -2 }}
                  className="flex-1 relative group"
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
                  <div className="relative bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-6 flex items-center gap-4">
                    <motion.div
                      className="text-5xl"
                      animate={{
                        rotateY: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">
                        {feature.text}
                      </h3>
                    </div>
                  </div>
                </motion.div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.7 + index * 0.15,
                    type: "spring"
                  }}
                  className="relative"
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(0, 255, 136, 0.5)',
                        '0 0 30px rgba(0, 212, 255, 0.8)',
                        '0 0 10px rgba(162, 89, 255, 0.5)',
                        '0 0 10px rgba(0, 255, 136, 0.5)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </motion.div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-2xl font-bold text-black">
                Stay Tuned for Updates! 🚀
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  )
}
