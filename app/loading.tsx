"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function Preloader() {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (index === words.length - 1) return
    const timeout = setTimeout(
      () => {
        setIndex(index + 1)
      },
      index === 0 ? 1000 : 150,
    )
    return () => clearTimeout(timeout)
  }, [index])

  if (dimension.width === 0) return null

  const currentWord = words[index]

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">
      <motion.div
        className="w-full h-full absolute inset-0"
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWord}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-white text-4xl font-bold z-10">
              {currentWord}
            </p>
          </motion.div>
        </AnimatePresence>

        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            fill="white"
            initial={{
              d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
            }}
            exit={{
              d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`,
              transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}