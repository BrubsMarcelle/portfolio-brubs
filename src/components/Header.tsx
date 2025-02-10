import React from 'react';
import { Menu } from 'antd';

const Header: React.FC = () => {
  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <Menu
        mode="horizontal"
        style={{
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderBottom: '1px solid #e8e8e8',
          height: '80px',
          lineHeight: '80px',
        }}
      >
        {/* Item "Sobre Mim" */}
        <Menu.Item
          key="about"
          style={{
            fontSize: '16px',
            padding: '0 30px',
            transition: 'all 0.3s ease', 
          }}
        >
          <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>
            Sobre Mim
          </a>
        </Menu.Item>

        {/* Item "Projetos" */}
        <Menu.Item
          key="projects"
          style={{
            fontSize: '16px',
            padding: '0 30px',
            transition: 'all 0.3s ease',
          }}
        >
          <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            Projetos
          </a>
        </Menu.Item>

        {/* Item "Experiência" */}
        <Menu.Item
          key="experience"
          style={{
            fontSize: '16px',
            padding: '0 30px',
            transition: 'all 0.3s ease',
          }}
        >
          <a href="#experience" style={{ textDecoration: 'none', color: 'inherit' }}>
            Experiência
          </a>
        </Menu.Item>

        {/* Item "Contato" */}
        <Menu.Item
          key="contact"
          style={{
            fontSize: '16px',
            padding: '0 30px',
            transition: 'all 0.3s ease',
          }}
        >
          <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            Contato
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;