import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import About from './components/About'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     <Navbar/>
     <main>
      <div className="container-wrapper">
        <div className='main-container'>
          <HeroSection/>
          <About/>
          <Certificates/>
          <Projects/>
          <Contact/>
        </div>
      </div>
     </main>
     <Footer/>
    </>
  )
}

export default App
