import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

export default function FinalSurprise({ onClose }){
  const [show, setShow] = useState(true)
  const [burstConfetti, setBurstConfetti] = useState(true)

  useEffect(()=>{
    // play finale music louder for this moment
    const music = new Audio('/src/assets/finale.mp3')
    music.loop = false
    music.volume = 0.0
    music.play().catch(()=>{})
    // gentle fade-in of music
    let vol = 0
    const ramp = setInterval(()=>{
      vol += 0.02
      music.volume = Math.min(0.7, vol)
      if(music.volume >= 0.7){ clearInterval(ramp) }
    }, 200)

    // optional chime
    const chime = new Audio('/src/assets/pop.mp3')
    chime.volume = 0.65
    setTimeout(()=> chime.play().catch(()=>{}), 700)

    // stop confetti after a bit
    const t2 = setTimeout(()=> setBurstConfetti(false), 4200)

    return ()=>{ clearInterval(ramp); clearTimeout(t2); music.pause(); music.currentTime=0 }
  },[])

  // create many heart particles with varied properties
  // produce layered hearts: some background (small, blurred), some foreground (larger, sharp)
  const hearts = Array.from({length:30}).map((_,i)=>{
    const isForeground = i % 5 === 0
    const left = Math.round((i*41 + Math.random()*40) % 100)
    const size = isForeground ? (48 + Math.random()*72) : (18 + Math.random()*36)
    const delay = Math.random()*2
    const duration = isForeground ? (18 + Math.random()*12) : (22 + Math.random()*18)
    const blur = isForeground ? (Math.random()>.8?6:0) : (Math.random()>.4?6:10)
    const opacity = isForeground ? 0.95 : 0.7
    return {id:i,left,size,delay,duration,blur,isForeground,opacity}
  })

  return (
    <div className="final-overlay fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 final-bg" />

      {burstConfetti && <Confetti recycle={false} numberOfPieces={600} />}

      {/* soft glowing ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({length:60}).map((_,i)=> (
          <div key={i} className="ambient-particle" style={{left:`${(i*73 + (i%7)*11)%100}%`, top:`${(i*37 + (i%5)*13)%100}%`, animationDelay:`${(i%7)*0.12}s`}} />
        ))}
      </div>

      {/* floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map(h=> (
          <motion.div key={h.id} className={`heart ${h.isForeground? 'heart-fore':''}`} style={{left:`${h.left}%`, filter: h.blur?`blur(${h.blur}px)`:'none'}} initial={{y:260, opacity:0, scale: h.isForeground?0.85:0.7}} animate={{y:-420, opacity:[h.opacity,h.opacity,0.0], scale:[1,1.02,0.96]}} transition={{duration: h.duration, delay:h.delay, ease:'easeOut'}}>
            <svg width={h.size} height={h.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id={`hg-${h.id}`} x1="0" x2="1">
                  <stop offset="0%" stopColor="#ffd1e6" />
                  <stop offset="55%" stopColor="#ff7aa6" />
                  <stop offset="100%" stopColor="#d21b57" />
                </linearGradient>
                <filter id={`glow-${h.id}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation={h.isForeground?"6" : "3"} result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path d="M12 21s-7.5-4.9-9.2-7.1C.9 10.8 3.1 6 7.6 6c2.2 0 3.4 1.1 4.4 2.3.98-1.2 2.2-2.3 4.4-2.3 4.5 0 6.7 4.8 4.8 7.9C19.5 16.1 12 21 12 21z" fill={`url(#hg-${h.id})`} opacity={h.opacity} style={{filter:`url(#glow-${h.id})`}} />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* center title + subtitle */}
      <motion.div initial={{scale:0.92, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:1.1, ease:'easeOut'}} className="z-70 flex flex-col items-center justify-center px-6 text-center">
        <motion.h1 className="final-title" initial={{y:30, opacity:0, scale:0.95}} animate={{y:0, opacity:1, scale:1}} transition={{delay:0.25, duration:1.0, ease:'easeOut'}}>
          <span className="final-title-line">HAPPY MOTHER'S DAY</span>
          <br />
          <span className="final-title-subline">AAI 💖</span>
        </motion.h1>

        <motion.p initial={{y:18, opacity:0}} animate={{y:[8,0], opacity:1}} transition={{delay:0.9, duration:1.2, ease:'easeOut'}} className="final-sub mt-6">You are my forever home, my strength, and my biggest blessing ✨</motion.p>

        {/* subtle sparkles around text */}
        <div className="absolute -translate-y-10 w-full flex justify-center pointer-events-none">
          {Array.from({length:8}).map((_,i)=> (
            <div key={i} className="text-sparkle" style={{left:`${10 + i*11}%`, animationDelay:`${i*0.3}s`}} />
          ))}
        </div>
      </motion.div>

      <button onClick={()=>{ setShow(false); if(onClose) onClose(); }} className="absolute top-6 right-6 glass px-3 py-2 rounded-full z-80">Close</button>
    </div>
  )
}
