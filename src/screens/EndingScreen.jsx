import React from 'react'
import { motion } from 'framer-motion'

export default function EndingScreen(){
  return (
    <section className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-50 to-cream">
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1 }} className="text-center glass p-10 rounded-3xl max-w-2xl">
        <h2 className="text-3xl handwriting">Everything beautiful in me exists because of you, Mom 💖</h2>
        <p className="mt-4 text-gray-600">Thank you for your endless love. Happy Mother's Day.</p>
      </motion.div>
    </section>
  )
}
