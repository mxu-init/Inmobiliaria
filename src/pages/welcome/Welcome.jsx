import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ApartmentCard";
import apartments from "../../data/apartmentsData.js";
import "./Welcome.css";

function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(
          (previousIndex) => (previousIndex + 1) % apartments.length,
        );
        setFade(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentApartment = apartments[currentIndex];

  return (
    <section id="welcome" className="welcome">
      <div className="welcomeWrapper">
        <div className="welcomeContainer">
          <p className="kicker">Bienvenido a</p>
          <h1 className="displayTitle">
            Coliving<span>Campus</span>
          </h1>
          <h2 className="subTitle">
            Encuentra tu hogar ideal como estudiante
          </h2>
          <p className="bodyText">
            Te ayudamos a encontrar el piso compartido perfecto, cerca de tu
            facultad y con la mejor compañía. Sin líos, sin sorpresas.
          </p>

          <div className="welcomeCompactBox">
            <div className="welcomeFeaturedBlock">
              <span className="featuredBlockTitle">Pisos destacados</span>
              <div
                className={`featuredCardWrapper ${fade ? "fadeIn" : "fadeOut"}`}
              >
                <Card {...currentApartment} />
              </div>
            </div>

            <div className="welcomeActionsPanel">
              <Link to="/pisos" className="btn btnPrimary">
                Ver pisos disponibles
              </Link>
              <Link to="/historia" className="btn btnSecondary">
                Conócenos
              </Link>
            </div>
          </div>
        </div>

        <div className="welcomeVisualPlaceholder"></div>
      </div>
    </section>
  );
}

export default Welcome;
