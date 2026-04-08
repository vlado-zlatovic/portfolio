import './Hero.css';


function HeroSection() {
  





  return(
    <section>
    
        <div className="hero-wrapper">
          <img src="./anime-man-picture.webp" alt="" />
          <div className="hero-text">
            <p>Hello, my name is <span>Vlado</span> Zlatović and I am <span>&lt;Front-End Web Developer /&gt;</span> <br />Always up for learning new tech, skills and exploring new things about Web. Passionate and dedicated Developer always open to new challenges daily.</p>
            <p>My Tech Skills:</p>
            <div className="tech-container">
              <img src="./tech-logos/html-logo.png" alt="" />
              <img src="./tech-logos/css3-logo.png" alt="" />
              <img src="./tech-logos/img_js.png" alt="" />
              <img src="./tech-logos/react-logo.png" alt="" />
            </div>
          </div>
        </div>
    </section>
  )


}


export default HeroSection;