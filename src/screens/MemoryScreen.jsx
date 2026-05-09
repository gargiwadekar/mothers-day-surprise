import React from 'react'
import MemoryGallery from '../components/MemoryGallery'

export default function MemoryScreen({ next }){
  return (
    <section className="w-full h-full flex items-center justify-center bg-gradient-to-br from-lavender to-cream">
      <div className="max-w-4xl w-full p-6">
        <MemoryGallery />
        <div className="mt-6 text-center">
          <button onClick={next} className="px-6 py-2 rounded-full bg-pink-300 text-white">Next</button>
        </div>
      </div>
    </section>
  )
}
