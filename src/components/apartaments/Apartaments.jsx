import React from "react";
import "./Apartaments.css";

const images = import.meta.glob("../../assets/img/*.png", {
    eager: true,
    import: "default",
});

function Card(props) {
    return (
        <div className="card">
            <div className="cardImage">
                <img
                    className="cardImg"
                    src={images[`../../assets/img/${props.image}.png`]}
                    alt={props.title}
                />
                <span className="cardPrice">{props.price} </span>
            </div>
            <div className="cardInfo">
                <p className="cardArea">{props.area}</p>
                <h3 className="cardTitle">{props.title}</h3>
                <div className="cardDetails">
                    <span>{props.rooms} Hab.</span>
                    <span>{props.bathrooms} Baños</span>
                    <span>{props.extra}</span>
                </div>
            </div>
        </div>
    );
}

function Apartaments() {
    return (

        <section id="apartments" className="apartments">
            <div className="sectionContainer apartamentsContainer" >
                <h2 className="apartamentsLabel">Nuestra oferta</h2>
                <p className="apartamentsSubtitle">
                    Descubre nuestros hermosos apartamentos en la ciudad.
                </p>

                <div className="cardsList">
                    <Card
                        image="PlazaMayor"
                        price="450€ / mes"
                        area="Plaza Mayor"
                        title="Habitación doble con balcón"
                        rooms={4}
                        bathrooms={2}
                        extra="Internet incluido"
                    />
                    <Card
                        image="Retiro"
                        price="380€ / mes"
                        area="Retiro"
                        title="Habitación doble con estilo mediterráneo"
                        rooms={5}
                        bathrooms={3}
                        extra="Amueblado"
                    />
                    <Card
                        image="BarrioSalamanca"
                        price="520€ / mes"
                        area="Barrio Salamanca"
                        title="Habitación individual con baño en suite"
                        rooms={3}
                        bathrooms={2}
                        extra="Aire acondicionado"
                    />
                </div>
            </div>
        </section>
    );
}

export default Apartaments;
