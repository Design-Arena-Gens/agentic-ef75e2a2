'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import IntroSlide from './components/IntroSlide'
import WhatIsWebDev from './components/WhatIsWebDev'
import TechStack from './components/TechStack'
import ProjectShowcase from './components/ProjectShowcase'
import FeaturesSlide from './components/FeaturesSlide'
import CodeDemo from './components/CodeDemo'
import FutureSlide from './components/FutureSlide'
import ThankYouSlide from './components/ThankYouSlide'
import Navigation from './components/Navigation'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const slides = [
    <IntroSlide key="intro" />,
    <WhatIsWebDev key="webdev" />,
    <TechStack key="tech" />,
    <ProjectShowcase key="project" />,
    <FeaturesSlide key="features" />,
    <CodeDemo key="code" />,
    <FutureSlide key="future" />,
    <ThankYouSlide key="thanks" />
  ]

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 10) {
        if (e.deltaY > 0 && currentSlide < slides.length - 1) {
          setCurrentSlide(prev => prev + 1)
        } else if (e.deltaY < 0 && currentSlide > 0) {
          setCurrentSlide(prev => prev - 1)
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1)
      } else if (e.key === 'ArrowUp' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentSlide, slides.length])

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, scale: 1.2, rotateX: 15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNavigate={setCurrentSlide}
      />
    </div>
  )
}
