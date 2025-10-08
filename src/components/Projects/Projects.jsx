// components/Projects/Projects.js
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: 'https://github.com/asamamun/Family-Haat-Bazar',
      demo: 'https://coders64.xyz/projects/shopease/',
      image: '../../assets/shopease.png'
    },
    {
      id: 2,
      title: 'HR Management App',
      description: 'A collaborative HR management application with real-time updates',
      technologies: ['Laravel', 'Blade', 'MySQL', 'PHP'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Car Rental App',
      description: 'A responsive car rental application with car information and booking features',
      technologies: ['React', 'API', 'PHP', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 150)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">GitHub</a>
                  <a href={project.demo} className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;