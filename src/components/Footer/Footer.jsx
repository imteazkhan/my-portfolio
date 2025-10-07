// components/Footer/Footer.js
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content" data-aos="fade-up">
          <p data-aos="fade-up" data-aos-delay="200">
            &copy; {currentYear} Imteaz Khan. All rights reserved.
          </p>
          <div className="social-links" data-aos="fade-up" data-aos-delay="400">
            <a href="https://github.com/imteazkhan" aria-label="GitHub">GitHub</a>
            <a href="https://www.linkedin.com/in/imteaz-khan/" aria-label="LinkedIn">LinkedIn</a>
            {/* <a href="https://twitter.com" aria-label="Twitter">Twitter</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;