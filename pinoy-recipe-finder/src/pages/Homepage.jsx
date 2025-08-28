import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error loading recipes:', error));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Cookbook</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{recipe.name}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
