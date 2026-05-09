import React, { useEffect, useState } from 'react'

export default function Countdown(){
  const target = new Date(new Date().getFullYear(),4,10) // May 10 as example
  const [t,setT] = useState('')
  useEffect(()=>{
    const id = setInterval(()=>{
      const diff = target - new Date()
      if(diff<=0){ setT('Happy Mother\'s Day!'); clearInterval(id); return }
      const d = Math.floor(diff/86400000)
      const h = Math.floor((diff%86400000)/3600000)
      const m = Math.floor((diff%3600000)/60000)
      setT(`${d}d ${h}h ${m}m`)
    },1000)
    return ()=>clearInterval(id)
  },[])
  return (
    <div className="fixed left-6 bottom-6 glass p-3 rounded-xl">Countdown: <span className="font-semibold">{t}</span></div>
  )
}
