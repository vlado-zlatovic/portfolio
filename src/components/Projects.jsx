import './Projects.css'

function Projects() {
  return(
    <section>
      <div className='projects-wrapper' id='projects-sec'>
        <h2>&lt;Pro<span>jects /&gt;</span></h2>
        <p>A collection of projects that I created using: HTML, CSS, JavaScript and React technologies.</p>    

        {/* SINGLE PROJECT 1 */}
        
        <div className='single-project-container'>
          <h3>&lt;Project 1 /&gt; Gaming Gear</h3>
          <div className='project-link-div'><img src="./live-link-circle.svg" alt="green circle" /><a href="https://gaming-gear-website.netlify.app/" target='_blank'>Link: https://gaming-gear-website.netlify.app/</a></div>
          <div className='project-screenshots-container'>
            <img src="./websites-screenshots/gg-website-screenshot-1.png" alt="gaming gear website screenshot" />
            <img src="./websites-screenshots/gg-website-screenshot-2.png" alt="gaming gear website screenshot" />
            <img src="./websites-screenshots/gg-website-screenshot-3.png" alt="gaming gear website screenshot" />
          </div>
          <div className='explanation-container'>
            <h3>Eplanation:</h3>
            <p>Created Website using HTML & CSS. Main layout created using display flex, layout for products created using display grid. This is a single page - informational Website with form section, created using combination of display flex and grid optimal for desktop and mobile devices.</p>
          </div>
        </div>    

        {/* SINGLE PROJECT 2 */}
        
        <div className='single-project-container'>
          <h3>&lt;Project 2 /&gt; Gaming Gear V2</h3>
          <div className='project-link-div'><img src="./live-link-circle.svg" alt="green circle" /><a href="https://gaming-gear-website.netlify.app/" target='_blank'>Link: https://gaming-gear-v2.netlify.app/</a></div>
          <div className='project-screenshots-container'>
            <img src="./websites-screenshots/gg-v2-screenshot-1.png" alt="gaming gear v2 website screenshot" />
            <img src="./websites-screenshots/gg-v2-screensthot-2.png" alt="gaming gear v2 website screenshot" />
            <img src="./websites-screenshots/gg-v2-screenshot-3.png" alt="gaming gear v2 website screenshot" />
          </div>
          <div className='explanation-container'>
            <h3>Eplanation:</h3>
            <p>Created Website using HTML, CSS & JavaScript. Main layout created with display flex. This single-page Website is optimal for desktop and mobile devices.</p>
            <p>- Navigation: I used JavaScript to handle the mobile hamburger menu, ensuring it toggles smoothly and closes when a user selects a link.</p>
            <p>- Data & DOM Manipulation: Instead of hardcoding products, I stored them as arrays of objects and built a reusable renderProducts function. This function dynamically generates the HTML cards (heading, image, and button) and appends them to the correct section of the page."</p>
          </div>
        </div>  


        {/* SINGLE PROJECT 3 */}
        
        <div className='single-project-container'>
          <h3>&lt;Project 3 /&gt; Cars Website</h3>
          <div className='project-link-div'><img src="./live-link-circle.svg" alt="green circle" /><a href="https://cars-shop-website.netlify.app/" target='_blank'>Link: https://cars-shop-website.netlify.app/</a></div>
          <div className='project-screenshots-container'>
            <img src="./websites-screenshots/bac-1.png" alt="cars website screenshot" />
            <img src="./websites-screenshots/bac-2.png" alt="cars website screenshot" />
            <img src="./websites-screenshots/bac-3.png" alt="cars website screenshot" />
            <img src="./websites-screenshots/bac-4.png" alt="cars website screenshot" />
            <img src="./websites-screenshots/bac-5.png" alt="cars website screenshot" />
            <img src="./websites-screenshots/bac-6.png" alt="cars website screenshot" />
          </div>
          <div className='explanation-container'>
            <h3>Eplanation:</h3>
            <p>Created Website using HTML, CSS & JavaScript. Main layout created with display flex. This single-page Website is optimal for desktop and mobile devices.</p>
            <p>- Navigation: I used JavaScript to handle the mobile hamburger menu, ensuring it toggles smoothly and closes when a user selects a link</p>
            <p>- Data & DOM Manipulation: Instead of hardcoding products, I stored them as arrays of objects and built a handlebars template for repeatable code.</p>
            <p>- Swiper: Using swiperjs.com for creating a responsive swiper with slides. </p>
            <p>- Light/Dark mode: Created dark mode switch button to toggle dark-mode class on click.</p>
          </div>
        </div>  


        {/* SINGLE PROJECT 4 */}
        
        <div className='single-project-container'>
          <h3>&lt;Project 4 /&gt; Electric Cars</h3>
          <div className='project-link-div'><img src="./live-link-circle.svg" alt="green circle" /><a href="https://electric-cars-website.netlify.app/" target='_blank'>Link: https://electric-cars-website.netlify.app/</a></div>
          <div className='project-screenshots-container'>
            <img src="./websites-screenshots/ec-1.png" alt="electric cars website screenshot" />
            <img src="./websites-screenshots/ec-2.png" alt="electric cars website screenshot" />
            <img src="./websites-screenshots/ec-3.png" alt="electric cars website screenshot" />
            <img src="./websites-screenshots/ec-4.png" alt="electric cars website screenshot" />
            <img src="./websites-screenshots/ec-5.png" alt="electric cars website screenshot" />
            <img src="./websites-screenshots/ec-6.png" alt="electric cars website screenshot" />
          </div>
          <div className='explanation-container'>
            <h3>Eplanation:</h3>
            <p>Created Website using HTML, CSS & JavaScript. Main layout created with display flex. This single-page Website is optimal for desktop and mobile devices.</p>
            <p>- Navigation: I used JavaScript to handle the mobile hamburger menu, ensuring it toggles smoothly and closes when a user selects a link.</p>
          </div>
        </div>  




      </div>
    </section>
  )
}


export default Projects;