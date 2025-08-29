import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Favorites.css';

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json())
      .then((data) => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const favRecipes = data.filter(recipe => favorites.includes(recipe.id));
        setFavoriteRecipes(favRecipes);
      });
  }, []);

  return (
    <div className="favorites-container">
      <Link to="/" className="back-link">
        &larr; Back to Homepage
      </Link>
      <h1>
        Favorited Recipes
        <span className="favorites-page-count">
          ({favoriteRecipes.length})
        </span>
      </h1>
      {favoriteRecipes.length === 0 ? (
        <p>No favorited recipes yet.</p>
      ) : (
        <div className="favorites-list">
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id} className="favorite-card">
              <img src={recipe.image} alt={recipe.name} className="favorite-card-img" />
              <h2 className="favorite-card-title">{recipe.name}</h2>
              <p className="favorite-card-desc">{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="favorite-card-link">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
