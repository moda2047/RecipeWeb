import { useLocation } from "react-router-dom";
import "./css/RecipeDetail.css";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const location = useLocation();
  const { id } = location.state;
  const [recipeDetail, setRecipeDetail] = useState(null);

  const getRecipeDetail = async () => {
    const url = `http://localhost:8080/recipe/${id}`;
    try {
      const response = await axios.get(url);
      if (response.data.result) {
        console.log("레시피 Detail이 성공적으로 조회되었습니다.");
        setRecipeDetail(response.data.data);
      } else {
        console.error("오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("레시피 Detail 중 오류가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    getRecipeDetail();
  }, []);

  return (
    <div className="recipe-detail-container">
      {recipeDetail && (
        <div className="recipe-detail">
          <h2 className="recipe-name">{recipeDetail.name}</h2>
          <img
            src={recipeDetail.imageS}
            alt={recipeDetail.name}
            className="recipeDetail-image"
          />
          <div className="recipe-ingredients">
            <h3 className="recipe-instruction">재료</h3>
            <p>{recipeDetail.recipeIngredient}</p>
          </div>
          <div className="recipe-steps">
            <h3 className="recipe-instruction">조리 방법</h3>
            {recipeDetail.manual.map((step) => (
              <div key={step.id} className="recipe-step">
                <p>{step.manual}</p>
                {step.image && (
                  <img
                    src={step.image}
                    alt={`Step ${step.stepNumber}`}
                    className="recipe-image-step"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
