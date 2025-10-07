// components/Hero/Hero.js
import './Hero.css';
import img from '../../assets/img01.jpg'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content" data-aos="fade-right">
                    <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
                        Hi, I'm <span className="highlight">Imteaz Khan</span>
                    </h1>
                    <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">Full Stack Developer</h2>
                    <p className="hero-description" data-aos="fade-up" data-aos-delay="600">
                        I create beautiful and functional web applications using modern technologies.
                        Passionate about clean code and user experience.
                    </p>
                    <div className="hero-buttons" data-aos="fade-up" data-aos-delay="800">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </div>
                <div className="hero-image" data-aos="fade-left" data-aos-delay="300">
                    <div className="image-placeholder">
                        {/* Replace with your image */}
                        {/* <span>Your Photo</span> */}
                        <img
                            src={img}
                            alt="Imteaz Khan - Full Stack Developer"
                            className="hero-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;