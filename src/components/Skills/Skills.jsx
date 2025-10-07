// components/Skills/Skills.js
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 80 },
    
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    
    { name: 'Laravel', level: 75 },
    { name: 'CSS', level: 90 },
    { name: 'Bootstrap', level: 80 },
    { name: 'MySQL/MariaDB', level: 70 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Skills & Technologies</h2>
        <div className="skills-grid" data-aos="fade-up" data-aos-delay="200">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;