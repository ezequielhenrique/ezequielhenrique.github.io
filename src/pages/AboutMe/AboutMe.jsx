import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <span className="about-index">01 / ABOUT ME</span>

        <h2 className="about-title">
          Sobre mim
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Sou estudante de Engenharia da Computação e desenvolvedor Full Stack,
            com foco na construção de APIs, automações e aplicações web.
          </p>

          <p>
            Trabalho principalmente com Python e tecnologias como FastAPI,
            Django, React e bancos de dados relacionais, buscando criar soluções
            funcionais, bem estruturadas e capazes de resolver problemas reais.
          </p>
        </div>

        <div className="about-details">
          <div className="about-highlight">
            <span className="about-highlight-label">
              CURRENT_FOCUS
            </span>

            <span className="about-highlight-value">
              Full Stack Development
            </span>
          </div>

          <div className="about-highlight">
            <span className="about-highlight-label">
              MAIN_STACK
            </span>

            <span className="about-highlight-value">
              Python · React · SQL
            </span>
          </div>

          <div className="about-highlight">
            <span className="about-highlight-label">
              EDUCATION
            </span>

            <span className="about-highlight-value">
              Engenharia da Computação
            </span>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <span>UFRPE</span>
        <span>building useful software</span>
      </div>
    </section>
  );
}

export default AboutMe;
