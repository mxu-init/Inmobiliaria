import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contactWelcome">
      <div className="contactContainer">
        <span className="contactKicker">Estamos aquí para ti</span>

        <h1 className="contactTitle">
          Contác<span>tanos</span>
        </h1>

        <h2 className="contactSubtitle">¿Tienes dudas o necesitas ayuda?</h2>

        <p className="contactDescription">
          Nuestro equipo está listo para ayudarte. Escríbenos, llámanos o
          visítanos. ¡Será un gusto atenderte!
        </p>

        <div className="contactInfoList">
          <a href="mailto:info@colivingcampus.com" className="contactInfoItem">
            <span className="contactIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <span>info@colivingcampus.com</span>
          </a>

          <a href="tel:+34600123456" className="contactInfoItem">
            <span className="contactIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span>+34 600 123 456</span>
          </a>

          <div className="contactInfoItem">
            <span className="contactIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span>Calle 400, Madrid, España</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
