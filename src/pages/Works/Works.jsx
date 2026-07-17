import { useState } from 'react';

import ProjectCard from '../../components/ProjectCard/ProjectCard';

import geocriterioImage from '../../assets/projects/geocriterio.png';
import emprestimoImage from '../../assets/projects/emprestimo.png';
import flappyBirdImage from '../../assets/projects/flappy-bird.png';
import calculadoraImage from '../../assets/projects/calculadora.png';
import quadroImage from '../../assets/projects/quadro.png';
import decodificadorImage from '../../assets/projects/decodificador.png';
import page404Image from '../../assets/projects/page-404.png';

import './Works.css';

function Works() {
  const projects = [
    {
      id: 1,
      title: 'Geo Critério',
      category: 'GEOSPATIAL ANALYSIS / PYTHON',
      description:
        'Plataforma web para análise multicritério e visualização interativa de mapas de risco de inundação com dados geoespaciais.',
      image: geocriterioImage,
      technologies: ['Python', 'Flask', 'Rasterio', 'GeoPandas', 'Leaflet'],
      github: 'https://github.com/ezequielhenrique/webapp-risco-inundacao',
      demo: null,
    },
    {
      id: 2,
      title: 'Aprovação de Empréstimos',
      category: 'MACHINE LEARNING / PYTHON',
      description:
        'Neste projeto, utilizei diferentes algoritmos de Machine Learning para prever a aprovação empréstimos com base em dados históricos.',
      image: emprestimoImage,
      technologies: ['Python', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/ezequielhenrique/curso-machine-learning/blob/main/classificacao_aprovacao_emprestimo.ipynb',
      demo: null,
    },
    {
      id: 3,
      title: 'Flappy Bird',
      category: 'FRONTEND / JAVASCRIPT',
      description:
        'Clone do clássico jogo Flappy Bird, controle um pássaro que salta ao clicar, desvie de obstáculos dinâmicos e tente alcançar a maior pontuação possível!',
      image: flappyBirdImage,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ezequielhenrique/Flappy-Bird',
      demo: 'https://ezequielhenrique.github.io/Flappy-Bird/',
    },
    {
      id: 4,
      title: 'Calculadora de Juros Compostos',
      category: 'FRONTEND / JAVASCRIPT',
      description:
        'Página web que permite o cálculo de juros compostos com parâmetros personalizados, como valor inicial, taxa de juros e período.',
      image: calculadoraImage,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ezequielhenrique/calculadora-juros-compostos',
      demo: 'https://ezequielhenrique.github.io/calculadora-juros-compostos/',
    },
    {
      id: 5,
      title: 'Etch-a-sketch',
      category: 'FRONTEND / JAVASCRIPT',
      description:
        'Quadro de desenhos interativo que permite ao usuário desenhar no quadro usando o mouse, com opções para limpar o quadro e fazer dowload como imagem.',
      image: quadroImage,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ezequielhenrique/etch-a-sketch',
      demo: 'https://ezequielhenrique.github.io/etch-a-sketch/',
    },
    {
      id: 6,
      title: 'Decodificador de Textos',
      category: 'FRONTEND / JAVASCRIPT',
      description:
        'Página web que criptografa e descriptografa textos através da conversão de letras para palavras específicas.',
      image: decodificadorImage,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ezequielhenrique/decodificador-de-textos',
      demo: 'https://ezequielhenrique.github.io/decodificador-de-textos/',
    },
    {
      id: 7,
      title: 'Template página 404',
      category: 'FRONTEND / JAVASCRIPT',
      description:
        'Template de página de erro 404 responsivo desenvolvido com HTML, CSS e JavaScript.',
      image: page404Image,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ezequielhenrique/template-pagina-404',
      demo: 'https://ezequielhenrique.github.io/template-pagina-404/',
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setCurrentProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  return (
    <section className="works" id="works">
      <div className="works-header">
        <span className="works-index">
          03 / WORKS
        </span>

        <h2 className="works-title">
          Projetos
        </h2>
      </div>

      <div className="works-intro">
        <h3>
          Alguns projetos que
          desenvolvi.
        </h3>

        <p>
          Uma seleção de projetos acadêmicos, pessoais e experimentais
          desenvolvidos para aplicar conceitos e resolver problemas reais.
        </p>
      </div>

      <div className="works-carousel">
        <ProjectCard
          project={projects[currentProject]}
        />

        <div className="works-navigation">
          <button
            className="works-navigation-button"
            onClick={previousProject}
            aria-label="Projeto anterior"
          >
            ←
          </button>

          <span className="works-counter">
            <span>
              {String(currentProject + 1).padStart(2, '0')}
            </span>

            <span className="works-counter-separator">
              /
            </span>

            <span>
              {String(projects.length).padStart(2, '0')}
            </span>
          </span>

          <button
            className="works-navigation-button"
            onClick={nextProject}
            aria-label="Próximo projeto"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
