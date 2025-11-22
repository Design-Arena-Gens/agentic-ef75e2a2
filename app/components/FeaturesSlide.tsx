'use client'

import { motion } from 'framer-motion'

export default function FeaturesSlide() {
  const features = [
    {
      title: 'AUDIO ENGINE',
      description: 'Custom built audio player with HTML5 Audio API',
      icon: '🎧',
      tech: ['JavaScript', 'Web Audio API']
    },
    {
      title: 'UI/UX DESIGN',
      description: 'Modern, intuitive interface with smooth animations',
      icon: '🎨',
      tech: ['CSS3', 'Animations', 'Flexbox']
    },
    {
      title: 'SOCIAL CONNECT',
      description: 'Integrated social media links and sharing features',
      icon: '🌐',
      tech: ['API Integration', 'Social SDKs']
    },
    {
      title: 'RESPONSIVE',
      description: 'Works seamlessly across all devices and screen sizes',
      icon: '📱',
      tech: ['Media Queries', 'Mobile-First']
    }
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 20}%`,
              }}
              animate={{
                scaleY: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.05
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-8xl font-black mb-4"
            animate={{
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: 'linear-gradient(90deg, #00ff88, #00d4ff, #a259ff, #00ff88)',
              backgroundSize: '200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            KEY FEATURES
          </motion.h2>
          <p className="text-2xl text-gray-400">What makes this project special</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                type: "spring"
              }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-2 border-cyan-500/30 rounded-3xl p-8 h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Icon */}
                <motion.div
                  className="text-7xl mb-6"
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title with glowing underline */}
                <div className="mb-4">
                  <h3 className="text-3xl font-black text-white mb-2">
                    {feature.title}
                  </h3>
                  <motion.div
                    className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  />
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6">
                  {feature.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.2 + 0.8 + techIndex * 0.1
                      }}
                      className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm text-cyan-400 font-mono"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <motion.div
            className="inline-block px-8 py-4 border-2 border-cyan-500/50 rounded-full"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 255, 136, 0.3)',
                '0 0 40px rgba(0, 212, 255, 0.5)',
                '0 0 20px rgba(0, 255, 136, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xl text-cyan-400 font-bold">
              💡 Built with passion and modern web technologies
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
