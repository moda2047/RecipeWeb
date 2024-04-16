import React, { useState } from "react";
import "./css/Ingredient.css";

const Ingredient = ({ ingredient, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(ingredient.ingredientName);

  const handleUpdate = () => {
    onUpdate(editedName);
    setIsEditing(false);
  };

  return (
    <div className="Ingredient">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button onClick={handleUpdate}>저장</button>
        </>
      ) : (
        <>
          <span>{ingredient.ingredientName}</span>
          <button
            className="IngredientAddButton"
            onClick={() => setIsEditing(true)}
          >
            수정
          </button>
          <button className="IngredientAddButton" onClick={onDelete}>
            삭제
          </button>
        </>
      )}
    </div>
  );
};

export default Ingredient;
