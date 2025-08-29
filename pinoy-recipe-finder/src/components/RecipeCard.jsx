import React from 'react';
import { Link } from 'react-router-dom';
import '../css/RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-card-img" />
      <div className="recipe-card-content">
        <h3>{recipe.name}</h3>
        <p className="recipe-card-desc">{recipe.description}</p>
        <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
