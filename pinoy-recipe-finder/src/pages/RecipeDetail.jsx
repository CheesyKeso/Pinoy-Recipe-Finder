import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error loading recipe:', error));
  }, [id]);

  useEffect(() => {
    // Check if this recipe is favorited
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(Number(id)));
  }, [id]);

  const handleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      favorites = favorites.filter(favId => favId !== Number(id));
    } else {
      favorites.push(Number(id));
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="recipe-detail-container">
      <Link to="/" className="back-link">
        &larr; Back to Homepage
      </Link>
      <h1>{recipe.name}</h1>
      <p className="recipe-category">Category: {recipe.category}</p>
      <img src={recipe.image} alt={recipe.name} className="recipe-detail-img" />
      <button
        onClick={handleFavorite}
        className={`favorite-btn${isFavorite ? ' favorited' : ''}`}
      >
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
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
