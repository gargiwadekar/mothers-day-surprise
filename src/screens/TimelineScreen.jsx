import React from 'react'
import Timeline from '../components/Timeline'

export default function TimelineScreen({ next }){
  return (
    <section className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100">
      <div className="max-w-4xl w-full p-6">
        <Timeline />
        <div className="mt-6 text-center">
          <button onClick={next} className="px-6 py-2 rounded-full bg-pink-300 text-white">Next</button>
        </div>
      </div>
    </section>
  )
}
