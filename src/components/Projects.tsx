import React from 'react';
import { Card, Carousel } from 'antd'; 

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portifólio',
      description: 'Descrição: Portifólio de Bruna Marcelle',
      link: 'https://github.com/seu-usuario/projeto-1',
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
              bodyStyle={{ padding: '16px' }}
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