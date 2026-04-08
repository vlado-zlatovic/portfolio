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
            <li><a href="" onClick={()=> setIsOpen(false)}>Home</a></li>
            <li><a href="" onClick={()=> setIsOpen(false)}>About</a></li>
            <li><a href="" onClick={()=> setIsOpen(false)}>Certificates</a></li>
            <li><a href="" onClick={()=> setIsOpen(false)}>Projects</a></li>
            <li><a href="" onClick={()=> setIsOpen(false)}>Contact</a></li>
          </ul>
          <button className='contact-btn' onClick={()=> setIsOpen(false)}>Contact Me</button>
          <div className='socials-container'>
            <a href=""><img src="./socials-icons/github-brands-solid-full.svg" alt="" /></a>
            <a href=""><img src="./socials-icons/instagram-brands-solid-full.svg" alt="" /></a>
            <a href=""><img src="./socials-icons/linkedin-brands-solid-full.svg" alt="" /></a>
            <a href=""><img src="./socials-icons/x-twitter-brands-solid-full.svg" alt="" /></a>
          </div>
        </nav>
        <button className='nav-cta'>Contact Me</button>
        </div>
    </div>
  </header>
)

}


export default Navbar;