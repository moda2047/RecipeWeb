import React, { useEffect, useState } from "react";
import "./css/MainPage.css";
import axios from "axios";
import Ingredient from "../components/Ingredient";
import { useCookies } from "react-cookie";

const MainPage = () => {
  const [newIngredient, setNewIngredient] = useState("");
  const [originIngredients, setOriginIngredients] = useState([]);
  const [addTrue, setAddTrue] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["loggedIn"]);
  const getIngredients = async () => {
    const url = "http://localhost:8080/member/ingredients";

    try {
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.result) {
        console.log("재료가 성공적으로 조회되었습니다.");
        console.log(response.data.data.ingredients);
        setOriginIngredients(response.data.data.ingredients);
      } else {
        console.error("오류가 생겼습니다");
      }
    } catch (error) {
      console.error("재료 조회 중 오류가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    getIngredients();
    console.log("useEffect");
  }, [addTrue]);
  useEffect(() => {
    setOriginIngredients([]);
    console.log("useEffectOring");
  }, [cookies]);
  const addIngredient = async () => {
    const url = "http://localhost:8080/member/ingredients";
    const data = { ingredientName: newIngredient };

    try {
      const response = await axios.post(url, data, { withCredentials: true });
      if (response.data.result) {
        console.log("재료가 성공적으로 추가되었습니다.");
        setAddTrue(!addTrue);
        setNewIngredient("");
      } else {
        console.error("오류가 생겼습니다");
      }
    } catch (error) {
      console.error("재료를 추가하는 중 오류가 발생했습니다.", error);
    }
  };

  const deleteIngredient = async (ingredientId) => {
    const url = `http://localhost:8080/member/ingredients/${ingredientId}`;

    try {
      const response = await axios.delete(url, { withCredentials: true });
      if (response.data.result) {
        console.log("재료가 성공적으로 삭제되었습니다.");
        setAddTrue(!addTrue);
      } else {
        console.error("오류가 생겼습니다");
      }
    } catch (error) {
      console.error("재료를 삭제하는 중 오류가 발생했습니다.", error);
    }
  };

  const updateIngredient = async (ingredientId, updatedName) => {
    const url = `http://localhost:8080/member/ingredients/${ingredientId}`;
    const data = { ingredientName: updatedName };

    try {
      const response = await axios.put(url, data, { withCredentials: true });
      if (response.data.result) {
        console.log("재료가 성공적으로 수정되었습니다.");
        setAddTrue(!addTrue);
      } else {
        console.error("오류가 생겼습니다");
      }
    } catch (error) {
      console.error("재료를 수정하는 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <div className="MainGrid">
      <div className="Recipe">레시피</div>
      <div className="IngredientPart">
        <div className="IngredientInputContainer">
          <input
            type="text"
            className="IngredientInput"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <button className="IngredientAddButton" onClick={addIngredient}>
            추가
          </button>
        </div>
        {originIngredients.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            ingredient={ingredient}
            onDelete={() => deleteIngredient(ingredient.id)}
            onUpdate={(updatedName) =>
              updateIngredient(ingredient.id, updatedName)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
