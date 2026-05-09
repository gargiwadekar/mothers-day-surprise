import React, { useState, useEffect } from 'react'

const quotes = [
  'A mother is she who can take the place of all others but whose place no one else can take.',
  'All that I am, or hope to be, I owe to my angel mother.',
  'Mom: a title just above queen.'
]

export default function Quotes(){
  const [i,setI] = useState(0)
  useEffect(()=>{ const t=setInterval(()=>setI(v=> (v+1)%quotes.length),4000); return ()=>clearInterval(t) },[])
  return (
    <section className="space-y-2">
      <h3 className="text-2xl font-semibold">Quotes</h3>
      <div className="p-4 polaroid rounded-xl handwriting">"{quotes[i]}"</div>
    </section>
  )
}
