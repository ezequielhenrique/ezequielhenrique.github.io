import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './Header.css';

function Header() {

  return (
    <header>
      <h1 className="h2-M portfolio-name"><span>&lt;E/&gt;</span> EzequielHenrique</h1>

      <nav>
        <a href="#home" className='menu-M'>Home</a>
        <a href="#blogs" className='menu-M'>Blogs</a>
        <a href="https://www.linkedin.com/in/ezequielhenrique/" target='_blank' className="social-link para-M"><FaLinkedin className='social-icon'/> LinkedIn</a>
        <a href="https://github.com/ezequielhenrique/" target='_blank' className="social-link para-M"><FaGithub className='social-icon'/> Github</a>
      </nav>
    </header>
  )
}

export default Header;
