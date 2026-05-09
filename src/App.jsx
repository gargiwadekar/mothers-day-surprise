import React from 'react'
import ScreenManager from './ScreenManager'
import ThemeToggle from './components/ThemeToggle'
import Footer from './components/Footer'
import MusicController from './components/MusicController'

export default function App(){
  return (
    <div className="min-h-screen text-gray-800 overflow-hidden">
      <MusicController />
      <ThemeToggle />
      <ScreenManager />
      <Footer />
    </div>
  )
}
