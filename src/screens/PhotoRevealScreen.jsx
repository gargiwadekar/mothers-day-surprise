import React from 'react'
import { motion } from 'framer-motion'
import MomPhoto from '../components/MomPhoto'

export default function PhotoRevealScreen({ next }){
  return (
    <section className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-50 to-lavender">
      <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.8 }} className="glass p-8 rounded-3xl flex flex-col items-center">
        <MomPhoto />
        <div className="mt-6 text-center">
          <div className="text-xl font-semibold">My Queen</div>
          <div className="text-sm text-gray-600">A special reveal just for you</div>
        </div>
        <div className="mt-6">
          <button onClick={next} className="px-6 py-2 rounded-full bg-pink-300 text-white">Next</button>
        </div>
      </motion.div>
    </section>
  )
}
