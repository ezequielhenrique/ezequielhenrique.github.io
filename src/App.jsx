import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import MainPage from './pages/MainPage/MainPage'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './App.css';

function App() {

  return (
    <>
      <div className="container">
        <header>
          <h1 className="portfolio-name"><span>&lt;E/&gt;</span> EzequielHenrique</h1>

          <nav>
            <a href="#home" className='page-link'>Home</a>
            <a href="#blogs" className='page-link'>Blogs</a>
            <a href="https://www.linkedin.com/in/ezequielhenrique/" target='_blank' className="social-link"><FaLinkedin className='social-icon'/> LinkedIn</a>
            <a href="https://github.com/ezequielhenrique/" target='_blank' className="social-link"><FaGithub className='social-icon'/> Github</a>
          </nav>
        </header>

        <main>
          <MainPage/>
        </main>
      </div>
    </>
  )
}

export default App;
