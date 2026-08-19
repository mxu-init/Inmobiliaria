import "../pages/apartments/Apartments.css";

const images = import.meta.glob("../assets/img/*.png", {
    eager: true,
    import: "default",
});

function ApartmentCard(props) {
    return (
        <div className="card">
            <div className="cardImage">
                <img
                    className="cardImg"
                    src={images[`../assets/img/${props.image}.png`]}
                    alt={props.title}
                />
                <span className="cardPrice">{props.price} €</span>
            </div>
            <div className="cardInfo">
                <h3 className="cardTitle">{props.title}</h3>
                <div className="cardDetails">
                    <span>{props.rooms} Hab.</span>
                    <span>{props.bathrooms} Baños</span>
                    <span>{props.location}</span>
                </div>
            </div>
        </div>
    );
}

export default ApartmentCard;