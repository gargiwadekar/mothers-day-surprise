import React from 'react'
import { motion } from 'framer-motion'

export default function MomPhoto(){
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-6">
      <div className="relative flex flex-col items-center">
        <motion.div initial={{ scale:0.92, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.9 }} className="w-80 h-80 rounded-full p-2" style={{background:'radial-gradient(circle at 20% 20%, #fff6f6, #ffd6e0)', boxShadow:'0 40px 120px rgba(255,130,160,0.14)'}}>
          <div className="w-full h-full rounded-full overflow-hidden" style={{border:'8px solid rgba(255,255,255,0.14)', boxShadow:'0 18px 40px rgba(255,182,193,0.12)'}}>
            <img src="/src/assets/mom.jpg" alt="Mom" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div initial={{ y:-30, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.5 }} className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl">👑</motion.div>

        <div className="absolute inset-0 pointer-events-none">
          {Array.from({length:10}).map((_,i)=> (
            <motion.div key={i} className="petal" style={{position:'absolute', left:`${6 + i*9}%`, top:`${6 + (i%4)*10}%`, transform:`rotate(${i*28}deg)`, opacity:0.95}} animate={{y:[0,8,-8,0], x:[0,6,-6,0]}} transition={{duration:7 + i, repeat:Infinity}} />
          ))}
        </div>
      </div>

      <div className="text-center max-w-2xl">
        <h2 className="text-4xl font-semibold handwriting">My Queen</h2>
        <p className="mt-2 text-lg text-gray-700">An elegant portrait to celebrate your warmth, grace and endless love.</p>
      </div>
    </section>
  )
}
