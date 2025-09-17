import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Patents from './components/Patents';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    // Initialize animations after component mounts
    const timer = setTimeout(() => {
      initAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Patents />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;