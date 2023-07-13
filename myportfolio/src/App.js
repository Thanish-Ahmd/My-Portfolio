
import { useEffect, useState } from 'react';
import './App.css';
import './css/main.css'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectsMobile from './components/ProjectsMobile';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import OtherSkills from './components/OtherSkills';
import Resume from './components/Resume';
import Certifications from './components/Certifications';

function App() {

  



  return (
    <div className="App relative bg-cover bg-no-repeat bg-center h-screen">
      <NavBar />
        <Banner />
        <AboutMe />
        
        <Skills />
        <OtherSkills />
        <Projects />
        <ProjectsMobile />
        <Certifications />
        <ContactMe />
        <Resume />
        <Footer />
        
        
       
    </div>
  );
}

export default App;
