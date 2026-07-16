import { useState } from 'react';

import './Header.css';

function Header() {

  return (
    <header>
      <a href="#hero" className="portfolio-name">
        <span>&lt;E/&gt;</span> EzequielHenrique
      </a>

      <nav className='header-nav'>
        <a href="#home" className='header-link active'>Home</a>
        <a href="#about" className='header-link'>Sobre mim</a>
        <a href="#skills" className='header-link'>Skills</a>
        <a href="#works" className='header-link'>Projetos</a>
        <a href="#contact" className='header-link'>Contato</a>
      </nav>
    </header>
  )
}

export default Header;
