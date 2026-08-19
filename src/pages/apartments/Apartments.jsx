import "./Apartments.css";
import ApartmentCard from "../../components/ApartmentCards.jsx";
import apartments from "../../data/apartmentsData.js";

function Apartments() {
    return (
        <section id="apartments" className="apartments">
            <div className="sectionContainer apartamentsContainer">
                <h2 className="apartamentsLabel">Nuestra oferta</h2>
                <p className="apartamentsSubtitle">
                    Descubre nuestros hermosos apartamentos en la ciudad.
                </p>
            </div>

            <div className="apartmentsGrid">
                {apartments.map((apt) => (
                    <ApartmentCard key={apt.id} {...apt} />
                ))}
            </div>
        </section>
    );
}

export default Apartments;