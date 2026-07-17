import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a
          href="#hero"
          className="footer-logo"
        >
          <span>&lt;E/&gt;</span>
          EzequielHenrique
        </a>

        <p className="footer-description">
          Desenvolvedor Full Stack focado em construir
          aplicações web, APIs e automações.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/ezequielhenrique"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ezequielhenrique"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Ezequiel Henrique
        </span>

        <span>
          built_with &lt;code /&gt;
        </span>

        <a href="#hero">
          BACK_TO_TOP ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
