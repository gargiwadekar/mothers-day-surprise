import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen({ next }){
  useEffect(()=>{
    const t = setTimeout(()=> next(), 3200)
    return ()=>clearTimeout(t)
  },[])

  return (
    <section className="w-full h-full flex items-center justify-center cinematic-dark relative overflow-hidden">
      <div className="absolute inset-0">
        {/* subtle particles using CSS-generated dots */}
        {Array.from({length:28}).map((_,i)=> (
          <div key={i} className="sparkle" style={{left: (Math.random()*100)+'%', top: (20+Math.random()*60)+'%', opacity: 0.6*Math.random(), transform:`scale(${0.6+Math.random()*1.2})`}} />
        ))}
      </div>

      <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:1 }} className="text-center z-20">
        <motion.div initial={{ scale:0.6 }} animate={{ scale:1 }} transition={{ duration:1 }} className="w-44 h-44 rounded-full flex items-center justify-center" style={{background:'radial-gradient(circle,#ffd6e0, #ffb6c1)', boxShadow:'0 30px 80px rgba(255,150,180,0.18)'}}>
          <div className="text-5xl">💖</div>
        </motion.div>

        <motion.h2 initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.6, duration:0.8 }} className="mt-8 text-center text-xl md:text-2xl handwriting">
          A Special Surprise For The Most Important Woman In My Life 💖
        </motion.h2>

        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }} className="mt-4 text-sm text-white/80 max-w-xl mx-auto">Soft music begins and the story unfolds — ready to begin our journey.</motion.p>
      </motion.div>
    </section>
  )
}
