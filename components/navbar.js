"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Use Next.js's built-in Link

//import local components
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      console.log("Mobile View:", window.innerWidth <= 768); // Debugging output
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bodyStyle = {
    padding: "none",
    margin: "none",
    width: "100%",
  };

  const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    padding: "1% 0",
    width: "100%",
    position: "relative",
    zIndex: 1,
    fontFamily: "Montserrat, sans-serif",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px",
  };

  const logoStyle = {
    width: "10%",
    padding: "0%",
  };

  const menuStyle = {
    display: isMenuOpen ? "block" : "none",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "black",
    textAlign: "center",
  };

  const hamburgerStyle = {
    display: isMobileView ? "block" : "none",
    fontSize: "30px",
    color: "white",
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const navLinksContainerStyle = {
    display: isMobileView ? "none" : "flex",
    justifyContent: "space-around",
    width: "100%",
  };

  const navLinksMobileStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <nav>
      <div style={bodyStyle}>
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          <img
            src="/Assets/topBanner.png"
            alt="Logo"
            style={logoStyle}
            className="topbanner"
          />
        </div>
        <div style={navBarStyle} className="navbarStyle">
          <div
            style={hamburgerStyle}
            onClick={toggleMenu}
            className="hamburger"
          >
            &#9776;
          </div>
          <div style={navLinksContainerStyle}>
            <Link href="/" style={linkStyle} className="navlinks">
              Home
            </Link>
            <Link href="/StudyTours" style={linkStyle} className="navlinks">
              Study Tours
            </Link>
            <Link href="/contact" style={linkStyle} className="navlinks">
              Contact
            </Link>
            <Link
              href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/09/07/20250409072726-G90M1ZE0.json"
              style={linkStyle}
              className="navlinks"
            >
              Chat with our AI
            </Link>
            <Link
              href="/Blogs"
              style={linkStyle}
              className="navlinks"
            >
              Blogs
            </Link>
          </div>
          {isMenuOpen && (
            <div style={{ ...menuStyle, ...navLinksMobileStyle }}>
              <Link
                href="/"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/StudyTours"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Study Tours
              </Link>

              <Link
                href="/contact"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Contact
              </Link>

              <Link
                href="/Blogs"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Blogs
              </Link>

              <Link
                href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/09/07/20250409072726-G90M1ZE0.json"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Chat with our AI
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
