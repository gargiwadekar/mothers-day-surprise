import React, { useState } from 'react'
import FinalSurprise from './FinalSurprise'

export default function SurpriseButton(){
  const [show, setShow] = useState(false)

  return (
    <section className="flex justify-center">
      {show ? (
        <FinalSurprise onClose={()=>setShow(false)} />
      ) : (
        <button onClick={()=>setShow(true)} className="px-8 py-4 rounded-full text-white font-semibold premium-button shadow-2xl">Click For Final Surprise 💖</button>
      )}
    </section>
  )
}
