import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footerContainer">
            <section className="footerContent">
                <div className="footerLeft">
                    <div className="footerLogo">
                        <span className="logoColiving">Coliving</span>{" "}
                        <span className="logoCampus">Campus</span>
                    </div>
                    <p className="footerText">
                        PropTech Innovators · Innovación inteligente para el hogar del mañana. © 2026 PropTech Innovators. Todos los derechos reservados.
                    </p>
                </div>

                <nav className="footerLinks">
                    <a href="#privacy">Privacidad</a>
                    <a href="#terms">Términos</a>
                    <a href="#cookies">Cookies</a>
                    <a href="#contact">Contacto</a>
                </nav>

            </section>
        </footer>
    );
};

export default Footer;