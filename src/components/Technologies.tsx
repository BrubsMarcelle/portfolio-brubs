import React from 'react';

const Technologies: React.FC = () => {
  return (
    <div
      id="technologies"
      style={{
        padding: '100px 20px',
        textAlign: 'center',
        color: '#FFFFFF', 
      }}
    >
      {/* Título */}
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: '35px',
          marginBottom: '40px',
        }}
      >
        Tecnologias
      </h2>

      {/* Ícones das tecnologias */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px', 
        }}
      >
        {/* Ícone do React */}
        <img
          src="/assets/react.png"
          alt="React"
          style={{ width: '60px', height: '60px' }}
        />
        {/* Ícone do HTML */}
        <img
          src="/assets/HTML.png" 
          alt="HTML"
          style={{ width: '60px', height: '60px' }}
        />
        {/* Ícone do JavaScript */}
        <img
          src="/assets/JS.png" 
          alt="JavaScript"
          style={{ width: '60px', height: '60px' }}
        />
        {/* Ícone do TypeScript */}
        <img
          src="/assets/TS.png" 
          alt="TypeScript"
          style={{ width: '60px', height: '60px' }}
        />
      </div>
    </div>
  );
};

export default Technologies;