import './Footer.css'

function Footer() {
  


  return (
    <footer>
      <div className='footer-wrapper'>
        <p>Created by: <a href="https://github.com/vlado-zlatovic" target='_blank'>&lt;Vlado <span>Zlatović /&gt;</span></a></p>
        <div className='footer-socials'>
            <p>Socials:</p>
            <a href="https://github.com/vlado-zlatovic" target='_blank'><img src="/socials-icons/github-brands-solid-full.svg" alt="" /></a>
            <a href=""><img src="/socials-icons/linkedin-brands-solid-full.svg" alt="" /></a>
        </div>
      </div>
    </footer>
  )

}


export default Footer;