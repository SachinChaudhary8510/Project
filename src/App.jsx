// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // For page animations

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';

import userData from './data/data'; // Import universal data

import './App.css'; // For general layout and dark theme

function App() {
  return (
    <Router basename="/"> 
      <div className="App">
        <Navbar />
        <main>
          <AnimatePresence mode='wait'>
            <Routes>
              <Route path="/" element={<AnimatedPage><Introduction data={userData} /></AnimatedPage>} />
              <Route path="/skills" element={<AnimatedPage><Skills data={userData.skills} /></AnimatedPage>} />
              <Route path="/education" element={<AnimatedPage><Education data={userData.education} /></AnimatedPage>} />
              <Route path="/projects" element={<AnimatedPage><Projects data={userData.projects} /></AnimatedPage>} />
              <Route path="/experience" element={<AnimatedPage><Experience data={userData.experience} /></AnimatedPage>} />
              <Route path="/resume" element={<AnimatedPage><Resume data={userData.resume} /></AnimatedPage>} />
              {/* Add more routes for individual sections if desired, or use hash links for single-page navigation */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer data={userData.contact} testimonials={userData.testimonials} />
      </div>
    </Router>
  );
}

// Helper component for page transitions
const AnimatedPage = ({ children }) => {
  const animations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
