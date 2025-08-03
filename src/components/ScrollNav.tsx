'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollNav.css';

const ScrollNav = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          className="scroll-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="nav-content">
            <span className="brand">Noesis</span>
            <div className="nav-links">
              <a href="#">Diagnostic</a>
              <a href="#">Tracks</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default ScrollNav;
