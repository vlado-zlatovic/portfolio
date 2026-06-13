import { useState } from 'react';
import './Navbar.css';


function Navbar() {
  
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () =>{
  setIsOpen(!isOpen);
}



return (
  <header>
    <div className="container-wrapper">
      <div className="header-wrapper">
        <div className="logo">
          <a href="">&lt;Vlado <span>Zlatović /&gt;</span>
            </a>
        </div>

  {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>



        <nav className={isOpen ? 'active' : ''}>
          <div className='logo-text'>&lt;Vlado <span>Zlatović /&gt;</span></div>
          <ul>
            <li><a href="#" onClick={()=> setIsOpen(false)}>Home</a></li>
            <li><a href="#about-sec" onClick={()=> setIsOpen(false)}>About</a></li>
            <li><a href="#certificates-sec" onClick={()=> setIsOpen(false)}>Certificates</a></li>
            <li><a href="#projects-sec" onClick={()=> setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact-sec" onClick={()=> setIsOpen(false)}>Contact</a></li>
            <li><span className='cv-link'><a href="./CV-en.pdf" download={'CV-en.pdf'} style={{color: 'var(--purple-clr)'}}>Download CV</a></span></li>
          </ul>
          {/* Mobile Contact Button */}
          <a href="#contact-sec" onClick={() => setIsOpen(false)} className='contact-btn mobile-btn'>
              Contact Me
            </a>
          <div className='socials-container'>
            <a href=""><img src="/socials-icons/github-brands-solid-full.svg" alt="" /></a>
            <a href=""><img src="/socials-icons/linkedin-brands-solid-full.svg" alt="" /></a>
          </div>
        </nav>
      {/* Desktop Contact Button */}
          <a href="#contact-sec" className='contact-btn desktop-btn'>
            Contact Me
          </a>
        </div>
    </div>
  </header>
)

}


export default Navbar;