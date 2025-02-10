import React from 'react';
import { MailOutlined } from '@ant-design/icons';

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        textAlign: 'center',
        padding: '20px', 
      }}
    >
      {/* Título */}
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: '35px',
          color: '#FFFFFF',
          marginBottom: '20px',
        }}
      >
        Contato:
      </h2>

      {/* E-mail */}
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          color: '#FFFFFF',
          marginBottom: '20px',
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', 
        }}
      >
        {/* Ícone de e-mail */}
        <MailOutlined style={{ fontSize: '20px', color: '#FFFFFF' }} />

        {/* Endereço de e-mail clicável */}
        <a
          href="mailto:brubsmarcelle2022@gmail.com"
          style={{ color: '#FFFFFF', textDecoration: 'none' }} // Estilo para o link
        >
          brubsmarcelle2022@gmail.com
        </a>
      </p>

      {/* Ícone do LinkedIn */}
      <a
        href="https://www.linkedin.com/in/bruna-marcelle-gregorio-silva-900b72224/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/IN.png"
          alt="LinkedIn"
          style={{ width: '30px', height: '30px' }}
        />
      </a>
    </div>
  );
};

export default Contact;