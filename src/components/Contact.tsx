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
        textAlign: 'center',
        padding: '20px', 
      }}
    >

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

        <MailOutlined style={{ fontSize: '20px', color: '#FFFFFF' }} />
        <a
          href="mailto:brubsmarcelle2022@gmail.com"
          style={{ color: '#FFFFFF', textDecoration: 'none' }} // Estilo para o link
        >
          brubsmarcelle2022@gmail.com
        </a>
      </p>

      <a
        href="https://www.linkedin.com/in/bruna-marcelle-gregorio-silva-900b72224/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/In.png"
          alt="LinkedIn"
          style={{ width: '30px', height: '30px' }}
        />
      </a>
    </div>
  );
};

export default Contact;