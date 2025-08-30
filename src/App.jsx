// src/App.jsx
import React from 'react';
// Removed BrowserRouter, Routes, Route as we are going to a single page
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
    <div className="App">
      <Navbar />
      <main>
        {/* AnimatePresence can still be used for component mounting/unmounting if needed,
            but for a single page, it might be less critical unless components are conditionally rendered.
            Keeping it for now as it was part of the original setup. */}
        <AnimatePresence mode='wait'>
          {/* Render all components directly */}
          
          <AnimatedPage><Introduction data={userData} /></AnimatedPage>
          <AnimatedPage><Skills data={userData.skills} /></AnimatedPage>
          <AnimatedPage><Education data={userData.education} /></AnimatedPage>
          <AnimatedPage><Projects data={userData.projects} /></AnimatedPage>
          <AnimatedPage><Experience data={userData.experience} /></AnimatedPage>
          <AnimatedPage><Resume data={userData.resume} /></AnimatedPage>
        </AnimatePresence>
      </main>
      <Footer data={userData.contact} testimonials={userData.testimonials} />
    </div>
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
