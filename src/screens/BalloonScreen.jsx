import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import photos from '../data/userPhotos'

  const colors = ['#FFD6E0','#E9D5FF','#FFF7EE','#FFD7C2','#FFC0CB']

export default function BalloonScreen({ next }){
  const [poppedIds, setPoppedIds] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)
  const [reveal, setReveal] = useState(null) // {src, caption, x, y}
  const [poppingId, setPoppingId] = useState(null)

  useEffect(()=>{
    if(showConfetti){
      const t = setTimeout(()=> setShowConfetti(false), 2200)
      return ()=>clearTimeout(t)
    }
  },[showConfetti])

  const handlePop = (e, id)=>{
    e.stopPropagation()
    if(poppedIds.includes(id) || poppingId!==null) return
    setPoppingId(id)
    const a = new Audio('/src/assets/pop.mp3')
    a.volume = 0.8
    a.play().catch(()=>{})

    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width/2
    const centerY = rect.top + rect.height/2

    // animate stretch then remove balloon
    setTimeout(()=>{
      setPoppedIds(prev=>{
        const nextArr = [...prev, id]
        // if all balloons have been popped, advance after a short pause
        if(nextArr.length >= balloons.length){
          setTimeout(()=>{ if(typeof next === 'function') next() }, 1800)
        }
        return nextArr
      })
      setPoppingId(null)
      setShowConfetti(true)
      // heart blast centered
      heartBlast(centerX, centerY)

      // use photos from data file (expects files in src/assets/ resolved via data file)
      const images = photos || [
        {src:'/assets/mem1.jpg', caption:"Your smile is my favorite place 💕"},
        {src:'/assets/mem2.jpg', caption:"Best moments together 🌸"},
        {src:'/assets/mem3.jpg', caption:"Road-trip memories 🚗"},
        {src:'/assets/mem4.jpg', caption:"Grace and tradition ✨"},
        {src:'/assets/mem5.jpg', caption:"Proud moments together 💫"}
      ]
      setReveal(images[id % images.length])
    }, 300)
  }

  const burstHearts = (x, y)=>{
    const root = document.getElementById('root') || document.body
    for(let i=0;i<24;i++){
      const el = document.createElement('div')
      el.textContent = '💖'
      el.style.position='fixed'
      el.style.left = `${x + (Math.random()*160 - 80)}px`
      el.style.top = `${y + (Math.random()*160 - 80)}px`
      el.style.fontSize = (12+Math.random()*30)+'px'
      el.style.opacity = '0.95'
      el.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`
      el.style.transition = 'opacity 1.6s ease, transform 1.6s ease'
      el.style.pointerEvents='none'
      root.appendChild(el)
      setTimeout(()=>{ el.style.opacity='0'; el.style.transform = 'translateY(-200px)'; }, 40)
      setTimeout(()=>{ root.removeChild(el) }, 1600)
    }
  }

  const heartBlast = (cx, cy)=>{
    const root = document.getElementById('root') || document.body
    const centerX = window.innerWidth/2
    const centerY = window.innerHeight/2
    // massive burst of hearts and sparkles centered
    for(let i=0;i<60;i++){
      const el = document.createElement('div')
      el.textContent = '💗'
      el.style.position='fixed'
      el.style.left = `${centerX}px`
      el.style.top = `${centerY}px`
      el.style.fontSize = (12+Math.random()*36)+'px'
      el.style.opacity = '1'
      el.style.transform = `translate(-50%,-50%)`
      el.style.transition = 'transform 1.6s cubic-bezier(.2,.9,.2,1), opacity 1.6s ease'
      el.style.pointerEvents='none'
      root.appendChild(el)
      // spread
      setTimeout(()=>{
        const dx = (Math.random()-0.5) * 800
        const dy = -200 - Math.random()*400
        el.style.transform = `translate(${dx}px, ${dy}px) scale(${0.9 + Math.random()*0.8})`
        el.style.opacity = '0'
      }, 40 + Math.random()*80)
      setTimeout(()=>{ if(el.parentNode) el.parentNode.removeChild(el) }, 2000)
    }
  }

  // mobile-first: five balanced balloon positions, slow gentle floating
  const balloons = [
    { id:0, color: colors[0], left: '18%', top: '14%', size: 92, z: 22 },
    { id:1, color: colors[1], left: '82%', top: '14%', size: 92, z: 24 },
    { id:2, color: colors[2], left: '50%', top: '34%', size: 110, z: 26 },
    { id:3, color: colors[3], left: '22%', top: '66%', size: 88, z: 23 },
    { id:4, color: colors[4], left: '78%', top: '66%', size: 88, z: 21 }
  ]

  return (
    <section className="w-full h-full relative bg-gradient-to-br from-rose-50 via-cream to-lavender overflow-hidden">
      <div className="absolute inset-0" style={{background:'radial-gradient(circle at 20% 10%, rgba(255,220,230,0.18), transparent)'}} />

      <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-10">
        <div className="mt-8 text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">A Balloon Surprise</h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">Tap a balloon to unveil a cherished memory</p>
        </div>
      </div>

      {balloons.map(b=> (
        <motion.div key={b.id} initial={{ y: 0 }} animate={ poppingId===b.id ? { y: -18, scaleX:[1,1.06,0.64], scaleY:[1,0.96,0.2], opacity:[1,0.6,0] } : { y: [0, -8, 0], x: [0, 6 * ((b.id%2)?1:-1), 0] } } transition={ poppingId===b.id ? { duration:0.36, ease:'easeOut' } : { repeat: Infinity, duration: 8 + (b.id*2), ease: 'easeInOut', delay: b.id * 0.4 }} style={{position:'absolute', left: b.left, top: b.top, zIndex: b.z}}>
          {!poppedIds.includes(b.id) && (
            <svg onClick={(e)=>handlePop(e,b.id)} width={b.size} height={Math.round(b.size*1.24)} viewBox="0 0 100 120" style={{cursor:'pointer', overflow:'visible'}}>
              <defs>
                <radialGradient id={`g-${b.id}`} cx="30%" cy="25%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="35%" stopColor={b.color} stopOpacity="0.95" />
                  <stop offset="100%" stopColor={shade(b.color,-12)} stopOpacity="0.98" />
                </radialGradient>
                <linearGradient id={`shine-${b.id}`} x1="0" x2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="60%" stopColor="rgba(255,255,255,0.18)" />
                </linearGradient>
              </defs>

              {/* balloon body */}
              <ellipse cx="50" cy="44" rx="34" ry="42" fill={`url(#g-${b.id})`} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              {/* glossy shine */}
              <path d="M30 20 Q40 15 55 30 Q42 25 30 20" fill={`url(#shine-${b.id})`} opacity="0.9" />
              {/* knot */}
              <path d="M50 78 C48 82 52 84 54 82 C56 80 54 78 50 78 Z" fill={shade(b.color,-10)} />
              {/* string */}
              <path d="M50 84 C52 104 48 120 50 140" stroke="#d9a8b4" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              {/* soft shadow under balloon */}
              <ellipse cx="50" cy="118" rx="22" ry="6" fill="rgba(0,0,0,0.12)" />
            </svg>
          )}
        </motion.div>
      ))}

      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
        <button onClick={next} className="px-6 py-2 rounded-full premium-button text-white">Continue</button>
      </div>

      {reveal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" />
          <motion.div initial={{ scale:0.6, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.5 }} className="reveal-card" style={{maxWidth:520}}>
            <div className="relative">
              <img src={reveal.src} alt="memory" className="w-full reveal-img rounded-lg" />
              <button onClick={()=>setReveal(null)} className="absolute top-3 right-3 glass rounded-full px-3 py-1">Close</button>
            </div>
            <div className="mt-4 text-center handwriting text-lg">{reveal.caption}</div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

function shade(hex, percent) {
  // simple shade helper: expect #RRGGBB
  try{
    const c = hex.replace('#','')
    const num = parseInt(c,16)
    let r = (num >> 16) + Math.round(255*percent/100)
    let g = ((num >> 8) & 0x00FF) + Math.round(255*percent/100)
    let b = (num & 0x0000FF) + Math.round(255*percent/100)
    r = Math.max(0,Math.min(255,r))
    g = Math.max(0,Math.min(255,g))
    b = Math.max(0,Math.min(255,b))
    return `rgb(${r},${g},${b})`
  }catch(e){return hex}
}
