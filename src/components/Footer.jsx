import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-content">

          <div className="footer-about">
            <h3>Legal First Aid</h3>
            <p>
              Helping you navigate the Cameroon Penal Code with ease and confidence.
            </p>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Rights">Know your Rights</a></li>
              <li><a href="/Topics">Legal Topics</a></li>
              <li><a href="/Experts">Contact Experts</a></li>
            </ul>
          </div>

          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>
              <a href="">Email: atehnkengmelvis@gmail.com</a>
            </p>
            <p>
              <a href="">Phone: 676276480</a>
            </p>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <img src="/images/linked.png" alt="linkedin logo" />
              <img src="/images/fbook-logo.png" alt="facebook logo" />
              <img src="/images/insta.png" alt="instagram logo" />
              <img src="/images/zapp.png" alt="whatsapp logo" />
            </div>
          </div>
        </div>

       <div className="footer-para">
        <p>© 2025 Legal First Aid. All rights reserved</p>
          <p className="disclaimer">
            The information provided on this platform is for educational purposes only and should not be considered legal advice.
          </p>
       </div>

      </section>
    </>
  )
}

export default Footer;