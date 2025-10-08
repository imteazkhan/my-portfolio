// components/About/About.js
import './About.css';
import CV from '../../assets/CV-imteaz-khan.pdf'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h2 className="section-title" data-aos="fade-up">About Me</h2>
            <div className="about-description" data-aos="fade-up" data-aos-delay="200">
              <p>
                I'm a passionate full-stack developer with 3+ years of experience 
                creating digital solutions that make a difference. I specialize in 
                modern web technologies and enjoy turning complex problems into 
                simple, beautiful designs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community. I believe in continuous learning and 
                staying up-to-date with the latest industry trends.
              </p>
            </div>
            
            <div className="about-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item" data-aos="zoom-in" data-aos-delay="500">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item" data-aos="zoom-in" data-aos-delay="600">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item" data-aos="zoom-in" data-aos-delay="700">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="about-cta" data-aos="fade-up" data-aos-delay="800">
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
              <a href={CV} className="btn btn-secondary" download="CV-imteaz-khan.pdf">
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="about-image" data-aos="fade-left" data-aos-delay="300">
            <div className="image-container">
              <div className="main-image">
                {/* Replace with your actual image */}
                <div className="image-placeholder">
                  <span>Your Photo</span>
                </div>
              </div>
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="experience-section" data-aos="fade-up" data-aos-delay="500">
          <h3 className="experience-title">My Journey</h3>
          <div className="timeline">
            <div className="timeline-item" data-aos="fade-right" data-aos-delay="600">
              {/* <div className="timeline-date">2022 - Present</div> */}
              <div className="timeline-content">
                <h4>Senior Frontend Developer</h4>
                <p>Tech Company Inc.</p>
                <p>Leading frontend development for multiple client projects using React and TypeScript.</p>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-left" data-aos-delay="700">
              {/* <div className="timeline-date">2020 - 2022</div> */}
              <div className="timeline-content">
                <h4>Full Stack Developer</h4>
                <p>Startup XYZ</p>
                <p>Developed and maintained web applications using MERN stack.</p>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-right" data-aos-delay="800">
              <div className="timeline-date">2024 - 2025</div>
              <div className="timeline-content">
                <h4>Junior Developer</h4>
                <p>IsDB-BISAW</p>
                <p>Started my career building responsive websites and learning modern frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;