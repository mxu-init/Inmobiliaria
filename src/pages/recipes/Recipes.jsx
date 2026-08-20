import { useState, useEffect } from "react";
import axios from "axios";
import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpanishRecipes = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Spanish",
        );

        setRecipes(response.data.meals || []);
      } catch (err) {
        setError(err.message || "Error al conectar con la API");
      } finally {
        setLoading(false);
      }
    };

    fetchSpanishRecipes();
  }, []);

  if (loading)
    return (
      <section className="sectionContainer">
        <p className="bodyText">Cargando recetas de España...</p>
      </section>
    );
  if (error)
    return (
      <section className="sectionContainer">
        <p className="bodyText">Hubo un error: {error}</p>
      </section>
    );

  return (
    <section className="sectionContainer">
      <h2 className="sectionTitle">Recetas de España 🇪🇸</h2>
      <p className="sectionSubtitle">
        Descubre una selección auténtica de la gastronomía española.
      </p>

      <div className="recipesGrid">
        {recipes.map((meal) => (
          <div key={meal.idMeal} className="recipeCard">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="recipeImage"
            />
            <h3 className="subTitle" style={{ marginTop: "15px" }}>
              {meal.strMeal}
            </h3>
            <button className="btn btnPrimary btnSmall">Ver receta</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recipes;
