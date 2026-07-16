import { useState } from 'react';
import Hero from './pages/Hero/Hero';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import Works from './pages/Works/Works';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import './App.css';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {

  return (
    <>
      <div className="container">
        <Header/>
        
        <main>
          <Hero/>
          <AboutMe/>
          <Skills/>
          <Works/>
          <Contact/>
        </main>

        <footer>
          <a href="https://www.linkedin.com/in/ezequielhenrique/" target='_blank' className="social-link para-M"><FaLinkedin className='social-icon'/> LinkedIn</a>
          <a href="https://github.com/ezequielhenrique/" target='_blank' className="social-link para-M"><FaGithub className='social-icon'/> Github</a>
        </footer>

      </div>
    </>
  )
}

export default App;
