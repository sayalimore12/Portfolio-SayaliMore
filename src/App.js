import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import Certification from './components/Certification';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Smoothly animated sections */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
            <Home />
          </section>
          <section id="about" className="min-h-screen flex items-center justify-center bg-white border-t border-gray-100">
            <About />
          </section>
          <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <Skills />
          </section>
           <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
          <Projects />
           </section>
          <section id="experience" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
           <Experience/>
          </section>
          <section id="certification" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
            <Certification/>
          </section>
            <section id="education" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <Education/>
           </section>
           <section id="footer" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <Footer />
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
