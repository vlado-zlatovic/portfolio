import './Projects.css'

function Projects() {
  return(
    <section>
      <div className='projects-wrapper' id='projects-sec'>
        <h2>&lt;Pro<span>jects /&gt;</span></h2>
        <p>A collection of projects that I created using: HTML, CSS, JavaScript and React technologies.</p>    


        {/* SINGLE PROJECT 1 */}
        
        <div className='single-project-container'>
          <h3>&lt;Project 1 /&gt; Nike Shoes v2</h3>
          <div className='project-link-div'><img src="./live-link-circle.svg" alt="green circle" /><a href="https://nike-just-do-it-v-2.netlify.app/" target='_blank'>Link: https://nike-just-do-it-v-2.netlify.app/</a></div>
          <div className='project-screenshots-container'>
            <img src="./websites-screenshots/nike-v2-1.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-v2-2.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-v2-3.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-v2-4.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-v2-5.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-v2-6.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-v2-7.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-v2-8.png" alt="nike website screenshot" />
          </div>
          <div className='explanation-container'>
            <h3>Project Overview: Nike Web Concept:</h3>
            <p>This project is a React-based e-commerce web application inspired by Nike. Designed as a Single Page Application (SPA), it delivers a seamless user experience using HTML5, CSS3, JavaScript (ES6+), and React.js.
              <br />
              The top navigation bar and footer remain persistent across the entire site, ensuring zero full-page reloads. When browsing between pages, only the central main layout container updates dynamically.
               <br />
                <br />
                <h3>Key Technical Implementation</h3>
                <br />
              <ul>
                <li><b>Single Page Routing (react-router-dom):</b> Client-side routing is managed through react-router-dom. The main navigation links conditionally swap views inside the primary layout container without interrupting the fixed headers or footers.</li>
                <li><b>Dynamic Data Mapping using .map method:</b> The Products catalog renders shoe models dynamically from a JavaScript array of product objects. Using JavaScript's .map() method, the app iterates through the dataset and populates reusable shoe card components with distinct product data (images, model names, and pricing).</li>
                <li><b>Modular UI Architecture:</b> Built with a component-driven structure, separating global layout containers (Navbar, Footer) from view-level components to maintain clean, scalable code..</li>
              </ul>
            </p>
          </div>
        </div>    







        {/* SINGLE PROJECT 2 */}
        
        <div className='single-project-container'>
          <h3>&lt;Project 2 /&gt; Nike Shoes</h3>
          <div className='project-link-div'><img src="./live-link-circle.svg" alt="green circle" /><a href="https://nike-just-do.netlify.app/" target='_blank'>Link: https://nike-just-do.netlify.app/</a></div>
          <div className='project-screenshots-container'>
            <img src="./websites-screenshots/nike-1.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-2.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-3.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-4.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-5.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-6.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-7.png" alt="nike website screenshot" />
            <img src="./websites-screenshots/nike-8.png" alt="nike website screenshot" />
          </div>
          <div className='explanation-container'>
            <h3>Explanation:</h3>
            <p>Created a website using HTML & CSS. The main layout was built using Flexbox, while the product grid uses CSS Grid. This is a single-page informational website with a contact form, fully optimized for both desktop and mobile devices.
              <br />
              <br />
              <ul>
                <li><b>Semantic HTML Structure:</b> Organized the layout using semantic HTML elements: header, nav, main, section, footer.</li>
                <li><b>Dynamic Data Rendering:</b> Stored product cards and store locations in JavaScript arrays and dynamically injected the markup into the DOM using map(), template literals, and document.createElement().</li>
                <li><b>Interactive Navigation:</b> Implemented an event listener on the hamburger menu to toggle an .open class, allowing the mobile side menu to slide in/out and automatically close when a link is clicked.</li>
                <li><b>Scroll-Triggered Animations:</b> Used the native IntersectionObserver API in JavaScript to monitor sections with the .fade-in-section class and automatically add an .is-visible CSS class when they enter the viewport.</li>
              </ul>
            </p>
          </div>
        </div>    

        {/* SINGLE PROJECT 3 */}
        
        <div className='single-project-container'>
          <h3>&lt;Project 3 /&gt; Gaming Gear V2</h3>
          <div className='project-link-div'><img src="./live-link-circle.svg" alt="green circle" /><a href="https://gaming-gear-website.netlify.app/" target='_blank'>Link: https://gaming-gear-v2.netlify.app/</a></div>
          <div className='project-screenshots-container'>
            <img src="./websites-screenshots/gg-website-screenshot-1.png" alt="gaming gear v2 website screenshot" />
            <img src="./websites-screenshots/gg-website-screenshot-2.png" alt="gaming gear v2 website screenshot" />
            <img src="./websites-screenshots/gg-website-screenshot-3.png" alt="gaming gear v2 website screenshot" />
            <img src="./websites-screenshots/gg-v2-screenshot-1.png" alt="gaming gear v2 website screenshot" />
            <img src="./websites-screenshots/gg-v2-screensthot-2.png" alt="gaming gear v2 website screenshot" />
            <img src="./websites-screenshots/gg-v2-screenshot-3.png" alt="gaming gear v2 website screenshot" />
          </div>
          <div className='explanation-container'>
            <h3>Explanation:</h3>
            <p>Created a website using HTML & CSS. The main layout was built using Flexbox, while the product grid uses CSS Grid. This is a single-page informational website with a contact form, fully optimized for both desktop and mobile devices.
              <br /><br />
              <ul>
                <li><b>Semantic HTML Structure:</b> Organized the layout using semantic HTML elements: header, nav, main, section, footer.</li>
                <li><b>Data & DOM Manipulation</b></li>
                <li><b>Interactive Navigation</b></li>
              </ul>              
            </p>
          </div>
        </div>  


        {/* SINGLE PROJECT 4 */}
        
        <div className='single-project-container'>
          <h3>&lt;Project 4 /&gt; Cars Website</h3>
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
            <h3>Explanation:</h3>
            <p>Created a website using HTML & CSS. The main layout was built using Flexbox, while the product grid uses CSS Grid. This is a single-page informational website with a contact form, fully optimized for both desktop and mobile devices.
              <br /><br />
              <ul>
                <li><b>Semantic HTML Structure</b></li>
                <li><b>Dynamic Data Rendering</b></li>
                <li><b>Interactive Navigation</b></li>
                <li><b>Swiper Integration:</b> Integrated SwiperJS to create a fully responsive slider with smooth touch-swipe navigation.</li>
                <li><b>Light/Dark mode:</b> Implemented a theme toggle button that dynamically adds or removes a .dark-mode class to switch color schemes on click.</li>
              </ul>              
            </p>
          </div>
        </div>  


        {/* SINGLE PROJECT 5 */}
        
        <div className='single-project-container'>
          <h3>&lt;Project 5 /&gt; Electric Cars</h3>
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
            <h3>Explanation:</h3>
            <p>Created a website using HTML & CSS. The main layout was built using Flexbox, while the product grid uses CSS Grid. This is a single-page informational website with a contact form, fully optimized for both desktop and mobile devices.
              <br /><br />
              <ul>
                <li><b>Semantic HTML Structure</b></li>
                <li><b>Interactive Navigation</b></li>
              </ul>               
            </p>
          </div>
        </div>  




      </div>
    </section>
  )
}


export default Projects;