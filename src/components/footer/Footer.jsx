import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className="footerContent">
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
                    <a href="#privacidad">Privacidad</a>
                    <a href="#terminos">Términos</a>
                    <a href="#cookies">Cookies</a>
                    <a href="#contacto">Contacto</a>
                </nav>

            </div>
        </footer>
    );
};

export default Footer;