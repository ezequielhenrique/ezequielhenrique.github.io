import React from "react";
import ProfilePhoto from '../../assets/profile-photo.png';
import { MdOutlineEmail } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { BsBriefcase, BsGeoAlt, BsDownload } from "react-icons/bs";
import './MainPage.css';

function MainPage() {
  return (
    <section className="main-page">

      <h1 className="main-page-title">Desenvolvedor</h1>

      <div className="main-page-container">

        {/* Card da Esquerda */}
        <div className="main-left-card">

          <img src={ProfilePhoto} alt="Foto de perfil" className="profile-img"/>
          <h2 className="profile-name">Ezequiel</h2>
          <p className="profile-info">Desenvolvedor FullStack</p>

          <div className="profile-details">
            <p><MdOutlineEmail className="social-icon"/> ezequielhenriquemelo@gmail.com</p>
            <p><BsGeoAlt className="social-icon"/> Pernambuco</p>
            <p><BsBriefcase className="social-icon"/> Full-time / Freelancer</p>
            <p><IoIosLink  className="social-icon"/> ezequielhenrique.github.io</p>
          </div>

          <div className="profile-techs">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>REACT</span>
          </div>

          <button className="dowload-cv-button">
            Download CV <BsDownload/>
          </button>
        </div>

        {/* Informações Centrais */}
        <div className="main-central-card">

          <span className="html-tag">&lt;h1&gt;</span>
          <h2 className="central-content central-title">
              Olá <br/> Eu sou <span>Ezequiel</span>, <br /> Desenvolvedor FullStack
          </h2>
          <span className="html-tag">&lt;/h1&gt;</span>

          <span className="html-tag">&lt;p&gt;</span>
            <p className="central-content central-text">
              Ajudo empresas a crescer criando experiências web modernas e eficientes. Se você busca um desenvolvedor que entrega resultados de verdade, pode contar comigo.
            </p>
          <span className="html-tag">&lt;/p&gt;</span>

          <button className="central-content central-button">
            Vamos Conversar <MdOutlineEmail className="central-button-icon"/>
          </button>
        </div>

        {/* Right Stats */}
        <div className="main-right">
          <div className="main-right-card">
            <div className="right-content">
              <p className="right-content-number">4</p>
              <p className="right-content-text">Programming <br/>Languages</p>
            </div>
            <div className="right-content">
              <p className="right-content-number">6</p>
              <p className="right-content-text">Development <br/>Tools</p>
            </div>
            <div className="right-content">
              <p className="right-content-number">8</p>
              <p className="right-content-text">Years of <br/>Experience</p>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
