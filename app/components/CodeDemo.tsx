'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CodeDemo() {
  const [typedCode, setTypedCode] = useState('')
  const [currentLine, setCurrentLine] = useState(0)

  const codeLines = [
    'const musicPlayer = {',
    '  init() {',
    '    this.audio = new Audio();',
    '    this.setupControls();',
    '    this.loadPlaylist();',
    '  },',
    '  play() {',
    '    this.audio.play();',
    '    this.updateUI();',
    '  }',
    '};'
  ]

  useEffect(() => {
    const fullCode = codeLines.join('\n')
    let index = 0
    const timer = setInterval(() => {
      if (index < fullCode.length) {
        setTypedCode(fullCode.substring(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-500 font-mono text-xs"
            style={{
              left: `${(i * 5)}%`,
              top: '-20px'
            }}
            animate={{
              y: ['0vh', '120vh']
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 2
            }}
          >
            {Array.from({ length: 30 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-7xl md:text-8xl font-black mb-4"
            style={{
              background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              textShadow: [
                '0 0 30px rgba(0, 255, 136, 0.5)',
                '0 0 50px rgba(0, 212, 255, 0.7)',
                '0 0 30px rgba(0, 255, 136, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            THE CODE
          </motion.h2>
          <p className="text-2xl text-gray-400">Where magic happens</p>
        </motion.div>

        {/* Code editor window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
          style={{ perspective: '2000px' }}
        >
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl">
            {/* Editor header */}
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-cyan-500/30">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-cyan-400 font-mono text-sm">music-player.js</span>
              </div>
              <div className="flex gap-2">
                {['HTML', 'CSS', 'JS'].map((lang, i) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`px-3 py-1 rounded ${lang === 'JS' ? 'bg-cyan-500/30 text-cyan-400' : 'text-gray-500'} text-xs font-mono`}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Code content */}
            <div className="relative bg-gray-900 p-8 font-mono text-sm overflow-hidden">
              <pre className="text-left">
                <code className="text-gray-300">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="leading-7"
                    >
                      <span className="text-gray-600 select-none mr-4">{index + 1}</span>
                      <span className="text-cyan-400">
                        {line.includes('const') && <span className="text-purple-400">const </span>}
                        {line.includes('this') && <span className="text-pink-400">this.</span>}
                        {line.includes('new') && <span className="text-purple-400">new </span>}
                        {line.replace(/const |this\.|new /g, '')}
                      </span>
                    </motion.div>
                  ))}
                </code>
              </pre>

              {/* Cursor */}
              <motion.div
                className="absolute w-2 h-5 bg-cyan-400"
                animate={{
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity
                }}
                style={{
                  left: '8rem',
                  top: `${2 + codeLines.length * 1.75}rem`
                }}
              />

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"
                animate={{
                  y: ['-100%', '200%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            </div>

            {/* Status bar */}
            <div className="bg-gray-800 px-6 py-2 flex items-center justify-between border-t border-cyan-500/30 text-xs font-mono">
              <div className="flex gap-4">
                <span className="text-green-400">✓ No errors</span>
                <span className="text-gray-500">UTF-8</span>
              </div>
              <div className="flex gap-4 text-gray-500">
                <span>Ln {codeLines.length}</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          {/* Floating code elements */}
          {['{ }', '< >', '( )', '[ ]'].map((symbol, index) => (
            <motion.div
              key={symbol}
              className="absolute text-4xl font-bold text-cyan-500/20 pointer-events-none"
              style={{
                left: `${index * 25}%`,
                top: `${-10 + index * 5}%`
              }}
              animate={{
                y: [0, -30, 0],
                rotateZ: [0, 360],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            { name: 'HTML5', color: '#E34F26' },
            { name: 'CSS3', color: '#1572B6' },
            { name: 'JavaScript', color: '#F7DF1E' }
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="px-6 py-3 rounded-lg border-2 font-bold"
              style={{
                borderColor: tech.color,
                color: tech.color,
                boxShadow: `0 0 20px ${tech.color}40`
              }}
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
