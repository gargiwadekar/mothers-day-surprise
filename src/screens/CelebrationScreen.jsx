import React from 'react'
import SurpriseButton from '../components/SurpriseButton'
import Confetti from 'react-confetti'

export default function CelebrationScreen({ next }){
  return (
    <section className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Final Surprise</h2>
        <p className="mt-2 text-gray-600">Click the button for the big moment</p>
        <div className="mt-8">
          <SurpriseButton />
        </div>
        <div className="mt-6">
          <button onClick={next} className="px-6 py-2 rounded-full glass">Continue</button>
        </div>
      </div>
    </section>
  )
}
