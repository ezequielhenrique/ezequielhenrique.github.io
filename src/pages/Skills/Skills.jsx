import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';

import {
  SiFastapi,
  SiDjango,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiSqlite,
} from 'react-icons/si';

import './Skills.css';

function Skills() {
  const mainSkills = [
    {
      name: 'Python',
      icon: <FaPython />,
      category: 'BACKEND',
    },
    {
      name: 'FastAPI',
      icon: <SiFastapi />,
      category: 'BACKEND',
    },
    {
      name: 'Django',
      icon: <SiDjango />,
      category: 'BACKEND',
    },
    {
      name: 'React',
      icon: <FaReact />,
      category: 'FRONTEND',
    },
  ];

  const skillGroups = [
    {
      title: 'BACKEND',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'Django', icon: <SiDjango /> },
      ],
    },
    {
      title: 'FRONTEND',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML / CSS', icon: <FaHtml5 /> },
      ],
    },
    {
      title: 'DATABASE',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'SQLite', icon: <SiSqlite /> },
      ],
    },
    {
      title: 'TOOLS',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Docker', icon: <FaDocker /> },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <span className="skills-index">
          02 / SKILLS
        </span>

        <h2 className="skills-title">
          Habilidades
        </h2>
      </div>

      <div className="skills-intro">
        <h3>
          Tecnologias que utilizo para
          construir soluções.
        </h3>

        <p>
          Uma stack focada no desenvolvimento de aplicações web,
          APIs e sistemas orientados a dados.
        </p>
      </div>

      <div className="main-skills">
        {mainSkills.map((skill) => (
          <div className="main-skill-card" key={skill.name}>
            <div className="main-skill-icon">
              {skill.icon}
            </div>

            <div className="main-skill-info">
              <span className="main-skill-category">
                {skill.category}
              </span>

              <span className="main-skill-name">
                {skill.name}
              </span>
            </div>

            <span className="main-skill-arrow">
              ↗
            </span>
          </div>
        ))}
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h4 className="skill-group-title">
              {group.title}
            </h4>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-item-icon">
                    {skill.icon}
                  </span>

                  <span className="skill-item-name">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-footer">
        <span>TECH_STACK</span>
        <span>const skills = [...];</span>
      </div>
    </section>
  );
}

export default Skills;