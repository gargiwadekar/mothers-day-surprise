import React, { useState, useRef } from 'react'

export default function VoiceMessage(){
  const [file, setFile] = useState(null)
  const audioRef = useRef()

  return (
    <section className="space-y-3">
      <h3 className="text-2xl font-semibold">Voice Message</h3>
      <div className="flex items-center gap-4">
        <input type="file" accept="audio/*" onChange={e=>{setFile(e.target.files?.[0]); if(audioRef.current) audioRef.current.load()}} />
        {file && <div className="text-sm">{file.name}</div>}
      </div>
      {file && (
        <audio controls ref={audioRef} className="mt-2">
          <source src={URL.createObjectURL(file)} />
        </audio>
      )}
    </section>
  )
}
