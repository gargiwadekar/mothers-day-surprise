import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

function randomStars(n=40){
  return Array.from({length:n}).map((_,i)=>({
    id:i,
    left: Math.random()*100,
    top: 6 + Math.random()*70,
    size: 1 + Math.random()*3,
    opacity: 0.6 + Math.random()*0.6
  }))
}

export default function IntroScreen({ next }){
  const stars = randomStars(48)

  return (
    <section className="w-full h-full relative cinematic-dark">
      <div className="intro-sky cinematic-zoom">
        {stars.map(s=> (
          <div key={s.id} className="star" style={{left:`${s.left}%`, top:`${s.top}%`, width:`${s.size}px`, height:`${s.size}px`, opacity:s.opacity, animation:`drift ${10 + s.id%6}s ease-in-out ${s.id%4}s infinite`}} />
        ))}
      </div>

      <div className="intro-center">
        <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:1 }} className="z-20 text-center">
          <motion.div initial={{ scale:0.6, rotate:0 }} animate={{ scale:[0.9,1.02,0.98,1], rotate:[0,1,-1,0] }} transition={{ duration:6, repeat:Infinity }} style={{width:140,height:140,borderRadius:140,display:'flex',alignItems:'center',justifyContent:'center',background:'radial-gradient(circle,#ffd6e0,#ffb6c1)',boxShadow:'0 40px 120px rgba(255,130,160,0.18)'}}>
            <div className="text-5xl">💖</div>
          </motion.div>

          <motion.h1 initial={{ y:12, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.6, duration:0.8 }} className="intro-heading handwriting">
            A Special Surprise For The Most Important Woman In My Life
          </motion.h1>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }} className="intro-sub">
            <TypeAnimation sequence={['A journey of memories, love and magic ✨', 1400]} speed={40} wrapper="div" cursor={false} />
          </motion.div>

          <motion.button onClick={next} whileHover={{ scale:1.03 }} className="mt-8 px-8 py-3 rounded-full premium-button text-white font-semibold">Begin the Surprise ✨</motion.button>
        </motion.div>
      </div>
    </section>
  )
}
