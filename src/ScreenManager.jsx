import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './screens/LoadingScreen'
import IntroScreen from './screens/IntroScreen'
import BalloonScreen from './screens/BalloonScreen'
import PhotoRevealScreen from './screens/PhotoRevealScreen'
import LoveLetterScreen from './screens/LoveLetterScreen'
import MemoryScreen from './screens/MemoryScreen'
import TimelineScreen from './screens/TimelineScreen'
import HeroScreen from './screens/HeroScreen'
import CelebrationScreen from './screens/CelebrationScreen'
import EndingScreen from './screens/EndingScreen'

const screens = [
  { id: 'loading', comp: LoadingScreen },
  { id: 'intro', comp: IntroScreen },
  { id: 'balloons', comp: BalloonScreen },
  { id: 'photo', comp: PhotoRevealScreen },
  { id: 'letter', comp: LoveLetterScreen },
  { id: 'memories', comp: MemoryScreen },
  { id: 'timeline', comp: TimelineScreen },
  { id: 'hero', comp: HeroScreen },
  { id: 'celebration', comp: CelebrationScreen },
  { id: 'ending', comp: EndingScreen }
]

export default function ScreenManager(){
  const [index,setIndex] = useState(0)

  const Next = ()=> setIndex(i => Math.min(i+1, screens.length-1))
  const Prev = ()=> setIndex(i => Math.max(i-1, 0))

  const ScreenComp = screens[index].comp

  return (
    <div className="w-full h-screen relative">
      <AnimatePresence mode="wait">
        <motion.div key={screens[index].id} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="absolute inset-0">
          <ScreenComp next={Next} prev={Prev} index={index} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-6 left-6 z-40">
        <div className="text-sm text-white/90">Scene {index+1}/{screens.length}</div>
      </div>
      <div className="absolute right-6 bottom-6 z-40 flex gap-3">
        <button onClick={Prev} className="glass p-2 rounded-md">◀</button>
        <button onClick={Next} className="glass p-2 rounded-md">▶</button>
      </div>
    </div>
  )
}
