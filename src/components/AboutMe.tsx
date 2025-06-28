import React from 'react';
import { Avatar, Button } from 'antd';
const imgAvatar = '/assets/ChibiBruna.png'

const AboutMe: React.FC = () => {
  return (
    <div id="about" style={{ padding: '100px 20px', textAlign: 'center' }}>
      <Avatar
        size={150}
        src={imgAvatar}
        style={{ margin: '20px auto', display: 'block' }}
      />
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: '36px',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#FFFFFF'
        }}
      >
        Universo do Frontend! 
      </h2>
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 300,
          fontSize: '18px',
          color: '#FFFFFF',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        Sou desenvolvedora full-stack, com foco no frontend, com experiência de mais de 3 anos na área.
        Cursando o penúltimo ano de Ciência da Computação, com previsão de finalização em setembro de 2025.
      </p>
      {/* Botões lado a lado */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button
          type="default"
          style={{
            backgroundColor: '#FFFFFF', 
            borderColor: '#9A33FF', 
            color: '#9A33FF', 
            transition: 'all 0.3s ease', 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#9A33FF'; 
            e.currentTarget.style.borderColor = '#E4BBEF';
            e.currentTarget.style.color = '#FFFFFF'; 
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF'; 
            e.currentTarget.style.borderColor = '#9A33FF';
            e.currentTarget.style.color = '#9A33FF'; 
          }}
          onClick={() => {
            window.location.href = 'mailto:brubsmarcelle2022@gmail.com'; 
          }}
        >
          Enviar E-mail
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;