'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <svg className="navbar__logo-icon" width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#58a6ff" />
                <stop offset="50%" stopColor="#d2a8ff" />
                <stop offset="100%" stopColor="#ff9bce" />
              </linearGradient>
              <linearGradient id="logoGradientBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(88,166,255,0.12)" />
                <stop offset="100%" stopColor="rgba(210,168,255,0.12)" />
              </linearGradient>
            </defs>
            {/* Hexagonal background */}
            <path d="M50 4L93.3 27V73L50 96L6.7 73V27L50 4Z" fill="url(#logoGradientBg)" stroke="url(#logoGradient)" strokeWidth="2.5" />
            {/* Left bracket */}
            <path d="M28 36L18 50L28 64" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Right bracket */}
            <path d="M72 36L82 50L72 64" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Letter G */}
            <text x="50" y="58" textAnchor="middle" fill="url(#logoGradient)" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="36">G</text>
          </svg>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Gideon</span>
            <span className="navbar__logo-tag">.dev</span>
          </span>
          <span className="navbar__logo-cursor" />
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* CTA inside mobile menu */}
          <li className="navbar__links-cta-mobile" style={{ display: menuOpen ? 'block' : 'none' }}>
            <a href="/resume.pdf" className="navbar__cta" download>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a href="/resume.pdf" className="navbar__cta navbar__cta--desktop" download>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__toggle-bar" style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span className="navbar__toggle-bar" style={menuOpen ? { opacity: 0 } : {}} />
          <span className="navbar__toggle-bar" style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </div>
    </nav>
  );
}
