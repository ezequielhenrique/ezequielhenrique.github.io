import './Hero.css';
import profileImage from '../../assets/profile-cropped.png'

function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <span className="hero-overline">
          // SOFTWARE DEVELOPER
        </span>

        <h1 className="hero-title">
          Olá, eu sou
          <span>Ezequiel Henrique</span>
        </h1>

        <h2 className="hero-subtitle">
          Desenvolvedor Full Stack
        </h2>

        <p className="hero-description">
          Desenvolvo APIs, automações e aplicações web utilizando Python,
          FastAPI, Django e React.
        </p>

        <div className="hero-actions">
          <button
            className="hero-button hero-button-primary"
            onClick={() => scrollToSection('works')}
          >
            Ver projetos
            <span>↗</span>
          </button>

          <button
            className="hero-button hero-button-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Entre em contato
            <span>↗</span>
          </button>
        </div>

        <div className="hero-technologies">
          <span>Python</span>
          <span>·</span>
          <span>FastAPI</span>
          <span>·</span>
          <span>Django</span>
          <span>·</span>
          <span>React</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-label">
          <span className="hero-status-dot"></span>
          <span>available_for_work</span>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-background"></div>

          <img
            src={profileImage}
            alt="Ezequiel Henrique"
            className="hero-image"
          />

          <span className="hero-code-decoration code-top">
            {'<dev />'}
          </span>

          <span className="hero-code-decoration code-bottom">
            01 / 01
          </span>
        </div>

        <div className="hero-visual-footer">
          <span>based_in_brazil</span>
          <span>+</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;