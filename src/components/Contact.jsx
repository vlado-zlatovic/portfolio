import './Contact.css'

function Contact() {
  
  return(
    <section className='contact-wrapper' id='contact-sec'>
      <h2>&lt;Contact <span>Me /&gt;</span></h2>
<form
  action="https://formspree.io/f/maqzpanv"
  method="POST"
>
  <label>Your email:</label>
  <input type="email" name="email"/>
  <label>Your message: </label>
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
<div className='mail-container'>
  <p>Or contact me via email: <a href="mailto:zlatovicvlado99@gmail.com">zlatovicvlado99@gmail.com</a></p>
  <img src="./socials-icons/mail-icon.svg" alt="" />
</div>

    </section>
  )
}


export default Contact;