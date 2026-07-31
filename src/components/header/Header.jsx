import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#welcome");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#welcome", label: "Inicio" },
    { href: "#apartments", label: "Pisos" },
    { href: "#aboutUs", label: "Historia" },
    { href: "#agents", label: "Agentes" },
  ];

  return (
    <header className={`navbarContainer ${scrolled ? "navbarScrolled" : ""}`}>
      <section className="navbarContent">
        <div className="navbarLogo">
          <span className="logoColiving">Coliving</span>{" "}
          <span className="logoCampus">Campus</span>
        </div>

        <nav className="navbarLinks">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeLink === link.href ? "active" : ""}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div>
          <a
            href="#contact"
            className={`navbarBtn ${activeLink === "#contact" ? "active" : ""}`}
            onClick={() => setActiveLink("#contact")}
          >
            Contactar
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;