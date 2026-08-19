import "./Apartments.css";
import ApartmentCard from "../../components/ApartmentCard";
import apartments from "../../data/apartmentsData.js";

function Apartments() {
    return (
        <section id="apartments" className="apartments">
            <div className="apartmentsHeader">
                <h2 className="sectionTitle">Nuestra oferta</h2>
                <p className="sectionSubtitle">
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