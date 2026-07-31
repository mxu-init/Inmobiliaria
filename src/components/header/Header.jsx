import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbarContainer ${scrolled ? "navbarScrolled" : ""}`}>
      <section className="navbarContent">
        <div className="navbarLogo">
          <span className="logoColiving">Coliving</span> <span className="logoCampus">Campus</span>
        </div>

        <nav className="navbarLinks">
          <a href="#inicio" className="active">
            Inicio
          </a>
          <a href="#agentes">Agentes</a>
          <a href="#aboutUs">Nosotros</a>
          <a href="#apartments">Pisos</a>
        </nav>

        <div>
          <a href="#contacto" className="navbarBtn">
            Contactar
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;