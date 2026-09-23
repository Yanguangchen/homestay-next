"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024); // Increased breakpoint for complex navbar
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-pill">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link href="/" className="logo-text" aria-label="sglearninghub home">
              <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="var(--red)" />
                <path d="M6 21h20M9 21v-6h3v6M14 21V9h4v12M20 21v-8h3v8" stroke="var(--paper)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="logo-word">sg<span>learning</span>hub</span>
            </Link>
          </div>

          {!isMobileView ? (
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about-us" className="nav-link">About Us</Link>
              <Link href="/StudyTours" className="nav-link">Study Tours</Link>
              <Link href="/Blogs" className="nav-link">Blogs</Link>
              <Link href="/faq" className="nav-link">FAQ</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
              
              <Link 
                href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/09/07/20250409072726-G90M1ZE0.json" 
                className="nav-link-ai"
              >
                Ask our assistant
              </Link>
            </div>
          ) : (
            <button
              type="button"
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
            </button>
          )}
        </div>

        {isMobileView && isMenuOpen && (
          <div className="mobile-menu">
            <Link href="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
            <Link href="/about-us" className="mobile-link" onClick={toggleMenu}>About Us</Link>
            <Link href="/StudyTours" className="mobile-link" onClick={toggleMenu}>Study Tours</Link>
            <Link href="/Blogs" className="mobile-link" onClick={toggleMenu}>Blogs</Link>
            <Link href="/faq" className="mobile-link" onClick={toggleMenu}>FAQ</Link>
            <Link href="/contact" className="mobile-link" onClick={toggleMenu}>Contact</Link>
            
            <Link 
              href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/09/07/20250409072726-G90M1ZE0.json" 
              className="mobile-link-ai"
              onClick={toggleMenu}
            >
              Ask our assistant
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
