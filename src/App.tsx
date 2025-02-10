import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Technologies from './components/Technologies'; 
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Technologies /> {/* Adicione aqui */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;