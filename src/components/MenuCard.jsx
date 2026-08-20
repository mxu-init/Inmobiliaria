import "../pages/menu/Menu.css";

function MenuCard(props) {
    return (
        <div className="menuCard">
            <div className="menuCardImage">
                <img
                    className="menuCardImg"
                    src={props.image}
                    alt={props.name}
                />
                {/* <span className="menuCardBadge">{props.area}</span> */}
            </div>
            <div className="menuCardInfo">
                <h3 className="menuCardTitle">{props.name}</h3>
                
            </div>
        </div>
    );
}

export default MenuCard;
