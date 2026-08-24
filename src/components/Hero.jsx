import './Hero.css';


function HeroSection() {
  





  return(
    <section>
    
        <div className="hero-wrapper">
          <img src="/anime-man-picture.webp" alt="guy coding" />
          <div className="hero-text">
            <p>Hello, my name is <span>Vlado Zlatović</span> and I am <span>&lt;Front-End Web Developer /&gt;</span> <br />Always up for learning new tech and skills, and exploring new things about the web. Passionate and dedicated developer, always open to new daily challenges.</p>
            <p>My Tech Skills:</p>
            <div className="tech-container">
              <img src="/tech-logos/html-logo.png" alt="html logo" />
              <img src="/tech-logos/css3-logo.png" alt="css logo" />
              <img src="/tech-logos/img_js.png" alt="javascript logo" />
              <img src="/tech-logos/react-logo.png" alt="react logo" />
            </div>
          </div>
        </div>
    </section>
  )


}


export default HeroSection;