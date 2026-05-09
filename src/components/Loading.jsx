import React from 'react'

export default function Loading(){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-pink-200 flex items-center justify-center animate-pulse shadow-lg">
          <div className="text-3xl">💖</div>
        </div>
        <div className="text-sm text-gray-700">A surprise is being prepared…</div>
      </div>
    </div>
  )
}
