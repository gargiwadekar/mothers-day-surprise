import React, { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [dark,setDark] = useState(false)
  useEffect(()=>{
    document.documentElement.style.background = dark? 'linear-gradient(180deg,#0f172a,#2b2f4a)':'none'
  },[dark])
  return (
    <div className="fixed top-6 right-6 z-40">
      <button onClick={()=>setDark(d=>!d)} className="p-2 rounded-full glass">{dark? '🌙':'☀️'}</button>
    </div>
  )
}
