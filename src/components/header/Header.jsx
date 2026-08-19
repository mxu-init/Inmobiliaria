import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/pisos", label: "Pisos" },
    { to: "/historia", label: "Historia" },
    { to: "/agentes", label: "Agentes" },
    { to: "/recetas", label: "Recetas" },
  ];

  return (
    <header className={`navbarContainer ${scrolled ? "navbarScrolled" : ""}`}>
      <section className="navbarContent">
        <div className="navbarLogo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="logoColiving">Coliving</span>{" "}
            <span className="logoCampus">Campus</span>
          </Link>
        </div>

        <nav className="navbarLinks">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `navbarBtn ${isActive ? "active" : ""}`
            }
          >
            Contactar
          </NavLink>
        </div>
      </section>
    </header>
  );
};

export default Header;
