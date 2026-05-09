import React, { useRef, useState, useEffect } from 'react'

export default function MusicPlayer(){
  const audioRef = useRef(null)
  const [playing,setPlaying] = useState(false)

  useEffect(()=>{
    const a = audioRef.current
    if(!a) return
    playing ? a.play() : a.pause()
  },[playing])

  return (
    <section className="space-y-3">
      <h3 className="text-2xl font-semibold">Soft Background Music</h3>
      <div className="flex items-center gap-4">
        <button onClick={()=>setPlaying(p=>!p)} className="px-4 py-2 rounded-2xl glass">
          {playing? 'Pause' : 'Play'}
        </button>
        <div className="w-40 h-10 flex items-center gap-1">
          {Array.from({length:6}).map((_,i)=> (
            <div key={i} className={`w-1.5 bg-pink-300 rounded transition-all ${playing? 'h-8':'h-3'}`} style={{animation: playing? `equalizer ${0.6 + i*0.1}s infinite` : 'none'}} />
          ))}
        </div>
      </div>
      <audio ref={audioRef} src="/src/assets/sample.mp3" loop />
      <style>{`@keyframes equalizer{0%{height:6px}50%{height:24px}100%{height:6px}}`}</style>
    </section>
  )
}
