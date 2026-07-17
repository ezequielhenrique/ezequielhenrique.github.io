import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';


function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span className="contact-index">
          04 / CONTACT
        </span>

        <h2 className="contact-title">
          Contato
        </h2>
      </div>

      <div className="contact-content">
        <div className="contact-message">
          <span className="contact-label">
            LET'S_BUILD_SOMETHING
          </span>

          <h3>
            Vamos conversar sobre
            seu próximo projeto.
          </h3>

          <p>
            Se você tem uma ideia, projeto ou oportunidade,
            entre em contato. Estou sempre aberto a conhecer
            novos desafios e possibilidades.
          </p>

          <a
            href="mailto:ezequielhenriquemelo@gmail.com"
            className="contact-email"
          >
            ezequielhenriquemelo@gmail.com
            <span>↗</span>
          </a>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/ezequielhenrique"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-link-icon">
              <FaGithub />
            </div>

            <div className="contact-link-info">
              <span className="contact-link-label">
                GITHUB
              </span>

              <span className="contact-link-value">
                github.com/ezequielhenrique
              </span>
            </div>

            <span className="contact-link-arrow">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/ezequielhenrique"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-link-icon">
              <FaLinkedin />
            </div>

            <div className="contact-link-info">
              <span className="contact-link-label">
                LINKEDIN
              </span>

              <span className="contact-link-value">
                linkedin.com/in/ezequielhenrique
              </span>
            </div>

            <span className="contact-link-arrow">
              ↗
            </span>
          </a>

          <a
            href="mailto:ezequielhenriquemelo@gmail.com"
            className="contact-link"
          >
            <div className="contact-link-icon">
              <FaEnvelope />
            </div>

            <div className="contact-link-info">
              <span className="contact-link-label">
                EMAIL
              </span>

              <span className="contact-link-value">
                ezequielhenriquemelo@gmail.com
              </span>
            </div>

            <span className="contact-link-arrow">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="contact-footer">
        <span>OPEN_TO_OPPORTUNITIES</span>

        <span className="contact-status">
          <span className="contact-status-dot"></span>
          AVAILABLE
        </span>
      </div>
    </section>
  );
}

export default Contact;
