import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const favRecipes = data.filter(recipe => favorites.includes(recipe.id));
        setFavoriteRecipes(favRecipes);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
        &larr; Back to Homepage
      </Link>
      <h1>Favorited Recipes</h1>
      {favoriteRecipes.length === 0 ? (
        <p>No favorited recipes yet.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '250px' }}>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#2563eb' }}>
                <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
                <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{recipe.name}</h2>
              </Link>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
