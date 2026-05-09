import React from 'react'
import { motion } from 'framer-motion'

const floating = { y: [0, -12, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }

export default function Hero(){
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#fff0f4] via-[#fffaf0] to-[#f3ecff] opacity-80"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute left-10 top-20 text-2xl opacity-60" animate={{ rotate: [0,10,-10,0] }} transition={{ duration: 8, repeat: Infinity }}>
          ✨ ✨
        </motion.div>
      </div>

      <div className="text-center p-6 glass rounded-3xl max-w-3xl mx-4">
        <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }} className="text-4xl md:text-6xl font-semibold tracking-tight text-pink-700">
          <span className="inline-block handwriting text-4xl md:text-6xl">Happy Mother’s Day Mom</span> <span className="text-3xl">💖</span>
        </motion.h1>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }} className="mt-4 text-lg md:text-xl text-gray-700">
          You are the heart of our family and the queen of my life 👑
        </motion.p>

        <motion.div className="mt-8 flex justify-center" initial={{ scale:0.95 }} animate={{ scale:1.02 }} transition={{ duration:2, repeat: Infinity, repeatType: 'reverse' }}>
          <div className="w-60 h-40 rounded-2xl glass glow flex items-center justify-center">
            <div className="text-sm text-gray-600">A digital hug and lots of love, prepared just for you.</div>
          </div>
        </motion.div>
      </div>

      <motion.div className="absolute -bottom-16 right-8 opacity-60" animate={floating}>
        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-pink-300 to-rose-200/80 blur-sm"/>
      </motion.div>
    </section>
  )
}
