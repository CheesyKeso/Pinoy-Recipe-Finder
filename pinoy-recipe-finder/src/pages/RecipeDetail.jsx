import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error loading recipe:', error));
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
        &larr; Back to Homepage
      </Link>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginBottom: '1rem' }} />
      <p>{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
