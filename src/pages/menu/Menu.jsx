import { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "../../components/MenuCard";
import './Menu.css';

function Menu() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Spanish"
        );

        setMeals(response.data.meals);
      } catch (error) {
        setError("No se pudieron cargar las recetas.");
      }
    };

    getMeals();
  }, []);

  return (
    <section id="menu" className="menu">
      <div className="menuHeader">
        <h2 className="sectionTitle">Recetas <span>Españolas</span></h2>
        <p className="sectionSubtitle">
          Descubre las mejores recetas de la gastronomía española.
        </p>
      </div>

      {error && <p className="menuError">{error}</p>}

      <div className="menuGrid">
        {meals.map((meal) => (
          <MenuCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
            area={meal.strArea}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;