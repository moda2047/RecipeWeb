import { useLocation } from "react-router-dom";
import "./css/RecipeSearch.css";
import Recipe from "../components/Recipe";
import { useEffect } from "react";

const RecipeSearch = () => {
  const location = useLocation();
  const searchRecipe = location.state.searchRecipe;
  const recipes = searchRecipe ? searchRecipe.recipes : [];
  useEffect(() => {
    console.log(location.state);
  });
  return (
    <>
      <div className="Recipe">
        {recipes &&
          recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              id={recipe.id}
              image={recipe.imageS}
              name={recipe.name}
              hashtags={recipe.hashTag}
              cookType={recipe.cookType}
            />
          ))}
      </div>
    </>
  );
};

export default RecipeSearch;
