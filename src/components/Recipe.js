import React from "react";
import "./css/Recipe.css";
import { useNavigate } from "react-router-dom";

const Recipe = ({ id, image, name, hashtags, cookType }) => {
  const navigate = useNavigate();
  const clickDetail = () => {
    navigate("/RecipeDetail", { state: { id } });
  };
  return (
    <div className="recipe-container" onClick={clickDetail}>
      <img className="recipe-image" src={image} alt={name} />
      <div className="recipe-details">
        <h2 className="recipe-name">{name}</h2>
        <p className="recipe-hashtags">Hashtags: {hashtags}</p>
        <p className="recipe-cook-type">Cook Type: {cookType}</p>
      </div>
    </div>
  );
};

export default Recipe;
