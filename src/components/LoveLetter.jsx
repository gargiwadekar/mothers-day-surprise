import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function LoveLetter(){
  const [open, setOpen] = useState(false)
  const message = `Dear Mom,\n\nThank you for every hug, every lesson, and every gentle word. Your sacrifices shaped my world and your love is my home. I love you more each day.\n\nForever your daughter.`

  return (
    <section className="flex flex-col items-center gap-6">
      <h3 className="text-2xl font-semibold">A Letter for Mom</h3>
      <div className="relative w-full max-w-md">
        <motion.div initial={{ scale:1 }} animate={open?{ scale:1.02 }:{}} transition={{ duration:0.5 }} className="w-full rounded-xl glass overflow-hidden shadow-2xl">
          {/* envelope flap */}
          <motion.div initial={{ rotateX:0 }} animate={open?{ rotateX:-170 }:{ rotateX:0 }} transition={{ duration:0.7 }} style={{transformOrigin:'top center'}} className="w-full h-20 bg-gradient-to-tr from-pink-200 to-rose-100 flex items-center justify-center">
            <div className="text-lg">✉️</div>
          </motion.div>

          <div className="p-6 bg-white/80" onClick={()=>setOpen(true)}>
            {!open && <div className="text-sm handwriting text-gray-700">Tap to open the envelope and read a heartfelt message...</div>}

            {open && (
              <div className="pt-2 handwriting text-gray-800">
                <TypeAnimation sequence={[message]} speed={30} wrapper="div" cursor={false} />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
