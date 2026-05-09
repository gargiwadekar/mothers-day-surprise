import React from 'react'
import Tilt from 'react-parallax-tilt'
import photos from '../data/userPhotos'

export default function MemoryGallery(){
  return (
    <section className="space-y-6">
      <h3 className="text-3xl font-semibold text-center">Memories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((p,idx)=> (
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={false} key={idx} className="polaroid p-3">
            <div className="overflow-hidden rounded-lg shadow-lg" style={{minHeight:180}}>
              <img src={p.src} alt={p.caption} className="w-full h-52 sm:h-56 md:h-64 object-contain transform transition-transform duration-700 hover:scale-102" style={{imageRendering:'auto'}} />
            </div>
            <div className="mt-3 text-center font-medium">{p.caption}</div>
          </Tilt>
        ))}
      </div>
    </section>
  )
}
