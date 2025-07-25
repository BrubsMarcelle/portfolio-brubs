import React from 'react';
import { Card, Carousel } from 'antd'; 

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfólio',
      description: 'Descrição: Este é um projeto de portfólio desenvolvido com React, Ant Design e TypeScript. O objetivo deste projeto é apresentar informações profissionais, projetos e habilidades de forma visualmente atraente e responsiva.',
      link: 'https://github.com/BrubsMarcelle/portifolio-brubs',
    },
    {
      title: 'To-do List API',
      description: 'Descrição: Este é um projeto feito em Python, para testar meus conhecimentos iniciais na linguagem, feito em FastAPI, modularizado, com test (pytest)',
      link: 'https://github.com/BrubsMarcelle/to-do-list',
    },
    {
      title: 'Livraria - Blazor',
      description: 'Descrição: Este é um projeto de livraria feito em C# (.Net 8), fazendo um CRUD de cadastro de livros, edição e deletar livros, usando blazor como frontend e SQLLite como banco de dados',
      link: 'https://github.com/BrubsMarcelle/Livraria',
    },
    {
      title: 'Assistente de metas - HTML / CSS / JAVASCRIPT',
      description: 'Descrição: Projeto realizado no NLW - Nivel iniciante da Rocketseat, usando HTML, CSS e JavaScript, alem de uma IA (Gemini) para fazer a busca e resposta das perguntas do usuário',
      link: 'https://github.com/BrubsMarcelle/NLW',
    },
  ];

  return (
    <div
      id="projects"
      style={{ padding: '60px 20px', textAlign: 'center' }}
    >
      {/* Título */}
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: '35px',
          color: '#FFFFFF',
          marginBottom: '40px',
        }}
      >
        Projetos
      </h2>

      {/* Carrossel */}
      <Carousel
        autoplay={false} 
        dots={false} 
        arrows 
        style={{
          maxWidth: '800px', 
          margin: '0 auto', 
          position: 'relative', 
        }}
      >
        {projects.map((project, index) => (
          <div key={index}>
            <Card
              title={project.title}
              hoverable
              style={{
                width: '100%',
                maxWidth: '350px',
                margin: 'auto',
                padding: '16px',
              }}
              actions={[
                <a href={project.link} target="_blank" rel="noopener noreferrer" key="github">
                  Ver no GitHub
                </a>,
              ]}
            >
              <p>{project.description}</p>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;