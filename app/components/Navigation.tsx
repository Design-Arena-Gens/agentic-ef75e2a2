'use client'

import { motion } from 'framer-motion'

interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onNavigate: (index: number) => void
}

export default function Navigation({ currentSlide, totalSlides, onNavigate }: NavigationProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onNavigate(index)}
          className="relative group"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full border-2 border-cyan-500"
            animate={{
              backgroundColor: currentSlide === index ? '#00d4ff' : 'transparent',
              scale: currentSlide === index ? 1.3 : 1
            }}
            transition={{ duration: 0.3 }}
          />
          {currentSlide === index && (
            <motion.div
              layoutId="activeSlide"
              className="absolute inset-0 rounded-full bg-cyan-500 blur-md"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Slide {index + 1}
          </span>
        </motion.button>
      ))}

      <div className="mt-4 text-center text-xs text-gray-600 font-mono">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  )
}
