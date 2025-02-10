import React from 'react';
import { Card, Typography } from 'antd';
const { Title, Paragraph } = Typography;

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      style={{
        padding: '100px 20px',
        textAlign: 'center',
        backgroundColor: 'transparent', 
        color: '#FFFFFF', 
      }}
    >
      <Title
        level={2}
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: '35px',
          color: '#FFFFFF',
          marginBottom: '40px',
        }}
      >
        Experiências Profissionais
      </Title>

      {/* Primeira experiência */}
      <Card
        style={{
          maxWidth: '600px',
          margin: '0 auto 20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
        }}
      >
        <div
          style={{
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
          }}
        >
          {/* Logo da empresa */}
          <img
            src="/assets/DM.png" 
            alt="Logo DM"
            style={{ width: '50px', height: '50px' }} 
          />
          {/* Título da posição */}
          <Title
            level={4}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '20px',
              color: '#FFFFFF',
              marginTop: '0', 
              marginBottom: '0', 
            }}
          >
            Desenvolvedora - Nível I
          </Title>
        </div>
        <Paragraph style={{ color: '#FFFFFF', fontSize: '14px' }}>
          Atual (2025 - Presente)
        </Paragraph>
        <Paragraph style={{ color: '#FFFFFF', fontSize: '14px' }}>
          Sou Desenvolvedora de nível I, na empresa DM, onde minhas principais obrigações são realizar o desenvolvimento do Bot de atendimento (WhatsApp e Widget), através de uma plataforma low code (Zenvia) e também desenvolver a plataforma em que os colaboradores fazem acesso para o atendimento humano (via chat ou telefone), usando a tecnologia React/Typescript/Ant Design, faço também a manutenção de API's em C#.
        </Paragraph>
      </Card>

      {/* Segunda experiência */}
      <Card
        style={{
          maxWidth: '600px',
          margin: '0 auto 20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          border: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Logo da empresa */}
          <img
            src="/assets/DM.png" 
            alt="Logo DM"
            style={{ width: '50px', height: '50px' }}
          />
          {/* Título da posição */}
          <Title
            level={4}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '20px',
              color: '#FFFFFF',
              marginTop: '0',
              marginBottom: '0',
            }}
          >
            Assistente de Desenvolvimento - Nível I
          </Title>
        </div>
        <Paragraph style={{ color: '#FFFFFF', fontSize: '14px' }}>
          Anterior (2022 - 2025)
        </Paragraph>
        <Paragraph style={{ color: '#FFFFFF', fontSize: '14px' }}>
          Sou assistente de desenvolvimento de nível I, na empresa DM, onde minhas principais obrigações são realizar o desenvolvimento do Bot de atendimento (WhatsApp e Widget) e também desenvolver a plataforma em que os colaboradores fazem acesso para o atendimento humano (via chat ou telefone).
        </Paragraph>
      </Card>
    </div>
  );
};

export default Experience;