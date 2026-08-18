import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ApartmentCards";
import "./Welcome.css";

const featuredApartments = [
  {
    image: "PlazaMayor",
    price: "450€ / mes",
    area: "Plaza Mayor",
    title: "Habitación doble con balcón",
    rooms: 4,
    bathrooms: 2,
    extra: "Internet incluido",
  },
  {
    image: "Retiro",
    price: "380€ / mes",
    area: "Retiro",
    title: "Habitación doble con estilo mediterráneo",
    rooms: 5,
    bathrooms: 3,
    extra: "Amueblado",
  },
  {
    image: "BarrioSalamanca",
    price: "520€ / mes",
    area: "Barrio Salamanca",
    title: "Habitación individual con baño en suite",
    rooms: 3,
    bathrooms: 2,
    extra: "Aire acondicionado",
  },
];

function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % featuredApartments.length,
        );
        setFade(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentApartment = featuredApartments[currentIndex];

  return (
    <section id="welcome" className="welcome">
      <div className="welcomeWrapper">
        <div className="welcomeContainer">
          <p className="kicker">Bienvenido a</p>
          <h1 className="welcomeBrand">
            Coliving<span>Campus</span>
          </h1>
          <h2 className="welcomeSubtitle">
            Encuentra tu hogar ideal como estudiante
          </h2>
          <p className="welcomeText">
            Te ayudamos a encontrar el piso compartido perfecto, cerca de tu
            facultad y con la mejor compañía. Sin líos, sin sorpresas.
          </p>

          <div className="welcomeActions">
            <Link to="/pisos" className="btn btnPrimary">
              Ver pisos disponibles
            </Link>
            <Link to="/historia" className="btn btnSecondary">
              Conócenos
            </Link>
          </div>

          <div className="welcomeFeaturedInline">
            <p className="featuredInlineTitle">Pisos destacados</p>
            <div
              className={`featuredInlineCard ${fade ? "fadeIn" : "fadeOut"}`}
            >
              <Card
                image={currentApartment.image}
                price={currentApartment.price}
                area={currentApartment.area}
                title={currentApartment.title}
                rooms={currentApartment.rooms}
                bathrooms={currentApartment.bathrooms}
                extra={currentApartment.extra}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
