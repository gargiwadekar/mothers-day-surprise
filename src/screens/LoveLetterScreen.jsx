import React from 'react'
import LoveLetter from '../components/LoveLetter'

export default function LoveLetterScreen({ next }){
  return (
    <section className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream to-rosepink">
      <div className="max-w-3xl w-full p-6">
        <LoveLetter />
        <div className="mt-6 text-center">
          <button onClick={next} className="px-6 py-2 rounded-full bg-pink-300 text-white">Continue</button>
        </div>
      </div>
    </section>
  )
}
