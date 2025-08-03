'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-content">
        <div className="logo">NOESIS</div>

        <div className="nav-links">
          {/* The Model Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setOpenMenu('model')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="dropdown-label">The Model ▾</span>
            {openMenu === 'model' && (
              <div className="dropdown-menu">
                <Link href="/about">About</Link>
              </div>
            )}
          </div>

          {/* Frameworks Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setOpenMenu('frameworks')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="dropdown-label">Frameworks ▾</span>
            {openMenu === 'frameworks' && (
              <div className="dropdown-menu">
                <Link href="/frameworks">View Frameworks</Link>
              </div>
            )}
          </div>

          {/* Diagnostic Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setOpenMenu('diagnostic')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="dropdown-label">Diagnostic ▾</span>
            {openMenu === 'diagnostic' && (
              <div className="dropdown-menu">
                <Link href="/diagnostic">Start Diagnostic</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
