import React from 'react';
import { Menu } from 'antd';

const Header: React.FC = () => {
  const menuItems = [
    {
      key: 'about',
      label: (
        <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>
          Sobre Mim
        </a>
      ),
      style: {
        fontSize: '16px',
        padding: '0 30px',
        transition: 'all 0.3s ease',
      },
    },
    {
      key: 'projects',
      label: (
        <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>
          Projetos
        </a>
      ),
      style: {
        fontSize: '16px',
        padding: '0 30px',
        transition: 'all 0.3s ease',
      },
    },
    {
      key: 'experience',
      label: (
        <a href="#experience" style={{ textDecoration: 'none', color: 'inherit' }}>
          Experiência
        </a>
      ),
      style: {
        fontSize: '16px',
        padding: '0 30px',
        transition: 'all 0.3s ease',
      },
    },
    {
      key: 'contact',
      label: (
        <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          Contato
        </a>
      ),
      style: {
        fontSize: '16px',
        padding: '0 30px',
        transition: 'all 0.3s ease',
      },
    },
  ];

  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <Menu
        mode="horizontal"
        items={menuItems}
        style={{
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderBottom: '1px solid #e8e8e8',
          height: '80px',
          lineHeight: '80px',
        }}
      />
    </div>
  );
};

export default Header;