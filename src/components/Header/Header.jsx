import { useState } from 'react';

import './Header.css';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className='header'>
      <a href="#hero" className="portfolio-name" onClick={closeMenu}>
        <span>&lt;E/&gt;</span> EzequielHenrique
      </a>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#hero" className='header-link active' onClick={closeMenu}>Home</a>
        <a href="#about" className='header-link' onClick={closeMenu}>Sobre mim</a>
        <a href="#skills" className='header-link' onClick={closeMenu}>Skills</a>
        <a href="#works" className='header-link' onClick={closeMenu}>Projetos</a>
        <a href="#contact" className='header-link' onClick={closeMenu}>Contato</a>
      </nav>
    </header>
  )
}

export default Header;
