import React from 'react'

const reasons = [
  'Your hugs heal everything',
  'You always support me',
  'You make every place feel like home',
  'You are my guiding star'
]

export default function Reasons(){
  return (
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Reasons I Love You</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reasons.map((r,idx)=> (
          <div key={idx} className="p-6 polaroid rounded-2xl hover:scale-105 transition-transform cursor-pointer">
            <div className="text-lg font-medium">{r}</div>
            <div className="mt-2 text-sm text-gray-600">You make each day brighter with your love.</div>
          </div>
        ))}
      </div>
    </section>
  )
}
