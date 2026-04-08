import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './Hero'

function App() {
  

  return (
    <>
     <Navbar/>
     <main>
      <div className="container-wrapper">
        <div className='main-container'>
          <HeroSection/>
        </div>
      </div>
     </main>
    </>
  )
}

export default App
