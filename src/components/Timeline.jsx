import React from 'react'

const steps = [
  {title:'My childhood', desc:'You celebrated each small win.'},
  {title:'School', desc:'You cheered every milestone.'},
  {title:'College', desc:'Your guidance kept me steady.'},
  {title:'Today', desc:'You remain my anchor and light.'}
]

export default function Timeline(){
  return (
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold">Our Journey</h3>
      <div className="relative pl-8">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-200" />
        <div className="space-y-8">
          {steps.map((s,i)=> (
            <div key={i} className="relative">
              <div className="absolute -left-6 top-1 w-10 h-10 rounded-full bg-rose-200 flex items-center justify-center">🌸</div>
              <div className="bg-white/60 glass p-4 rounded-xl">
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm text-gray-600">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
