import { useState } from 'react';
import Hero from './pages/Hero/Hero';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import Works from './pages/Works/Works';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import './App.css';

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

      </div>
    </>
  )
}

export default App;
