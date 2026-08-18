import "./Apartaments.css";
import Card from "../../components/ApartmentCards";

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
