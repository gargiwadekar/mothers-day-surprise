import React from 'react'
import Reasons from '../components/Reasons'

export default function HeroScreen({ next }){
  return (
    <section className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream to-lavender">
      <div className="max-w-4xl w-full p-6">
        <h2 className="text-3xl font-semibold text-center">Why You’re My Superhero</h2>
        <div className="mt-6">
          <Reasons />
        </div>
        <div className="mt-6 text-center">
          <button onClick={next} className="px-6 py-2 rounded-full bg-pink-300 text-white">Continue</button>
        </div>
      </div>
    </section>
  )
}
